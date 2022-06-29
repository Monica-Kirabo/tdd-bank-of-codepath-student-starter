
import {BrowserRouter,Routes,Route} from "react-router-dom"
import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      
      </BrowserRouter>
      <Navbar />
      <Home />
    </div>
  )
}
