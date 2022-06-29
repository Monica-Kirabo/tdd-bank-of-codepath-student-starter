import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [isloading, setIsloading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState([]);

  const [filterInputValue, setFilterInputValue] = useState("");
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar
          filterInputValue={filterInputValue}
          setFilterInputValue={setFilterInputValue}
        />
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
