import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Todos from './components/Todos';

function App() {
  return (
    <div className='lg:mx-12 mt-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
