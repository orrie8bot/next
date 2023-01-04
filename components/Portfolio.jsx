import React from 'react';
import Image from 'next/image';
import image1 from '../public/assets/Abandon_House.jpg';
import image2 from '../public/assets/Beach_Walk.jpg';
import image3 from '../public/assets/Theater.jpg';
import image4 from '../public/assets/LightHouse.jpg';
import image5 from '../public/assets/Peeking.jpg';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center bg-black/90'>
        <h1 className='font-bold text-2xl p-4 text-white'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image
                    src={image1}
                    alt='Double Light Houses'
                    layer='responsive'
                    width='577'
                    height='351' 
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                    src={image2}
                    alt='Walking along the beach'
                    layer='responsive'
                    width='275'
                    height='257'   
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                    src={image3}
                    alt='Bridge'
                    layer='responsive'
                    width='275'
                    height='257'   
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                    src={image4}
                    alt='Light House'
                    layer='responsive'
                    width='275'
                    height='257'  
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                    src={image5}
                    alt='Old Movie Theater'
                    layer='responsive'
                    width='275'
                    height='257'  
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio;