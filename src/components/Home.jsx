import React, { useState, useEffect } from "react";
import Header from "./Header";
import ArticlesList from "./ArticlesList";
import {getArticles} from "../api/api"

export default function Home({articles, setArticles, isLoading,setIsLoading}) {
    

 if (isLoading) {
   return <p>Loading articles...</p>;
 }
  return (
    <>
      
      <ArticlesList articles={articles} setArticles={setArticles}/>
      
    </>
  );
}
