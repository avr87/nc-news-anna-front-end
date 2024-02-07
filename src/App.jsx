import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Header from "./components/Header";


function App() {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app">
      <Header
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              setArticles={setArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/articles"
          element={
            <Articles
              articles={articles}
              setArticles={setArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle
              isLoading={isLoading}
              setIsLoading={setIsLoading}
             
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
