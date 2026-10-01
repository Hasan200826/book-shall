"use client"

import { DataProvider } from '@/contextApi/bookData';
import { BookType } from '@/type/BookType';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

function WishListBtn({findBook}) {
  const {WishList,setWishList,} = useContext(DataProvider)
  const alreadyWish = WishList.some(
    (item:BookType) => item.bookId === findBook.bookId
  );
  function heandlWishListBtn () {
     if(alreadyWish){
      toast.warn(`${findBook.bookName} is alrady add in WistList`, {
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
      setWishList([...WishList,findBook])
      toast(`${findBook.bookName} is add in Wislist`, {
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
  return (
    <div>
      <button 
      onClick={heandlWishListBtn}
      className="bg-cyan-500 text-white px-5 py-2 rounded text-sm hover:bg-cyan-600">
              Wishlist
            </button>
    </div>
  );
}

export default WishListBtn;