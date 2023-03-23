import chatIcon from '../assets/chat_icon.png'

export default function Sidebar(){

    return(<>
        <aside className="fixed top-0 left-0 z-40 w-52 h-screen pt-16">
            <div className="h-full px-3 py-4 overflow-y-auto  border-r-2">
                <ul className="space-y-6">
                    <li>
                        <a className="flex items-center justify-center">
                            <img src={chatIcon} className=''/>
                            <p className=''>Chat</p>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center justify-center">
                            <img src={chatIcon} className=''/>
                            <p className=''>Chat</p>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        </>)
}