import chatPlaceholder from '../assets/no_chat_img.png'

export default function Chat(){

  return(<>
  <div className="fixed left-[48rem] w-screen h-full bg-red-400">
    <div className='flex w-full justify-center'>
      <img src={chatPlaceholder} alt='' className='flex'/>
    </div>
  </div>
  </>)
}