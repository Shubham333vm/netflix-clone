import React, { useState,useEffect } from 'react';
import axios from './axios'
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({titles,fetchUrls,isLargeRow}){

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setMovie_URL] = useState("")
   
    useEffect(()=>{
    
        console.log("Row component useEffect")
        async function fetchData(){
            const request = await axios.get(fetchUrls);
            setMovies(request.data.results)
        }
        fetchData();

    
    },[fetchUrls])

   console.log(movies)
   const handleClick=(movie)=>{
       console.log("trailerUrl---->"+trailerUrl)
       if(trailerUrl){
           console.log("if  trailerUrl--->"+trailerUrl)
        setMovie_URL('')
       }else{

        console.log("else  trailerUrl--> "+ trailerUrl)
           movieTrailer(movie?.name || "").then(url=>{

            const urlParams = new URLSearchParams(new URL(url).search);
            setMovie_URL(urlParams.get('v'))

           }).catch(error=>{console.log(error)})
       }
    }


    const opts={
        width: "100%",
        height:"390"
    }

    return (

        <div className="row">
            <h2 className="row_title">{titles}</h2>
            <div className="row-posters">
                {
                 movies &&  movies.map(movie=>(                      
<img key={movie.id} onClick={()=>{handleClick(movie)}} 
className={`row-poster ${isLargeRow && "row_LargePoster"}`} 
src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}></img>                        
 ))
}               
            </div>
           {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>

    )
}

export default Row;