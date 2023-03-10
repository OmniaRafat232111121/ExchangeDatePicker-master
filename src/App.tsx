import React from 'react';
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
