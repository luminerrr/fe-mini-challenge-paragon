import chatPlaceholder from '../assets/no_chat_img.png'

export default function NoChat(){

    return(<>
    <div className='flex flex-col w-[69rem] justify-center items-center space-y-3 bg-gray-100'>
        <img src={chatPlaceholder} alt='' className='w-64 h-64'/>
        <p className='pt-2 font-semibold'>Tidak ada pesan terpilih</p>
        <p className='font-bold'>Pilih pesan untuk dibaca</p>
    </div>
    </>)

}