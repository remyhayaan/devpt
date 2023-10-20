import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Entry from './components/Entry';
import Services from './components/Services';
import Ratings from './components/Ratings';
import MyBookings from './components/About';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Entry />}/>
        <Route path='/about' element={< MyBookings />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/ratings' element={< Ratings />}/>
      </Routes>
    </div>
  );
}

export default App;
