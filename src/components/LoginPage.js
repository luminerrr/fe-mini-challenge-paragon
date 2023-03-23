import loginImg from '../assets/login_img.png'
import loginIcon from '../assets/pituchat_logo.png'
import emailIcon from '../assets/mail_icon.png'
import passwordIcon from '../assets/password_icon.png'

export default function LoginPage(){
    return(
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block '>
            <img src={loginImg} className='w-full h-full object-contain' alt='login'/>
        </div>

        <div className='flex flex-col justify-center'>
            <div className='max-w-[400px] w-full mx-auto p-8 px-8'>
                <img src={loginIcon} className='w-[72px] h-[72px] mb-8'/>
                <h2 className='font-bold text-3xl mb-4'>Login ke akunmu</h2>
                <p className='text-gray-500'>Masuk akun untuk menggunakan PituChat</p>
                <form className='pt-10 flex-initial'>
                    <div>
                        <label className='block'>Email </label>
                        <img src={emailIcon} className='w-4 h-4 translate-y-1/2 translate-x-1/2 absolute' />
                        <input type='text' className='border-gray-300 border rounded-lg w-full h-8 mb-4 pl-8'/>
                    </div>
                    <div>
                        <label className='block'>Password </label>
                        <img src={passwordIcon} className='w-4 h-4 translate-y-1/2 translate-x-1/2 absolute' />
                        <input type='password' className='border-gray-300 border rounded-lg w-full h-8 pl-8'/>
                    </div>
                    <div className='flex justify-end'>
                        <button className='block text-sm text-gray-400 forgot_pass_btn'>Lupa password?</button>
                    </div>

                    <button className='bg_login_btn text-white w-full rounded-lg h-10 mt-8'>Masuk</button>
                </form>
            </div>
        </div>
    </div>
    )
}