import React from 'react';
import InstagramImg from './InstagramImg';
import IgImg1 from '../public/Catawba-Falls-Color.jpg';
import IgImg2 from '../public/HawksBill_Valley.jpg';
import IgImg3 from '../public/Loren_blanket.jpg';
import IgImg4 from '../public/Loren_Look_Out.jpg';
import IgImg5 from '../public/Loren_MG.jpg';
import IgImg6 from '../public/Loren_Water_Fall.jpg';
import IgImg7 from '../public/Pine_Tree.jpg';
import IgImg8 from '../public/Rough_Ridge_Sunset.jpg';
import IgImg9 from '../public/SunFlower.jpg';
import IgImg10 from '../public/Trail.jpg';
import IgImg11 from '../public/WaterFall.jpg';

const Instagram = () => {
  return (
    <div className='max-w-[1240] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on instagram</p>
        <p className='pb-4'>DSAW</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socailImg={IgImg1}/>
            <InstagramImg socailImg={IgImg2}/>
            <InstagramImg socailImg={IgImg3}/>
            <InstagramImg socailImg={IgImg4}/>
            <InstagramImg socailImg={IgImg5}/>
            <InstagramImg socailImg={IgImg6}/>
            <InstagramImg socailImg={IgImg7}/>
            <InstagramImg socailImg={IgImg8}/>
            <InstagramImg socailImg={IgImg9}/>
            <InstagramImg socailImg={IgImg10}/>
            <InstagramImg socailImg={IgImg11}/>

        </div>
    </div>
  )
}

export default Instagram;