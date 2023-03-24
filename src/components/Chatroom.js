import userChatPlaceholder from '../assets/chat_user_placeholder.png'
import tokopediaSmallIcon from '../assets/tokopedia_small.png'

export default function Chatroom() {

    return(
        <>
        <div className="fixed left-52 w-screen flex flex-row flex-auto h-full">
            <div className="flex flex-col w-2/6 border-r-2">
                <div className="h-32 p-4">
                    <div className="flex h-full justify-between">
                        <h2 className="font-bold text-2xl">Chat</h2>
                        <div className="space-x-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly pb-3">
                    <p className="font-semibold">Perlu balas</p>
                    <p className="font-semibold">Terbalas</p>
                    <p className="font-semibold">Semua chat</p>
                </div>
                <div className="flex flex-row w-full border-b-2">
                    <div className="border-b-2 border-blue-400">

                    </div>
                </div>

                <div className="w-full block align-middle">
                    <div className='flex w-full justify-evenly border-b-2'>
                        <div className="flex-row p-4 grid grid-cols-3 items-center px-5">
                            <img src={userChatPlaceholder} alt=''/>
                            <div className='space-y-2'>
                                <p className='font-bold'>User Placeholder</p>
                                <p className='flex-grow truncate text-sm'>lorem ipsum dolor sit amet asdasdasasdasdasdasdas</p>
                                <div className='bg_tokopedia_small w-28 h-6 p-1 justify-center flex rounded-md space-x-2'>
                                    <img src={tokopediaSmallIcon} alt='tokopedia'/>
                                    <p className='text-xs'>Beauty Center</p>
                                </div>
                            </div>
                            <div className='flex-row flex justify-end'>
                                <p className='block'>Today</p>
                                <p className='block'>3</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}