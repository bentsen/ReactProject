import './App.css'
import CardPage from "./pages/CardPage";
import FrontPage from "./pages/Frontpage";
import React from "react";
import {Route, Routes} from "react-router-dom";


function App() {
   return (
    <Routes>
      <Route exact path='/' element={<FrontPage/>}/>
      <Route path='/cardGame' element={<CardPage/>}/>
    </Routes>
    );
}

export default App
