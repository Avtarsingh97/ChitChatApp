import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Home() {
  const [loginPage, setLoginPage] = useState(false);

  const funcSetLogin = (val) => {
    setLoginPage(val)
  }



  return <div>{loginPage ? <Login funcSetLogin={funcSetLogin}/> : <Register funcSetLogin={funcSetLogin}/>}</div>;
}

export default Home;
