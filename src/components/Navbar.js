import pituLogo from '../assets/pituchat_logo_text.png'
import userPlaceholder from '../assets/user_placeholder.png'

export default function Navbar(){
    return(<>
    <nav className=" px-2 border-b-2 border-gray-200 h-16">
        <div className="container flex flex-wrap mx-auto justify-between py-2">
            <a className='flex items-center align-middle' href='/'>
                <img src={pituLogo} className='h-10' alt=''/>
            </a>

            <div className='flex justify-center align-middle'>
                <img src={userPlaceholder} alt='' className='h-8 mt-2'/>
                <img src={userPlaceholder} alt='' className='h-8 mt-2'/>
            </div>
        </div>
    </nav>
    </>)
}