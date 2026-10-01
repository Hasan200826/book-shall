import ReadBtn from "@/components/ReadBtn";
import WishListBtn from "@/components/WishListBtn";
import Image from "next/image";
import React from "react";

async function BookInf() {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  return res.json();
}

const page = async ({ params }) => {
  const { id } = await params;

  const books = await BookInf();

  const findBook = books.find(
    (book) => Number(book.bookId) === Number(id)
  );

  // যদি book না পাওয়া যায়
  if (!findBook) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Book Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[900px] mx-auto border border-blue-500 rounded-sm overflow-hidden bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Book Image */}
        <div className="bg-gray-100 flex items-center justify-center p-5">
          <div className="relative w-[220px] h-[280px]">

            <Image
              src={findBook.image}
              alt={findBook.bookName}
              fill
              className="object-contain"
            />

          </div>
        </div>

        {/* Book Information */}
        <div className="p-5">

          {/* Book Name */}
          <h1 className="text-2xl font-bold text-gray-900">
            {findBook.bookName}
          </h1>

          {/* Author */}
          <p className="text-sm text-gray-600 mt-1">
            By : {findBook.author}
          </p>

          <div className="border-t border-gray-200 my-4"></div>

          {/* Category */}
          <p className="text-sm text-gray-700">
            {findBook.category}
          </p>

          <div className="border-t border-gray-200 my-3"></div>

          {/* Review */}
          <p className="text-sm text-gray-700 leading-6">
            <span className="font-bold">Review: </span>
            {findBook.review}
          </p>

          <div className="border-t border-gray-200 my-3"></div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">

            <span className="font-semibold text-sm">
              Tag
            </span>

            {findBook.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}

          </div>

          <div className="border-t border-gray-200 my-3"></div>

          {/* Book Details */}
          <div className="space-y-2 text-sm">

            {/* Number of Pages */}
            <div className="flex">
              <span className="w-36 text-gray-600">
                Number of Pages:
              </span>

              <span className="font-semibold">
                {findBook.totalPages}
              </span>
            </div>

            {/* Publisher */}
            <div className="flex">
              <span className="w-36 text-gray-600">
                Publisher:
              </span>

              <span className="font-semibold">
                {findBook.publisher}
              </span>
            </div>

            {/* Year */}
            <div className="flex">
              <span className="w-36 text-gray-600">
                Year of Publishing:
              </span>

              <span className="font-semibold">
                {findBook.yearOfPublishing}
              </span>
            </div>

            {/* Rating */}
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

            <ReadBtn findBook={findBook} />

            <WishListBtn findBook={findBook}/>

          </div>

        </div>
      </div>
    </div>
  );
};

export default page;