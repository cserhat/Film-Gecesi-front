import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

const Film = () => {

    const [film, setFilm] = useState({});
    const location = useLocation()
    const slug = location.pathname.split("/")[2]
   
    useEffect(()=>
    {
        const fetchData = async () =>
        {
            try {
                const res = await axios.get(`/filmler/${slug}`)
                setFilm(res.data)
            }catch(err)
            {
                console.log(err)
            }
        }
        fetchData()
    }, [slug])

  return (
    <div>
 
        <div key={film.id}>
          <h2>{film.baslik}</h2>
          <p>{film.yonetmen}</p>
          <img src={film.afis} alt={film.baslik} />
          <p>{film.ozet}</p>
          <p>{film.yil}</p>
          <p>{film.kategoriler}</p>
        </div>
    
    </div>
  );
};

export default Film;
