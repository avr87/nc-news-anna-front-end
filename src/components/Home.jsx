import React, { useState, useEffect } from "react";
import Header from "./Header";
import ArticlesList from "./ArticlesList";
import {getArticles} from "../api/api"

export default function Home({articles, setArticles, selectedTopic, setSelectedTopic, topic, setTopic}) {
    useEffect(() => {
      getArticles().then((data) => {
        setArticles(data.articles);
      });
    }, []);

  return (
    <>
      <Header topic={topic} setTopic={setTopic} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
      <ArticlesList articles={articles} setArticles={setArticles}/>
      
    </>
  );
}
