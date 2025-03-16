import Home from './components/home';
import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
  const [isLogin,setIsLogin] = useState(localStorage.getItem("isLogin"));
  const setLoginFunction = (value)=>{
    setIsLogin(value)
  }
  return (
    <>
    <Routes>
      <Route path="/" element={ isLogin ? <Navigate to={'/dashboard'}/> : <Home setLoginFunction={setLoginFunction}/>} />
      <Route path="/dashboard" element={ isLogin ? <Dashboard setLoginFunction={setLoginFunction}/> : <Navigate to={'/'}/> } />
    </Routes>
      
    </>
  )
}

export default App
