import Image from 'next/image';
import Logo from'@/assite/book.ico'
import Link from 'next/link';
const Navber = () => {
  return (
    <div className=' container mx-auto h-[80px] sticky top-0 left-0 z-50 p-5 bg-white rounded-b-md'>
      <div className=' flex justify-between items-center ' >
        <Link href='/'>
          <div className=' flex items-center gap-3 capitalize'>
         <Image src={Logo} alt='Logo'/>book vide
       </div>
        </Link>
       <ul className=' lg:flex gap-5 capitalize font-semibold hidden'>
        <Link className=' hover:border-1 rounded-[5px] border-black ' href='/'><li className=' text-center px-5 py-2'>home</li></Link>
        <Link className=' hover:border-1 rounded-[5px] border-black ' href='/book-list'><li className=' text-center px-5 py-2'>losted book</li></Link>
        <Link className=' hover:border-1 rounded-[5px] border-black ' href='/'><li className=' text-center px-5 py-2'>pages to read</li></Link>
       </ul>
       <div className=' flex gap-1 lg:gap-5'>
         <button className=' px-5 py-2 bg-green-400 hover:bg-green-500 text-white rounded-[5px]'>sing in</button>
         <button className=' px-5 py-2 bg-blue-300 hover:bg-blue-400 text-white rounded-[5px]'>sing up</button>
       </div>
    </div>
    </div> 
    
  );
};

export default Navber;