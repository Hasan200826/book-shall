import React from 'react';

const page = () => {
  return (
    <div className=' container mx-auto'>
      <div className=' w-full flex justify-center items-center capitalize h-[200px] rounded-[10px] bg-gray-100 text-2xl font-semibold'>
         <h2>book</h2>
      </div>
      <div>
         <div className=' w-full flex justify-center my-10'>
           <select name="" id="" className=' px-5 py-2 bg-green-600 outline-0 rounded-[5px] capitalize'>
             <option value="">sort by</option>
             <option value="">pages</option>
             <option value="">rating</option>
           </select>
         </div>
         <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
              <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" defaultChecked />
              <div className="tab-content bg-base-100 border-base-300 p-6">Read Books</div>
            
              <input type="radio" name="my_tabs_3" className="tab" aria-label="WishList Book" />
              <div className="tab-content bg-base-100 border-base-300 p-6">WishList Book</div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default page;