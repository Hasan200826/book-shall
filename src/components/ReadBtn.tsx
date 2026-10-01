"use client"

import { DataProvider } from '@/contextApi/bookData';
import { BookType } from '@/type/BookType';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';
interface ReadBtnprops{
  findBook:BookType
}

const ReadBtn = ({findBook}:ReadBtnprops) => {
  const { readBook,setReadBook,}= useContext(DataProvider)
  const alreadyRead = readBook.some(
  (item:BookType) => item.bookId === findBook.bookId
);
  function handlReadBtn (){
    if(alreadyRead){
      toast.warn(`${findBook.bookName} is alrady add in readbook list`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }else{
      setReadBook([...readBook,findBook])
      toast(`${findBook.bookName} is add in readbook list`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    
  }
  console.log( readBook);
  
  return (
    <div>
      <button
      onClick={handlReadBtn}
       className="border border-gray-300 px-5 py-2 rounded text-sm hover:bg-gray-100">
              Read
      </button>
    </div>
  );
};

export default ReadBtn;