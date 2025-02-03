import React, { useState } from 'react'
import Navbar from './Comopents/Navbar'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked"; 


const App = () => {
  const [promt , setpromt] = useState('');
  const [res , setres] = useState('');
 const [ loading , setloadng] = useState(false)

  const gentaredscript = async ()=>{
    let inputPromt = document.getElementById('prop')
    if(promt === ''){
      alert('you must describe your video topic....')
      inputPromt.focus()
    }else{
      setloadng(true)
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GIMINI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
     const reslut = await model.generateContent(`Give a complete video script for the which is ${promt}`);
     setres(reslut.response.text());
     setloadng(false);
    }
  }

  if(loading){
    return(
      <div className='px-[100px] mx-[20px] mt-20 text-4xl'>Loading....</div>
    )
  }
  return (
  <>
  
  <Navbar/>
  <div className='mt-10 '>
    <h1 className='text-sm text-center sm:text-5xl font-semibold'>A Free <span className='text-purple-800'>AI</span> For Generating The <br />Video Script </h1>

    <div className='flex justify-center  '>
      <textarea onChange={(e)=>setpromt(e.target.value)} value={promt} id='prop' placeholder='Describe the topic' className='w-[50vw] p-1 h-10 sm:w-[50vw] sm:h-28 mt-5 bg-gray-100 outline-none sm:p-3 rounded'/>
    </div>
    <button onClick={gentaredscript} className='w-20 sm:w-32 ml-36 text-sm bg-purple-500 h-10 text-white sm:text-1xl mt-8 sm:ml-[600px] rounded-lg hover:bg-purple-700' >Genrate</button>
  </div>

  {res && (
 <div className="mt-10 p-6 bg-gray-200 rounded-lg shadow-lg text-left w-[80vw] mx-auto">
 <h2 className="text-2xl font-bold text-purple-800">Generated Video Script</h2>
 <div dangerouslySetInnerHTML={{ __html: marked(res) }} />
</div>
)}
  </>
  )
}

export default App











