import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [topic, setTopic] = useState([]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              setArticles={setArticles}
              topic={topic}
              setTopic={setTopic}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
            />
          }
        />
        <Route
          path="/articles"
          element={<Articles articles={articles} setArticles={setArticles} />}
        />
      </Routes>
    </div>
  );
}

export default App;
