import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/transactions/:transactionId"
              element={<TransactionDetail />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
