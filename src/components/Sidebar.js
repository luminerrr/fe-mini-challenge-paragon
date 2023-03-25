import chatIcon from '../assets/chat_icon.png'

export default function Sidebar(){

    return(<>
        <aside className="fixed top-0 left-0 z-40 w-52 h-screen pt-16">
            <div className="h-full overflow-y-auto  border-r-2">
                <ul className="space-y-6">
                    <li className='py-8 hover:bg-blue-500 hover:text-white'>
                        <a className="flex flex-col items-center justify-center" href=' '>
                            <img src={chatIcon} className='' alt=''/>
                            <p>Chat</p>
                        </a>
                    </li>
                    <li>
                        <a className="flex flex-col items-center justify-center" href=' '>
                            <img src={chatIcon} className='' alt=''/>
                            <p className=''>Chat</p>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        </>)
}