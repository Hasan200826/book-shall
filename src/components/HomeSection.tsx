import Image from 'next/image';
import React from 'react';
import Hero from '@/assite/hero_img.jpg'
const HomeSection = () => {
  return (
    <div className=' container mx-auto my-10 p-15 bg-gray-200 rounded-2xl'>
      <div className=' flex justify-between items-center'>
       <div>
         <h1 className=' text-3xl font-black max-w-[300px] font-serif'>Books to freshen up your bookshelf</h1>
         <button> view all list</button>
       </div>
       <div className=' max-w-[400px] rounded-2xl overflow-hidden'>
         <Image src={Hero} alt='Hero'  />
       </div>
    </div>
    </div>
    
  );
};

export default HomeSection;