import Image from "next/image";
import { FiStar } from "react-icons/fi";

const BookCard = ({ book }) => {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      
      {/* Image */}
      <div className="flex h-36 items-center justify-center rounded-xl bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={100}
          height={120}
          className="h-28 w-auto object-contain"
        />
      </div>

      {/* Tags */}
      <div className="my-3 flex gap-2">
        {book.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book name */}
      <h2 className="text-base font-bold text-gray-800">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="mt-2 text-xs text-gray-600">
        By : {book.author}
      </p>

      {/* Divider */}
      <div className="my-3 border-t border-dashed border-gray-200" />

      {/* Bottom section */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-700">
          {book.category}
        </span>

        
      </div>
    </div>
  );
};

export default BookCard;