import React, { useRef, useState } from 'react'
import { RiVideoUploadLine } from "react-icons/ri";
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";

const Home = () => {

  let titleRef = useRef()  //{current:undefined}
  const [x, setX] = useState(false);
  console.log(x)

  let token = localStorage.getItem('G4Auth');
  console.log(token)


  function handleEmojiClicker(e){
    // console.log(e)
    console.log(e.emoji)
    let inputvalue = titleRef.current.value;
    console.log(inputvalue)

    let ans = inputvalue + e.emoji;
    console.log(ans)
    titleRef.current.value = ans
  }


  const [image, setimage] = useState('');

  function handleInputChanger(e){
  
    let file = e.target.files[0];  //object {}
    console.log(file)
    setimage(file)
  }


  async function handleSubmit(){
      let formData = new FormData();
      formData.append('title', titleRef.current.value )
      formData.append('image',image)

      let res = await fetch('http://localhost:8090/posts/create',{
        method:'POST',
        headers:{
          'authorization':token
        },
        body:formData
      })

      let data = await res.json();
      console.log(data)

  }

  return (
    <div className=''>
        
      <h1>This is home page</h1>

      <div className='border rounded flex gap-4 flex-col p-8 w-[50%] mx-auto'>
        <textarea ref={titleRef} className='border rounded p-3' name="" id="" placeholder='whats on your mind..?'></textarea>
        <input hidden onChange={handleInputChanger} id='a' type="file" />

      <div className='flex items-center gap-9'>

         <label htmlFor="a">
            <RiVideoUploadLine size={30} color='blue'/>
        </label>

      <BsEmojiSmile onClick={()=>setX(!x)} size={25} color='green'/>
      </div>

     {image && <img className='w-[150px] h-[150px]' src={URL.createObjectURL(image)} alt="" />}

   


      <EmojiPicker onEmojiClick={handleEmojiClicker} theme='dark' autoFocusSearch='false' open={x}/>

        
        <button onClick={handleSubmit}>Post</button>
      </div>
    </div>
  )
}

export default Home
