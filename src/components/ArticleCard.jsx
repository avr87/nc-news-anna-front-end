export default function ArticleCard({ article }) {
  return (
    <div className="card mb-3" style={{ width: 540 + "px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={article.article_img_url}
            className="img-fluid rounded-start"
            alt="picture of article"
          />
          <p className="card-topic">{article.topic}</p>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-comment_count">
              Comment count:{article.comment_count}
            </p>
            <p className="card-votes">Votes: {article.votes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */
}
