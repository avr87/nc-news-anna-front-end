import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";
// import { getArticlesByTopic } from "../api/api";
import { useParams, useSearchParams } from "react-router-dom";
// import SortBy from "./SortBy";

export default function Articles({ articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  const setOrder = (direction) => {
    console.log(direction);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  const setSort = (query) => {
    console.log(query);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", query);
    setSearchParams(newParams);
  };

  function handleSort(event) {
    setSort(event.target.id);
  }

  function handleOrder(event) {
    setOrder(event.target.id);
  }

  console.log(sortByQuery, orderQuery, "sortByQuery, orderQuery");
  useEffect(() => {
    getArticles(topic, sortByQuery, orderQuery)
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  }, [topic, sortByQuery, orderQuery]);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  return (
    <>
      <div className="justify-content-center">
        <Topics />
        <div className="row justify-content-center">
          <ul
            className="nav nav-underline dark justify-content-center col-md-2"
            style={{ width: 150 + "px" }}
          >
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                //   value={searchParams.get("sort_by") || ""}
              >
                Sort by
              </a>
              <ul className="dropdown-menu">
                <li>
                  <p
                    onClick={handleSort}
                    className="dropdown-item"
                    id="created_at"
                  >
                    Date
                  </p>
                </li>
                <li>
                  <p
                    onClick={handleSort}
                    className="dropdown-item"
                    id="comment_count"
                  >
                    Comment Count
                  </p>
                </li>
                <li>
                  <p onClick={handleSort} className="dropdown-item" id="votes">
                    Votes
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <ul
            className="nav nav-underline dark justify-content-center col-md-2"
            style={{ width: 150 + "px" }}
          >
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                //   value={searchParams.get("order") || ""}
              >
                Order By
              </a>
              <ul className="dropdown-menu">
                <li>
                  <p onClick={handleOrder} className="dropdown-item" id="asc">
                    Asc
                  </p>
                </li>
                <li>
                  <p onClick={handleOrder} className="dropdown-item" id="desc">
                    Desc
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <div className="container text-center preview-articles">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
            {articles.map((article) => {
              return (
                <div className="col" key={article.article_id}>
                  <ArticleCard article={article} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
