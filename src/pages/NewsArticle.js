import React , {useState} from "react";
import './NewsArticle.css'




function NewsArticle({ data }) {

  const [like , setLike] = useState(false)

  const handlerLike = () => {
      setLike(
        !like
      )
  }


  return (
    
      <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <br/>
      <br/>
      <i className={like ? 'far fa-heart' : 'fas fa-heart' }  onClick={handlerLike} > Like</i>
    </div>
    
  );
}

export default NewsArticle;
