import { useState } from "react";
import ProfileSelector from "./ProfileSelector";
import axios from "axios";
import Loader from "./Loader/Loader";


function Login({ funcSetLogin }) {
    const [loading, setLoading] = useState(false);
    const [profileModal, setProfileModal] = useState(false);
    const [inputField,  setInputField] = useState({mobileNumber:"",name:"", password:"", profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaxkxnMrakMtywgSFKKcPo1pmpNJQe2KtvaZUca9Fb0JkkPbRx1P2A-FEXQWLYV9lyT8&usqp=CAU"});

    
    const handleClickLogin = () => {
      funcSetLogin(true);
    };
    
    const handleSetImage = (link)=>{
      setInputField({
        ...inputField,['profilePic']:link
      })
    };

  const handleProfileModalClose = () => {
    setProfileModal(prev => !prev)
  };

  const handleOnChange = (e,key) =>{
    setInputField({
      ...inputField,[key]:e.target.value
    })
  };

  const  handleRegister = async()=>{
    setLoading(true);    
    await axios.post("http://localhost:8000/api/auth/register", inputField).then(response=>{
      funcSetLogin(true);
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{setLoading(false)})
  }

  return (
    <div className='md:w-full md:h-[100vh] flex bg-gradient-to-r from-blue-200 to-cyan-200 flex-col md:flex-row items-center'>
      
      <div className='w-full flex flex-col justify-center items-center box-border'>
      <div className="mb-7"><img src="/src/assets/Logo.webp" alt="logo" className='w-full text-center rounded-lg'/></div>
        <div className='w-[80%] md:w-[60%] h-fit box-border mt-[10%] md:m-0 text-black shadow-2xl bg-gradient-to-r from-cyan-40 to-blue-300 rounded-2xl text-center md:hover:scale-110 hover:duration-700 px-4 py-9'>
        
          <p className='text-2xl font-bold '>REGISTER</p>

          <form
            method="POST"
            className='w-full box-border flex flex-col gap-2 items-center mt-8'
          >
            <div className='register-container flex flex-col-reverse md:flex-row gap-x-2 w-full justify-center items-center'>
              <div className='left w-full md:w-[70%] flex flex-col gap-y-2 mt-2 md:m-0'>
                <input
                  type='text'
                  value={inputField.mobileNumber}
                  onChange={(e)=>handleOnChange(e,"mobileNumber")}
                  name='mobileNumber'
                  placeholder='Enter 10 Digit Mobile Number'
                  className='border border-gray-300 rounded-lg px-5 py-2 w-full'
                />
                <input
                  type='text'
                  value={inputField.name}
                  onChange={(e)=>handleOnChange(e,"name")}
                  name='name'
                  placeholder='Enter name'
                  className='border border-gray-300 rounded-lg px-5 py-2 w-full'
                />
                <input
                  type='password'
                  value={inputField.password}
                  onChange={(e)=>handleOnChange(e,"password")}
                  name='password'
                  placeholder='Enter Password'
                  className='border border-gray-300 rounded-lg px-5 py-2 w-full'
                />
              </div>

              <div className='right w-full md:w-[30%] text-xl flex flex-row md:flex-col justify-center items-center'>
                <div className="avatar pb-2 pr-2 md:pr-0 flex justify-center">
                    <img src={inputField.profilePic} alt="avatar image" className="w-[100px] h-[100px] rounded-full border-fuchsia-500 border-2"/>
                </div>
                <div className='outline px-2 text-sm py-1 rounded-xl hover:bg-blue-400 hover:outline-0 cursor-pointer' onClick={handleProfileModalClose}>Select Avatar</div>
              </div>
            </div>

            <button className='bg-blue-400 px-5 py-2 rounded-xl cursor-pointer hover:bg-blue-500 w-[50%] font-semibold text-xl mt-2 h-[50px]' onClick={handleRegister}>{loading ? <Loader/> : "Register"}</button>
            <a
              className='cursor-pointer text-black mt-8 hover:underline'
              onClick={handleClickLogin}
            >
              Already have an account? Login
            </a>
          </form>
        </div>
      </div>
      {
        profileModal && <div className="fixed w-full h-[100vh]">
        <ProfileSelector handleSetImage={handleSetImage} handleProfileModalClose={handleProfileModalClose}/>
      </div>
      }
    </div>
  );
}

export default Login;
