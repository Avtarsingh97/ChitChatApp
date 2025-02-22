

function Login({funcSetLogin}) {

    const handleClickNotRegistered = () =>{
        funcSetLogin(false);
    }

  return (
    <div className="md:w-full h-[100vh] flex bg-gradient-to-r from-blue-200 to-cyan-200 flex-col md:flex-row items-center">
        <div className="w-full flex flex-col justify-center items-center box-border">
        <div className="mb-7"><img src="/src/assets/Logo.webp" alt="logo" className='w-full text-center rounded-lg'/></div>
           
            <div className="w-[80%] md:w-[40%] h-fit box-border mt-[10%] md:m-0 text-black shadow-2xl bg-gradient-to-r from-cyan-40 to-blue-300 rounded-2xl text-center hover:scale-110 hover:duration-700 px-4 py-9">
                <p className="text-2xl font-bold ">LOGIN</p>
                <form action="" className="w-full box-border flex flex-col gap-2 items-center mt-8">
                    <input type="text" name="phone" placeholder="Enter Mobile Number" className="border border-gray-300 rounded-lg px-5 py-2 w-full"/>
                    <input type="password" name="password" placeholder="Enter Password" className="border border-gray-300 rounded-lg px-5 py-2 w-full"/>
                    <button className="bg-blue-400 px-5 py-2 rounded-xl cursor-pointer hover:bg-blue-500 w-[50%] font-semibold text-xl mt-2">Login</button>
                    <a className="cursor-pointer text-black mt-8 hover:underline" onClick={handleClickNotRegistered}>Not Registered Yet</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login