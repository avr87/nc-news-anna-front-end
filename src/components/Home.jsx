import React, { useState, useEffect } from "react";
import Header from "./Header";
import ArticlesList from "./ArticlesList";
import {getArticles} from "../api/api"

export default function Home({articles, setArticles, isLoading,setIsLoading}) {
    
    useEffect(() => {
      getArticles().then((data) => {
        setArticles(data.articles);
        setIsLoading(false)
      });
    }, []);
 if (isLoading) {
   return <p>Loading articles...</p>;
 }
  return (
    <>
      
      <ArticlesList articles={articles} setArticles={setArticles}/>
      
    </>
  );
}
