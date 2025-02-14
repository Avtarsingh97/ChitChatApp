import React from 'react'

function ProfileSelector({handleProfileModalClose}) {

    const handleCloseBtn = () => {
        handleProfileModalClose()
    }
    

  return (
    <div className='fixed w-full h-full bg-cyan-300/50 flex justify-center items-center'>
        <div className='bg-white p-5 w-[90%] h-[90%] md:h-[75%] md:w-[60%] rounded-xl'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-bold text-center text-black'>Select Your Profile</h1>
                <div className='flex justify-center items-center text-black cursor-pointer hover:text-neutral-500' onClick={handleCloseBtn}>Close X</div>
            </div>

            <div className='flex justify-between'>
                <div className='grid grid-cols-3 gap-3 grid-rows-3'>

                    <div className='w-full p-1 rounded-full border flex justify-center items-center h-full cursor-pointer hover:bg-black'>
                        <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaxkxnMrakMtywgSFKKcPo1pmpNJQe2KtvaZUca9Fb0JkkPbRx1P2A-FEXQWLYV9lyT8&usqp=CAU" alt="avatar image" />
                    </div>
                    <div className='w-full p-1 rounded-full border flex justify-center items-center h-full cursor-pointer hover:bg-black'>
                        <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaxkxnMrakMtywgSFKKcPo1pmpNJQe2KtvaZUca9Fb0JkkPbRx1P2A-FEXQWLYV9lyT8&usqp=CAU" alt="avatar image" />
                    </div>
                    <div className='w-full p-1 rounded-full border flex justify-center items-center h-full cursor-pointer hover:bg-black'>
                        <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaxkxnMrakMtywgSFKKcPo1pmpNJQe2KtvaZUca9Fb0JkkPbRx1P2A-FEXQWLYV9lyT8&usqp=CAU" alt="avatar image" />
                    </div>
                    <div className='w-full p-1 rounded-full border flex justify-center items-center h-full cursor-pointer hover:bg-black'>
                        <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaxkxnMrakMtywgSFKKcPo1pmpNJQe2KtvaZUca9Fb0JkkPbRx1P2A-FEXQWLYV9lyT8&usqp=CAU" alt="avatar image" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileSelector