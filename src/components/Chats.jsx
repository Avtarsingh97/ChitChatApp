import React,{useState} from "react";
import SendIcon from '@mui/icons-material/Send';

function Chats() {
  const [content, setContent] = useState("")

  return (
    <div className='w-[70%] flex flex-col h-full bg-gray-200 rounded-r-xl '>
      <div className='w-full h-[76px] bg-gray-50 flex items-center px-2 py-1 box-border rounded-tr-xl'>
        <div className='w-[50px] h-[50px] mr-2'>
          <img
            className='w-full h-full rounded-full'
            src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D'
            alt='profile image'
          />
        </div>
        <div className='text-2xl text-gray-800 '>kohli</div>
      </div>

      {/* Chats Block */}
      <div className='grow h-full overflow-y-auto'>
        {/* sender message div */}
        <div className='w-full flex gap-2 p-2 items-center box-border'>
          <div className='w-[40px] h-[40px] rounded-full'>
            <img
              className='w-full h-full rounded-full'
              src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D'
              alt='profile image'
            />
          </div>
          <div className='px-3 py-1 text-xl bg-blue-400 text-white rounded-xl max-w-[300px] transition-transform duration-[0.5s] cursor-pointer hover:scale-[1.1]'>
            hello dear
          </div>
        </div>

        {/* user message div */}
        <div className='w-full flex flex-row-reverse gap-2 p-2 items-center box-border'>
          <div className='w-[40px] h-[40px] rounded-full'>
            <img
              className='w-full h-full rounded-full'
              src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D'
              alt='profile image'
            />
          </div>
          <div className='px-3 py-1 text-xl bg-blue-400 text-white rounded-xl max-w-[300px] transition-transform duration-[0.5s] cursor-pointer hover:scale-[1.1]'>
            hello dear
          </div>
        </div>
      </div>

      {/* message box */}
      <div className='h-[75px] bg-gray-50 px-2 py-1 box-border items-center flex justify-between w-full rounded-br-xl'>
        <div className="grow ">
            <input type="text" value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder="Type Your Message Here....." className="w-full h-[35px] px-3 py-1 box-border rounded-3xl border border-gray-300 bg-white focus:outline-0 text-gray-800"/>

        </div>
        <div>
            <SendIcon sx={{"fontSize":"32px", margin:"10px", cursor:"pointer", color: "black"}}/>
        </div>
      </div>
    </div>
  );
}

export default Chats;
