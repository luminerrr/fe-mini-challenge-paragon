import tokopediaLogo from '../assets/tokopedia_logo_large.png'
import shopeeLogo from '../assets/shopee_logo_large.png'
import TokopediaSmall from './TokopediaSmall'
import ShopeeSmall from './ShopeeSmall'


export default function StoreList(){

    return(<>
        <div className="fixed left-52 w-full flex flex-row flex-auto h-full bg-gray-100">
            <div className="flex flex-col p-4">
                <p className="font-semibold">Shop</p>
                <div className="flex flex-row pt-5 space-x-8">
                    <div className="bg-white w-60 items-center p-4 rounded-lg flex flex-col space-y-6">
                        <img src={tokopediaLogo} alt='tokopedia' className='w-32 mx-auto'/>
                        <TokopediaSmall  />
                        <div className='bg_store_btn p-4 rounded-xl space-x-2 flex flex-row items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className='text-white'>Tersambung</p>
                        </div>
                    </div>

                    <div className="bg-white w-60 items-center p-4 rounded-lg flex flex-col space-y-6">
                        <img src={shopeeLogo} alt='tokopedia' className='w-32 mx-auto'/>
                        <ShopeeSmall  />
                        <div className='bg_store_btn p-4 rounded-xl space-x-2 flex flex-row items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className='text-white'>Tersambung</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </>)
}