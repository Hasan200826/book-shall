import Image from 'next/image';
import React from 'react';
import { CiStar } from 'react-icons/ci';


const BookCard =async ({book}) => {
  
  return (
    <div className=' p-3 border-1 border-black rounded-[5px]'>
       <div className=' h-[1/2] bg-gray-200 p-2 rounded-[5px]'>
          <Image src={book.image} width={100} height={100} alt='Imge' className=' mx-auto'/>
       </div>
       <div>
         <div className=' flex gap-3 my-3'>
          {
            book.tags.map((tag)=> <p key={tag} className=' px-5 rounded-2xl bg-green-100 capitalize text-green-400'>{tag}</p>)
          }
           
         </div>
         <div className=' border-b-1 border-dashed'>
          <h2 className=' text-2xl capitalize font-serif my-3'>{book.bookName}</h2>
          <p className=' capitalize my-2'>by : {book.author}</p>
         </div>
         <div className=' flex justify-between p-2'>
           <p className=' capitalize'>ficion</p>
           <p className=' flex gap-2 items-center'><CiStar />{book.rating}</p>
         </div>
       </div>
    </div>
  );
};

export default BookCard;