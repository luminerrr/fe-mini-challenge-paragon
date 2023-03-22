import loginImg from '../assets/login_img.png'
import loginIcon from '../assets/login_logo.png'
import emailIcon from '../assets/mail_icon.png'
import passwordIcon from '../assets/password_icon.png'

export default function LoginPage(){
    return(
    <div className='container flex'>        
        <img src={loginImg} className='logo_img object-fill'/>

        <div className='block m-auto items-center justify-center'>
            <img src={loginIcon} className='w-[72px] h-[72px] mb-8'/>
            <h2 className='font-bold text-3xl mb-4'>Login ke akunmu</h2>
            <p className='text-gray-500'>Masuk akun untuk menggunakan PituChat</p>
            <form className='pt-14 flex-initial'>
                <label className='block'>Email </label>
                <img src={emailIcon} className='w-4 h-4 translate-y-1/2 translate-x-1/2 absolute' />
                <input type='text' className='border-gray-300 border rounded-lg  w-96 h-8 mb-4 pl-8'/>
                <label className='block'>Password </label>
                <img src={passwordIcon} className='w-4 h-4 translate-y-1/2 translate-x-1/2 absolute' />
                <input type='password' className='border-gray-300 border rounded-lg w-96 h-8 pl-8'/>
                <button className='block text-sm text-gray-400 forgot_pass_btn'>Lupa password?</button>

                <button className='bg_login_btn text-white w-96 rounded-lg h-10 mt-8'>Masuk</button>
            </form>
        </div>
        
    </div>
    )
}