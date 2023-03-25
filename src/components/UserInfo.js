import userImg from '../assets/user_profile_placeholder.png'
import TokopediaSmall from './TokopediaSmall'

export default function UserInfo(){

    return(<>
        <div className="flex flex-col p-4 w-[20rem]">
            <div className="flex flex-row justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
    </>)
}