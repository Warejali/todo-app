import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import Update from './components/Update';

function App() {
  return (
    <div className='lg:mx-44 mt-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
