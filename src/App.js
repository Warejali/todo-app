import './App.css';
import Home from './components/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='lg:mx-12 mt-10'>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
