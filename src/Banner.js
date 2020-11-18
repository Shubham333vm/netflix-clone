import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css"

const base_url = "https://image.tmdb.org/t/p/original/";
function Banner({ fetchUrls }) {
  const [movie, setMovies] = useState();

  useEffect(() => {
    console.log("Banner component useEffect");
    async function fetchData() {
      const request = await axios.get(fetchUrls);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    //    { var rand = Math.floor((Math.random()*10)*(movies.length))}

    <header className="banner" style={{

        backgroundSize:     "cover",
        backgroundImage:    `url(https://image.tmdb.org./t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center"

    }}>
      <div className="banner_content">

        <h1 class='banner_title'>

          {movie?.title || movie?.name || movie?.original_name}

        </h1>
        {/* <img src={movie.poster_path} alt={movie.name}></img> */}
      

      <div class='banner_buttons'>
        {/* Buttons */}
        <button class='banner_button'>Play</button>
        <button class='banner_button'>My List</button>
      </div>
      
      {/* Description */}
      <h1 class='banner_description'>
        {movie?.overview}
      </h1>

      <div className="banner--fadeBottom">

      </div>

      </div>
    </header>
  );
}

export default Banner;
