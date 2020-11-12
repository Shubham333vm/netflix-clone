import React, { useState } from 'react';
import axios from './axios'
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({titles,fetchUrls,isLargeRow}){

    const [movies, setMovies] = useState();
    
    useEffect(()=>{
    debugger
        
        async function fetchData(){
            const request = await axios.get(fetchUrls);
            setMovies(request.data.results)
        }
        fetchData();

    debugger
    },[fetchUrls])

   // console.table(movies)
   console.log(movies)
//    const names= movies.map((movie)=>{
//       return movie.name; 
//    })

//  console.log(isLargeRow);

    return (
        <div className="row">
            <h2>{titles}</h2>
            <div className="row-posters">
            {console.log(isLargeRow)}  

                {

                   movies &&  movies.map(movie=>(
                      
                        <img className={`row-poster ${isLargeRow && "row_LargePoster"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}></img>
                        
                    ))
}
                
            </div>
        

        </div>

    )
}

export default Row;