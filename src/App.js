import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Characters } from './pages/Characters';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
