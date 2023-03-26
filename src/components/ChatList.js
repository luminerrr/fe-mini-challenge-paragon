import { useState } from 'react'
import userChatPlaceholder from '../assets/chat_user_placeholder.png'
import Chat from './Chat'
import TokopediaSmall from './TokopediaSmall'
import NoChat from './NoChat'

export default function ChatList() {
    const [dropdownToggle, setDropdownToggle] = useState(true)
    const [searchToggle, setSearchToggle] = useState(false)
    const [chatActive, setChatActive] = useState(false)

    return(
        <>
        <div className="fixed left-52 w-full flex flex-row flex-auto h-full">
            <div className="flex flex-col w-[35rem] border-r-2">
                <div className="h-32 p-4">
                    <div className="flex h-full justify-between">
                        <h2 className="font-bold text-2xl">Chat</h2>
                        <div className="space-x-6">
                            <div className='inline'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className={`hover:cursor-pointer w-6 h-6 inline ${searchToggle ? "absolute translate-x-1/4" : ""} `} onClick={()=>{setSearchToggle(!searchToggle)}} >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                {searchToggle ? 
                                <input type='text' className='bg-slate-200 h-7 pl-8 rounded-lg' />:
                                <></>}
                                
                            </div>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 inline hover:cursor-pointer" onClick={()=>{setDropdownToggle(!dropdownToggle)}}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                            <div className={`${dropdownToggle ? "hidden":""} flex flex-col bg-white border w-64 absolute left-[17.5rem] rounded-lg z-50 shadow-md items-center`}>
                                <ul className='p-1 space-y-2'>
                                    <li className='flex space-x-4 border-b-2 w-64 justify-center pb-1'>
                                        <input type='checkbox' />
                                        <p>Shopee - Beauty Lovers</p>
                                    </li>
                                    <li className='flex space-x-4 border-b-2 w-64 justify-center pb-1'>
                                        <input type='checkbox' />
                                        <p>Shopee - Beauty Lovers</p>
                                    </li>
                                    <li className='flex space-x-4 border-b-2 w-64 justify-center pb-1'>
                                        <input type='checkbox' />
                                        <p>Shopee - Beauty Lovers</p>
                                    </li>
                                    <li className='flex space-x-4 border-b-2 w-64 justify-center pb-1'>
                                        <input type='checkbox' />
                                        <p>Shopee - Beauty Lovers</p>
                                    </li>
                                    <li className='flex space-x-4 w-64 justify-start pb-1 pl-4 mt-1'>
                                        <p className='text-blue-500'>Pilih semua</p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly pb-2">
                    <p className="font-bold underline underline-offset-[1rem] z-40 decoration-blue-500 decoration-2">Perlu balas</p>
                    <p className="font-semibold hover:underline hover:underline-offset-[1rem] decoration-blue-500 decoration-2 z-40">Terbalas</p>
                    <p className="font-semibold hover:underline hover:underline-offset-[1rem] decoration-blue-500 decoration-2 z-40">Semua chat</p>
                </div>
                <div className="flex flex-row w-full border-b-2">
                    <div className="border-b-2 border-blue-400">

                    </div>
                </div>

                <div className="w-full block align-middle">
                    <div className={`flex w-full justify-evenly border-b-2 hover:bg-gray-100 ${chatActive ? "bg-slate-100":""}`} onClick={()=>setChatActive(true)}>
                        <div className="flex-row p-4 grid grid-cols-3 items-center px-5">
                            <img src={userChatPlaceholder} alt=''/>
                            <div className='space-y-2'>
                                <p className='font-bold'>User Placeholder</p>
                                <p className='flex-grow truncate text-sm'>lorem ipsum dolor sit amet asdasdasasdasdasdasdas</p>
                                <TokopediaSmall />
                            </div>
                            <div className='flex-col flex justify-self-end space-y-2'>
                                <p className='text-xs'>Today</p>
                                <div className='bg-blue-600 w-7 h-7 text-center rounded-full'>
                                    <p className='text-white'>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-evenly border-b-2 hover:bg-gray-100' onClick={()=>setChatActive(true)}>
                        <div className="flex-row p-4 grid grid-cols-3 items-center px-5">
                            <img src={userChatPlaceholder} alt=''/>
                            <div className='space-y-2'>
                                <p className='font-bold'>User Placeholder</p>
                                <p className='flex-grow truncate text-sm'>lorem ipsum dolor sit amet asdasdasasdasdasdasdas</p>
                                <TokopediaSmall />
                            </div>
                            <div className='flex-col flex justify-self-end space-y-2'>
                                <p className='text-xs'>Today</p>
                                <div className='bg-blue-600 w-7 h-7 text-center rounded-full'>
                                    <p className='text-white'>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-evenly border-b-2 hover:bg-gray-100' onClick={()=>setChatActive(true)}>
                        <div className="flex-row p-4 grid grid-cols-3 items-center px-5">
                            <img src={userChatPlaceholder} alt=''/>
                            <div className='space-y-2'>
                                <p className='font-bold'>User Placeholder</p>
                                <p className='flex-grow truncate text-sm'>lorem ipsum dolor sit amet asdasdasasdasdasdasdas</p>
                                <TokopediaSmall />
                            </div>
                            <div className='flex-col flex justify-self-end space-y-2'>
                                <p className='text-xs'>Today</p>
                                <div className='bg-blue-600 w-7 h-7 text-center rounded-full'>
                                    <p className='text-white'>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Chat chatActive={chatActive} />
    
        </>
    )
}