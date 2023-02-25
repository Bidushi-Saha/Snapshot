import './App.css';
import Navbar from './components/navbar';
import Image from './components/image';
import { InputContext } from './context/inputContext';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [images,setImages] =useState([]);
  return (
  <BrowserRouter>
  
    <div className="App">
      <InputContext.Provider value={{setImages}}>
      <Navbar />
      <Routes>
      <Route path='/' element={<Image images={images} />}/>  
      { /*/<Route path='/Mountain' element={<image images={images} />}/>      
      <Route path='/Beaches' element={<image images={images} />}/>
      <Route path='/Birds' element={<image images={images} />}/>      
      <Route path='/Food' element={<image images={images} />}/>*/ }
      </Routes>
      </InputContext.Provider>

    </div> 
    
    </BrowserRouter>
  )
 
}

export default App;
