import React from 'react'
import boysAvatar from './ProfileAvatar/boysAvatar.json';
import girlsAvatar from './ProfileAvatar/girlsAvatar.json';

function ProfileSelector({handleProfileModalClose, handleSetImage}) {

    const handleCloseBtn = () => {
        handleProfileModalClose()
    }
    
    const handleClickImage = (link)=>{
        handleSetImage(link);
        handleProfileModalClose();
    }

  return (
    <div className='fixed w-full h-full bg-cyan-300/50 flex justify-center items-center'>
        <div className='bg-white p-5 w-[90%] h-[90%] md:h-[75%] md:w-[60%] rounded-xl'>
            <div className="flex justify-between items-center">
                <h1 className='text-lg sm:text-2xl font-bold text-center text-black'>Select Your Profile</h1>
                <div className='flex justify-center items-center text-black cursor-pointer hover:text-neutral-500 text-[12px] sm:text-lg' onClick={handleCloseBtn}>Close X</div>
            </div>

            <div className='flex justify-between gap-2 md:gap-8 flex-col md:flex-row  mt-2 md:mt-5'>

               
                <div className='grid grid-cols-5 sm:grid-cols-6 md:grid-cols-3 gap-1 sm:gap-3 md:grid-rows-3 m-auto'>

                    {
                        boysAvatar.map((items, index)=>{
                            return (
                            <div className='w-full h-full overflow-hidden p-1 rounded-full border flex justify-center items-center cursor-pointer hover:bg-black  bg-amber-400' onClick={()=>handleClickImage(items.link)}>
                            <img className="rounded-full w-full" src={items.link} alt="avatar image" />
                        </div>
                        )
                        })
                    }



                    
                    
                </div>
                <div className='border border-r-gray-300'></div>
                
                <div className='grid grid-cols-5 sm:grid-cols-6 md:grid-cols-3 gap-1 sm:gap-3 md:grid-rows-3 mx-auto'>

                {
                        girlsAvatar.map((items, index)=>{
                            return (<div className='w-full h-full overflow-hidden p-1 rounded-full border flex justify-center items-center cursor-pointer hover:bg-black  bg-amber-400' onClick={()=>handleClickImage(items.link)}>
                            <img className="rounded-full w-full" src={items.link} alt="avatar image" />
                        </div>)
                        })
                    }


                    
                    
                </div>


            </div>
        </div>
    </div>
  )
}

export default ProfileSelector