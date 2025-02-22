import React from "react";

function Coversation() {
  return (
    <div className='flex h-[60px] border-b-1 border-b-gray-300 items-center py-2 cursor-pointer hover:bg-gray-200'>
      <div className='w-[55px] h-[55px] rounded-full p-1'>
        <img
          src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D'
          alt='profile image'
          className='w-full h-full rounded-full '
        />
      </div>

      <div className='grow ml-3'>
        <div className='text-lg font-bold'>Rahul</div>
        <div className='text-sm text-gray-500'>xxxxxxx989</div>
      </div>
    </div>
  );
}

export default Coversation;
