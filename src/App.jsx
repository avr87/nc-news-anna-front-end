import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Header from "./components/Header";
// import Topics from "./components/Topics";
import ArticlesByTopics from "./components/ArticlesByTopic"

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/articles"
          element={<Articles articles={articles} setArticles={setArticles} />}
        />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        {/* <Route
          path="/articles/:topic"
          element={
            <ArticlesByTopics articles={articles} setArticles={setArticles} />
          }
        ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
