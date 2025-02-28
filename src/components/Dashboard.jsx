import React, { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import Conversation from './Coversation';
import Chats from './Chats';


function Dashboard() {

    const [selectedUserDetails, setSelectedUserDetail] = useState(null);

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200'>
        <div className='w-[90%] h-[90%] bg-white rounded-xl flex shadow-2xl '>
            <div className='w-[30%] h-full bg-gray-100 rounded-l-xl border border-r-gray-300 '>
                <div className='p-4 flex flex-col h-[95%] text-black'>
                    <div className='w-full flex justify-between items-center box-border text-xl'>
                        <div><img src="/src/assets/Logo.webp" alt="logo" className='w-[50%]'/></div>
                        <LogoutIcon className='cursor-pointer text-gray-500'/>
                    </div>

                    <div className='w-full box-border my-4 flex justify-between items-center relative'>
                        <input type="text" placeholder='Search' className='w-[85%] h-[35px] px-3 py-1 box-border rounded-3xl border border-gray-300 bg-white focus:outline-0'/>
                        <button type="submit" className='flex justify-center items-center p-3 border w-[35px] h-[35px] cursor-pointer rounded-full bg-black text-white'><SearchIcon /></button> 
                    </div>

                    <div className='w-full grow overflow-y-auto overflow-x-hidden'>

                        <Conversation/>

                        

                    </div>

                </div>

            </div>
            {
                selectedUserDetails ? <Chats/> : <div className='w-[70%] flex flex-col items-center justify-center'>
                    <div className='w-[70%]'>                        
                        <img src="/src/assets/noChatUI.png" alt="No Chat UI Image" />
                    </div>
                </div>
            }
           
        </div>
    </div>

  )
}

export default Dashboard