import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import { Routes, Route } from "react-router-dom";
const cors = require("cors");

app.use(cors());

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ArticlesList />
    </>
  );
}

export default App;
