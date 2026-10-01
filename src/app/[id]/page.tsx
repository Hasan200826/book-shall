
import Image from 'next/image';
import React from 'react';

async function BookInf (){
  const res =await fetch('http://localhost:3000//booksData.json')
  return res.json()
}

const page =async ({params}) => {
  const{ id } = await params;
  const books = await BookInf()
  console.log(books);
  
  const findBook = books.find((book)=> Number(book.bookId) === Number(id))
  return (
      <div className="w-full max-w-[900px] mx-auto border border-blue-500 rounded-sm overflow-hidden bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Book Image */}
        <div className="bg-gray-100 flex items-center justify-center p-5">
          <div className="relative w-[220px] h-[280px]">
            <Image
              src={findBook.image}
              alt="The Catcher in the Rye"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Book Information */}
        <div className="p-5">

          <h1 className="text-2xl font-bold text-gray-900">
            {findBook.bookName}
          </h1>

          <p className="text-sm text-gray-600 mt-1">
            By : {findBook.author}
          </p>

          <div className="border-t border-gray-200 my-4"></div>

          <p className="text-sm text-gray-700">
            Fiction
          </p>

          <div className="border-t border-gray-200 my-3"></div>

          <p className="text-sm text-gray-700 leading-6">
            <span className="font-bold">Review:</span>{findBook.review}
          </p>

          <div className="border-t border-gray-200 my-3"></div>

          {/* Tags */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">Tag</span>
             {
              findBook.tags.map((tag)=><span key={tag} className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
              #{tag}
            </span>)
             }
            
          </div>

          <div className="border-t border-gray-200 my-3"></div>

          {/* Book Details */}
          <div className="space-y-2 text-sm">

            <div className="flex">
              <span className="w-36 text-gray-600">
                Number of Pages:
              </span>
              <span className="font-semibold">
                {findBook.totalPages}
              </span>
            </div>

            <div className="flex">
              <span className="w-36 text-gray-600">
                Publisher:
              </span>
              <span className="font-semibold">
                {findBook.author}
              </span>
            </div>

            <div className="flex">
              <span className="w-36 text-gray-600">
                Year of Publishing:
              </span>
              <span className="font-semibold">
                {findBook.yearOfPublishing}
              </span>
            </div>

            <div className="flex">
              <span className="w-36 text-gray-600">
                Rating:
              </span>
              <span className="font-semibold">
                {findBook.rating}
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">

            <button className="border border-gray-300 px-5 py-2 rounded text-sm hover:bg-gray-100">
              Read
            </button>

            <button className="bg-cyan-500 text-white px-5 py-2 rounded text-sm hover:bg-cyan-600">
              Wishlist
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default page;