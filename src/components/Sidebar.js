import chatIcon from '../assets/chat_icon.png'
import chatIconActive from '../assets/chat_icon_active.png'
import storeIcon from '../assets/store_logo.png'
import storeIconActive from '../assets/store_icon_active.png'
import logooutIcon from '../assets/logout_icon.png'
import { Link, } from 'react-router-dom'

export default function Sidebar({selection, setSelection}){
    

    return(<>
        <aside className="fixed top-0 left-0 z-40 w-52 h-screen pt-16">
            <div className="h-full overflow-y-auto  border-r-2">
                <ul className="space-y-1">
                    <li className={`py-8 hover:bg-gray-200 hover:cursor-pointer ${selection ? "border-l-4 border-blue-600 bg-blue-100":""}`} onClick={()=>setSelection(true)}>
                        <div className="flex flex-col items-center justify-center" href=' '>
                            <img src={selection ? chatIconActive : chatIcon} className='' alt=''/>
                            <p className='text-blue-700 font-semibold'>Chat</p>
                        </div>
                    </li>
                    <li className={`py-8 hover:bg-gray-200 hover:cursor-pointer ${selection ? "":"border-l-4 border-blue-600 bg-blue-100"}`} onClick={()=>setSelection(false)}>
                        <div className="flex flex-col items-center justify-center">
                            <img src={selection ? storeIcon : storeIconActive} className='' alt=''/>
                            <p className='text-blue-700 font-semibold'>Toko</p>
                        </div>
                    </li>
                    <li className='py-8 hover:bg-gray-200 absolute top-[51rem] w-full hover:cursor-pointer'>
                        <Link to='/'>
                            <div className="flex flex-col items-center justify-center">
                                <img src={logooutIcon} className='' alt=''/>
                                <p className='text-blue-700 font-semibold'>Keluar</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
        </>)
}