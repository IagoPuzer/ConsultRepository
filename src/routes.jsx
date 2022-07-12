import React from "react";
import {Home} from "./pages/Home"
import {Repositories} from "./pages/Repositories"
import {BrowserRouter, Route, Routes} from "react-router-dom"

export function Router (){
   
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repositories" element={<Repositories />} />
        </Routes>
       </BrowserRouter>
        
      )

}