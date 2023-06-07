import React, { useEffect, useState } from "react";
import axios from "axios";

const Filmler = () => {
  const [filmler, setFilmler] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get("/filmler");
      setFilmler(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  
    fetchData();
  }, []);

  return (
    
<section className="movies">
<div className="movies-grid">
  {filmler.map((film) => (
    <a href= {`/filmler/${film.slug}`}>
<div className="movie-card">
<div className="card-head">
  <img
    src={film?.afis}
    alt=""
    className="card-img"
  />
  <div className="card-overlay">
    <div className="bookmark">
      <ion-icon name="bookmark-outline"></ion-icon>
    </div>
    <div className="rating">
      <ion-icon name="star-outline"></ion-icon>
      <span>6.8</span>
    </div>
    <div className="play">
      <ion-icon name="play-circle-outline"></ion-icon>
    </div>
  </div>
</div>
<div className="card-body">
  <h3 className="card-title">{film?.baslik}</h3>
  <div className="card-info">
    <span className="genre">{film?.kategoriler}</span>
    <span className="year">{film?.yil}</span>
  </div>
</div>
</div>
</a>
 ))}
</div>
</section>
)};

export default Filmler;
