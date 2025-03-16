import { useState } from "react";
import axios from 'axios';
import Loader from "./Loader/Loader";
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';

function Login({funcSetLogin,setLoginFunction}) {
    const [inputField, setInputField] = useState({mobileNumber: "", password: ""});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClickNotRegistered = () =>{
        funcSetLogin(false);
    }

    const handleOnChange = (e, key) => {
        setInputField({
            ...inputField,[key]:e.target.value
        })
    }
    

    const handleLogin = async(e)=>{
        e.preventDefault();
        
        setLoading(true);    
        await axios.post("http://localhost:8000/api/auth/login", inputField,{withCredentials:true}).then(response=>{
          
          let userInfo = response.data.user;
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          localStorage.setItem("isLogin", true);
          setLoginFunction(true);
          navigate('/dashboard');
        }).catch((err)=>{
            let errorMsg = err.response.data.error;
            toast.error(errorMsg);
         
        }).finally(()=>{setLoading(false)})
      }

      
  return (
    <div className="md:w-full h-[100vh] flex bg-gradient-to-r from-blue-200 to-cyan-200 flex-col md:flex-row items-center">
        <ToastContainer/>
        <div className="w-full flex flex-col justify-center items-center box-border">
        <div className="mb-7"><img src="/src/assets/Logo.webp" alt="logo" className='w-full text-center rounded-lg'/></div>
           
            <div className="w-[80%] md:w-[40%] h-fit box-border mt-[10%] md:m-0 text-black shadow-2xl bg-gradient-to-r from-cyan-40 to-blue-300 rounded-2xl text-center hover:scale-110 hover:duration-700 px-4 py-9">
                <p className="text-2xl font-bold ">LOGIN</p>
                <form className="w-full box-border flex flex-col gap-2 items-center mt-8" method="POST">
                    <input type="text" value={inputField.mobileNumber} onChange={(e) => handleOnChange(e, "mobileNumber")} name="mobileNumber" placeholder="Enter Mobile Number" className="border border-gray-300 rounded-lg px-5 py-2 w-full"/>
                    <input type="password" value={inputField.password} onChange={(e) => handleOnChange(e, "password")} name="password" placeholder="Enter Password" className="border border-gray-300 rounded-lg px-5 py-2 w-full"/>
                    <button className="bg-blue-400 px-5 py-2 rounded-xl cursor-pointer hover:bg-blue-500 w-[50%] font-semibold text-xl mt-2" onClick={(e)=>handleLogin(e)}>{loading ? <Loader/> : "Login"}</button>
                    <a className="cursor-pointer text-black mt-8 hover:underline" onClick={handleClickNotRegistered}>Not Registered Yet</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login