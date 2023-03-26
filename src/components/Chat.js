import NoChat from "./NoChat";
import userPlaceholder from '../assets/chat_user_placeholder.png'
import UserInfo from "./UserInfo";
import { useState } from "react";
import userImg from '../assets/user_profile_placeholder.png'
import TokopediaSmall from "./TokopediaSmall";

export default function Chat({chatActive}){
  const [open, setOpen] = useState(false)
  

  return(<>
  <div className="fixed flex flex-row h-full left-[48rem]">
    {chatActive ? <></> : <NoChat />}
    <div className={`flex flex-col ${open ? "w-[49rem]" : "w-[69rem]"} h-full ${chatActive ? "" : "invinsible"}`}>
      <div className="flex flex-row bg-gray-100 h-20 items-center p-4 w-full justify-between border-b-2">
        <div className="flex flex-col">
          <p className="font-semibold">User Placeholder</p>
        </div>
        <div className="flex flex-row space-x-4 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 inline">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer" onClick={()=>setOpen(!open)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </div>
      </div>

      <div className="flex-auto overflow-y-auto p-5 space-y-4 bg-blue-100">

        <div className="flex flex-row space-x-2 items-center">
          <img src={userPlaceholder} alt="" className='h-9 w-9'/>
          <div className='flex flex-col space-y-2'>
            <p className="text-gray-600 text-xs">Name placeholder</p>
            <p className='bg-white rounded-full rounded-bl-none p-3'>Lorem ipsum dolor</p>
            <p className="text-gray-600 text-xs">Just now</p>
          </div>
        </div>

        <div className="flex space-x-2 flex-row-reverse space-x-reverse">
          <div className="flex flex-col">
            <p className="bg-blue-500 rounded-full rounded-br-none p-3 text-white">Some text lorem ipsum</p>
            <div className="flex flex-row justify-end text-gray-600 text-xs">
              <p>Sent ·</p>
              <p>Just now</p>
            </div>
          </div>
        </div>
      </div>

        <div className="flex flex-row h-28 p-4 pt-2 space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
          </svg>
          <input type="text" className="rounded-full border-2 w-full h-8 p-3" placeholder="Type a message here" />
        </div>
    </div>

    <div className={`flex flex-col p-4 w-[20rem]`}>
      <div className="flex flex-row justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer" onClick={()=>setOpen(false)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <img src={userImg} alt='' className='w-32 h-32 mt-6 rounded-full'/>
        <div className='flex flex-col text-center space-y-3 mt-4'>
          <p className='text-lg font-semibold'>Christina Lee</p>
          <p className='text-gray-700 text-sm pb-4'>Tokopedia</p>
          <TokopediaSmall />
        </div>
      </div>
      <div className='pt-10 space-y-3'>
          <p className='font-semibold'>About Conversation</p>
          <div className='space-x-2'>
              <p className='inline'>Created </p>
              <p className='inline text-gray-800'>20 October 2022</p>
          </div>
          <div className='space-x-2'>
              <p className='inline'>Created </p>
              <p className='inline text-gray-800'>20 October 2022</p>
          </div>
      </div>
    </div>
  </div>

  </>)
}