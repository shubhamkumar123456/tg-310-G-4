import React, { useRef, useState } from 'react'
import { RiVideoUploadLine } from "react-icons/ri";
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { toast } from 'react-toastify';


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

 return (
  <div className="w-full px-4 mt-6">
    
    <div className="
      max-w-2xl mx-auto 
      bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 
      backdrop-blur-xl 
      border border-white/20 
      shadow-xl shadow-black/30
      rounded-2xl p-5 sm:p-6
    ">

      {/* TEXT + BUTTON */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
     <textarea
  ref={titleRef}
  placeholder="What's on your mind?"
  className="
    w-full 
    bg-white/20 
    text-white 
    placeholder-gray-300
    border-2 border-black 
    rounded-xl 
    p-3 
    outline-none 
    resize-none
    focus:ring-2 focus:ring-black
    focus:border-black
    transition
  "
/>

        <button
          onClick={handleSubmit}
          className="
            bg-gradient-to-r from-pink-500 to-purple-600 
            hover:scale-105 hover:shadow-lg
            transition-all duration-200
            text-white px-5 py-2 rounded-xl
          "
        >
          Post
        </button>
      </div>

      {/* ACTIONS */}
      <div className="flex items-center justify-between mt-4">

        <div className="flex items-center gap-6">

          {/* Upload */}
          <label htmlFor="a" className="cursor-pointer hover:scale-110 transition">
            <RiVideoUploadLine size={28} className="text-blue-400" />
          </label>

          {/* Emoji */}
          <BsEmojiSmile 
            onClick={() => setX(!x)} 
            size={26} 
            className="text-yellow-400 cursor-pointer hover:scale-110 transition"
          />
        </div>

      </div>

      {/* FILE INPUT */}
      <input hidden onChange={handleInputChanger} id="a" type="file" />

      {/* IMAGE PREVIEW */}
      {image && (
        <div className="mt-4">
          <img 
            src={URL.createObjectURL(image)} 
            alt=""
            className="w-full max-h-[300px] object-cover rounded-xl border border-white/20"
          />
        </div>
      )}

      {/* EMOJI PICKER */}
      {x && (
        <div className="mt-4">
          <EmojiPicker 
            onEmojiClick={handleEmojiClicker} 
            theme="dark" 
          />
        </div>
      )}

    </div>
  </div>
)
}

export default CreatePost
