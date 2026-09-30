import Image from 'next/image';
import Logo from'@/assite/book.ico'
import Link from 'next/link';
const Navber = () => {
  return (
    <div className=' container mx-auto h-[80px]  shadow-2xl shadow-black sticky top-0 left-0 z-50 p-5'>
      <div className=' flex justify-between items-center ' >
       <div className=' flex items-center gap-3 capitalize'>
         <Image src={Logo} alt='Logo'/>book vide
       </div>
       <ul className=' flex gap-5 capitalize font-semibold'>
        <Link className=' hover:border-1 rounded-[5px] border-black ' href='/'><li className=' text-center px-5 pt-3'>home</li></Link>
        <Link className=' hover:border-1 rounded-[5px] border-black ' href='/'><li className=' text-center px-5 pt-3'>losted book</li></Link>
        <Link className=' hover:border-1 rounded-[5px] border-black ' href='/'><li className=' text-center px-5 py-3'>pages to read</li></Link>
       </ul>
       <div className=' flex gap-5'>
         <button className=' px-5 py-2 bg-green-400 rounded-[5px]'>sing in</button>
         <button className=' px-5 py-2 bg-blue-300 rounded-[5px]'>sing up</button>
       </div>
    </div>
    </div>
    
  );
};

export default Navber;