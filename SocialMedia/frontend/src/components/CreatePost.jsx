import React, { useContext, useRef, useState } from 'react'
import { RiVideoUploadLine } from "react-icons/ri";
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';


const CreatePost = (props) => {
    // console.log(props)
     let titleRef = useRef()  //{current:undefined}
  const [x, setX] = useState(false);
//   console.log(x)

  let token = localStorage.getItem('G4Auth');
//   console.log(token)


  function handleEmojiClicker(e) {
    // console.log(e)
    // console.log(e.emoji)
    let inputvalue = titleRef.current.value;
    // console.log(inputvalue)

    let ans = inputvalue + e.emoji;
    // console.log(ans)
    titleRef.current.value = ans
  }


  const [image, setimage] = useState('');

  function handleInputChanger(e) {

    let file = e.target.files[0];  //object {}
    // console.log(file)
    setimage(file)
    // let files = e.target.files // file list
    // let fileArr  = [...files]
    // console.log(files)
    // console.log(fileArr)
  }


  async function handleSubmit() {
    let formData = new FormData();
    formData.append('title', titleRef.current.value)
    formData.append('image', image)

    let res = await fetch('http://localhost:8090/posts/create', {
      method: 'POST',
      headers: {
        'authorization': token
      },
      body: formData
    })

    let data = await res.json();
    console.log(data)
    toast.success(data.msg)
    titleRef.current.value = '';
    setimage('')
    props.x()

  }

  let ctx = useContext(UserContext)  //{getUser, userData}
    console.log(ctx)

return (
  <div className="w-full px-3 sm:px-0 mt-6">
    
    <div className="
      max-w-xl mx-auto 
      bg-white 
      rounded-xl 
      shadow-md 
      border border-gray-200
      p-4
    ">

      {/* TOP SECTION */}
      <div className="flex items-center gap-3">
        
        {/* Avatar */}
        <img
          src={ctx.userData?.user?.profilePic}
          alt=""
          className="w-10 h-10 rounded-full"
        />

        {/* Input */}
        <textarea
          ref={titleRef}
          placeholder="What's on your mind?"
          className="
            w-full 
            bg-gray-100 
            rounded-full 
            px-4 py-2 
            resize-none 
            outline-none 
            text-gray-700
            placeholder-gray-500
            hover:bg-gray-200
            transition
          "
        />
      </div>

      {/* IMAGE PREVIEW */}
      {image && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(image)}
            alt=""
            className="w-full max-h-[300px] object-cover rounded-lg"
          />
        </div>
      )}

      {/* DIVIDER */}
      <hr className="my-4" />

      {/* ACTIONS */}
      <div className="flex justify-between items-center">

        {/* Left actions */}
        <div className="flex gap-6">

          {/* Upload */}
          <label htmlFor="a" className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
            <RiVideoUploadLine size={22} className="text-green-500" />
            <span className="text-gray-600 text-sm font-medium">Photo/Video</span>
          </label>

          {/* Emoji */}
          <div 
            onClick={() => setX(!x)} 
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg"
          >
            <BsEmojiSmile size={20} className="text-yellow-500" />
            <span className="text-gray-600 text-sm font-medium">Feeling</span>
          </div>

        </div>

        {/* Post Button */}
        <button
          onClick={handleSubmit}
          className="
            bg-blue-500 
            hover:bg-blue-600 
            text-white 
            px-4 py-2 
            rounded-lg 
            text-sm font-semibold
          "
        >
          Post
        </button>

      </div>

      {/* FILE INPUT */}
      <input hidden onChange={handleInputChanger} id="a" type="file" />

      {/* EMOJI PICKER */}
      {x && (
        <div className="mt-4">
          <EmojiPicker onEmojiClick={handleEmojiClicker} theme="light" />
        </div>
      )}

    </div>
  </div>
)
}

export default CreatePost
