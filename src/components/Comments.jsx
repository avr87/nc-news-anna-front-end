import CommentCard from "./CommentCard";
import { useEffect } from "react";
import { getComments } from "../api/api";

export default function ({ isLoading, setIsLoading, comments, setComments }) {
  useEffect(() => {
    getComments().then((data) => {
      console.log(data, "datatdatadatadata");
      setComments(data.comments);
      setIsLoading(false);
    });
  }, []);
  console.log(comments, "commmments");
  if(isLoading){
    <p>Loading comments...</p>
  }
  return (
    <>
      <section>
        <div className="container comment-container">
          <div className="row row-cols-0.5 row-spacing">
            {comments.map((comment) => {
              return (
                <div className="col" key={comment.comment_id}>
                  <CommentCard comment={comment} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
