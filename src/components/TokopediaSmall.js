import tokopediaSmallIcon from '../assets/tokopedia_small.png'


export default function TokopediaSmall(){

    return(<>
        <div className='bg_tokopedia_small w-28 h-6 p-1 justify-center flex rounded-md space-x-2'>
            <img src={tokopediaSmallIcon} alt='tokopedia'/>
            <p className='text-xs'>Beauty Center</p>
        </div>
        </>)
 }