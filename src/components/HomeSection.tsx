import Image from 'next/image';
import React from 'react';
import Hero from '@/assite/hero_img.jpg'
const HomeSection = () => {
  return (
    <div className=' container mx-auto my-5 lg:my-10 p-15 bg-gray-200 rounded-2xl'>
      <div className=' flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
       <div className=' text-center lg:text-left'>
         <h1 className=' text-3xl font-black max-w-[350px] font-serif mb-5'>Books to freshen up your bookshelf</h1>
         <button className=' text-white bg-green-400 hover:bg-green-500 px-10 py-2 capitalize rounded-md'> view all list</button>
       </div>
       <div className=' max-w-[400px] rounded-2xl overflow-hidden mb-5 lg:mb-0'>
         <Image src={Hero} alt='Hero'  />
       </div>
    </div>
    </div>
    
  );
};

export default HomeSection;