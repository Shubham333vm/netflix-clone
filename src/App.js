import React, { useEffect } from 'react'
import './App.css';
import request from './request';
import Row from './Row'
import Banner from './Banner'

function App() {

  // Security
  // Routes
  // Components
  // And we call all the apis from this component as it will live as long as our application live

  useEffect(()=>{
    console.log("App component useEffect method")
  })
  
  return (
    <div >
      {/* NavBar */}




      {/* Banner */}

      <Banner/>



      {/* Row with Posters */}
      <Row titles="Netflix Originals Movies" fetchUrls={request.fetchNetflixOriginals} isLargeRow/>
      <Row titles="Top Rated"      fetchUrls={request.fetchTopRated}/>
      <Row titles="Action Movies"   fetchUrls={request.fetchActionMovies}/>
      <Row titles="Comedy Movies"   fetchUrls={request.fetchComedyMovies}/>
      <Row titles="Documentries"    fetchUrls={request.fetchDocumentries}/> 
      <Row titles="Trending Now"    fetchUrls={request.fetchTreanding}/>
      <Row titles="Horror Movies"   fetchUrls={request.fetchTreanding}/>
      <Row titles="Romance Movies"  fetchUrls={request.fetchRomanceMovies}/>
    
    </div>
   
  );
}

export default App;
