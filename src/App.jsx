import Home from './components/home';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
      
    </>
  )
}

export default App
