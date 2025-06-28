import React from 'react'
import SideNavBar from '../components/SideNavBar';
import OfferZone from '../components/OfferZone';

const Home=()=>{
    return(
    <><div className=" flex pl-10 pr-10">
        <div className='flex flex-col min-w-[15%] max-w-[20%] border-r border-gray-200  pt-4'>
            <SideNavBar/>
        </div>
        <div className='flex justify-center mt-10  w-full '>
            <img src='/Home-banner.png' className='w-[90%] h-[90%]'/>
        </div>

      

    </div>
    <div className='pl-14 pr-10 mt-10'>
        <OfferZone/>
    </div>
    </>)
}
export default Home;