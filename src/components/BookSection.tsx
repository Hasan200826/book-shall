"use client"


import React, { useContext } from 'react';
import ReadBookCard from './ReadBookCard';
import { DataProvider } from '@/contextApi/bookData';
import BookCard from './BookCard';
import { BookType } from '@/type/BookType';

const BookSection =() => {
  const {readBook,WishList,}= useContext(DataProvider)
  return (
    <div>
      {/* name of each tab group should be unique */}
       <div className="tabs tabs-lift">
         <input type="radio" name="my_tabs_3" className="tab" aria-label="ReadBook" defaultChecked />
         <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBook.map((book:BookType)=><ReadBookCard key={book.bookId} book={book}/>)}
         </div>
       
         <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Book" />
         <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            WishList.map((book:BookType)=><ReadBookCard key={book.bookId} book={book} />)
          }
          </div>
       </div>
    </div>
  
  );
};

export default BookSection;