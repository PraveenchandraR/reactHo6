import React from 'react';
import './App.css';
import ContextData from './Components/ContextData';
import Home from "./Components/Home";

import NewStudent from "./Components/NewStudent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Table from './Components/Table';
import Edit from './Components/Edit';

function App() {

  const [data, setData] = useState([{name:"prepbyte",age: 24,course:"Mern",batch:"ea19", id:1,},{name:"Praveen",age: 24,course:"Mern",batch:"ea19",id:2}]);
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<ContextData.Provider value={{ entries: data, updateFunction: setData}}><Table /></ContextData.Provider> } />
    
        <Route path='/editStudent' element={<Edit />} ></Route>
          <Route path="/editStudent" element={<ContextData.Provider value={{ entries: data, updateFunction: setData}}><Edit /></ContextData.Provider> } />
          <Route path='/NewStudent' element={<ContextData.Provider value={{ entries: data, updateFunction: setData}}><NewStudent></NewStudent></ContextData.Provider>} />
          
      </Routes>
    </BrowserRouter>
    

   
  );
}

export default App;
