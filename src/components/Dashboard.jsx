import React, { useState, useEffect, useRef } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import Conversation from "./Coversation";
import Chats from "./Chats";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard({setLoginFunction}) {
  const [selectedUserDetails, setSelectedUserDetail] = useState(null);
  const [queryParam, setQueryParam] = useState("");
  const [searchData, setSearchData] = useState([]);
  const ref = useRef();
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSearchData([]);
      setQueryParam("");
    }
  };

  useEffect(() => {
    if (searchData.length) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchData]);

  const handleLogout = async() =>{
    await axios.post("http://localhost:8000/api/auth/logout",{},{withCredentials:true}).then((response)=>{
      console.log(response)
      localStorage.clear();
      setLoginFunction(false);
      navigate('/')
    }).catch(err=>{
      console.log(err);
    })
    
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200'>
      <div className='w-[90%] h-[90%] bg-white rounded-xl flex shadow-2xl '>
        <div className='w-[30%] h-full bg-gray-100 rounded-l-xl border border-r-gray-300 '>
          <div className='p-4 flex flex-col h-[95%] text-black'>
            <div className='w-full flex justify-between items-center box-border text-xl'>
              <div>
                <img
                  src='/src/assets/Logo.webp'
                  alt='logo'
                  className='w-[50%]'
                />
              </div>
              <div>
                <div onClick={handleLogout}><LogoutIcon className='cursor-pointer text-gray-500' /></div>
              </div>
            </div>

            <div className='w-full box-border my-4 flex justify-between items-center relative'>
              <input
                value={queryParam}
                onChange={(event) => {
                  setQueryParam(event.target.value);
                }}
                type='text'
                placeholder='Search'
                className='w-[85%] h-[35px] px-3 py-1 box-border rounded-3xl border border-gray-300 bg-white focus:outline-0'
              />
              <button
                type='submit'
                className='flex justify-center items-center p-3 border w-[35px] h-[35px] cursor-pointer rounded-full bg-black text-white'
              >
                <SearchIcon />
              </button>

              {searchData.length ? (
                <div
                  ref={ref}
                  className='absolute top-[44px] left-[15px] z-1 w-[77%] bg-white border-1 border-gray-400 px-2 py-2 box-border flex flex-col gap-2 rounded-sm'
                >
                  {searchData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className='flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-sm'
                      >
                        <img
                          className='w-[35px] h-[35px] rounded-full'
                          src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D'
                          alt='profile image'
                        />
                        <div>Rahul</div>
                        <div className='text-gray-400'>xxxxxxxx89</div>
                      </div>
                    );
                  })}
                </div>
              ) : 
              queryParam.length !== 0 && searchData.length === 0 ?
              (
                <div
                  ref={ref}
                  className='absolute top-[44px] left-[15px] z-1 w-[77%] bg-white border-1 border-gray-400 px-2 py-2 box-border flex flex-col gap-2 rounded-sm'
                >
                  <div
                    className='flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-sm'
                  >
                    <img
                      className='w-[35px] h-[35px] rounded-full'
                      src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D'
                      alt='profile image'
                    />
                    <div>No Data Found</div>
                  </div>
                </div>
              ) : null }
            </div>

            <div className='w-full grow overflow-y-auto overflow-x-hidden'>
              <Conversation />
            </div>
          </div>
        </div>
        {selectedUserDetails ? (
          <Chats />
        ) : (
          <div className='w-[70%] flex flex-col items-center justify-center'>
            <div className='w-[70%]'>
              <img
                src='/src/assets/noChatUI.png'
                alt='No Chat UI Image'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
