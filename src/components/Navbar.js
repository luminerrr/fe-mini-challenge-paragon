import pituLogo from '../assets/pituchat_logo_text.png'
import userPlaceholder from '../assets/user_placeholder.png'

export default function Navbar(){
    return(<>
    <nav className="z-50 w-full border-b-2 border-gray-200 h-16">
        <div className="container flex flex-wrap mx-auto justify-between pt-2 items-center">
            <a className='flex items-center align-middle' href='/'>
                <img src={pituLogo} className='h-10' alt=''/>
            </a>

            <div className='flex justify-center align-middle'>
                <img src={userPlaceholder} alt='' className='h-8 mt-2 pr-4'/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-3 ">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </nav>
    </>)
}