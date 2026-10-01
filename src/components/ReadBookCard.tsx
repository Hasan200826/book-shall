import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";

const ReadBookCard = ({book}) => {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-3 shadow-sm mb-3">
      <div className="flex gap-4">
        
        {/* Book Image */}
        <div className="flex h-[115px] w-[115px] shrink-0 items-center justify-center rounded-lg bg-gray-100">
          <Image
            src={book.image}
            alt="The Catcher in the Rye"
            width={80}
            height={100}
            className="h-[100px] w-auto object-contain"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-1 flex-col">
          
          {/* Title */}
          <h2 className="text-base font-bold text-gray-900">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-xs text-gray-600">
            By : {book.author}
          </p>

          {/* Tags */}
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px]">
            <span className="font-semibold text-gray-700">
              Tag
            </span>
            {
              book.tags.map((tag)=><span key={tag} className="rounded-full bg-green-100 px-2 py-1 text-green-600">
              {tag}
            </span>)
            }
            

            <span className="flex items-center gap-1 text-gray-500">
              <FaMapMarkerAlt />
              Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>

          {/* Publisher + Page */}
          <div className="mt-2 flex items-center gap-4 text-[10px] text-gray-500">
            <span className="flex items-center gap-1">
              <FaUsers />
              Publisher: Scribner
            </span>

            <span className="flex items-center gap-1">
              <FaFileAlt />
              Page {book.totalPages}
            </span>
          </div>

          <div className="my-2 border-t border-gray-100"></div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2 text-[10px]">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-600">
                Category: {book.category}
              </span>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-500">
                Rating: {book.rating}
              </span>
            </div>

            <Link
              href={`/${book.bookId}`}
              className="rounded-full bg-green-600 px-4 py-1.5 text-[10px] font-medium text-white transition hover:bg-green-700"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;