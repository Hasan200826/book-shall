import BookCard from "@/components/BookCard";
import BookSection from "@/components/BookCard";
import HomeSection from "@/components/HomeSection";
import Link from "next/link";

async function BookDatas(){
  const res =await fetch('http://localhost:3000//booksData.json')
  return res.json()
}

export default async function Home() {
  const Books = await BookDatas()
  return (
    <div className=" container mx-auto">
      <HomeSection/>
      <div>
       <div>
         <h1 className=' text-center capitalize text-3xl font-serif my-5 font-bold'>Books</h1>
       </div>
       <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 p-5">
          {
            Books.map((book)=> <Link href={`/${book.bookId}`} key={book.bookId}><BookCard  book={book}/></Link> )
          }
       </div>
    </div>
    </div>
  );
}
