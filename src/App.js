import React, { useEffect,useState } from 'react'
import './App.css';
import request from './request';
import Row from './Row'
import Banner from './Banner'
import Navbar from './Navbar'


function App() {

  // Security
  // Routes
  // Components
  // And we call all the apis from this component as it will live as long as our application live

  // const [size, setsize] = useState(window.scrollY)
  // const handleSize=()=>{
  //   setsize(window.scrollY)
  // }
  //This is an asynchrounous hook
  // where as useLayoutEffect is synchrounous
  //their is one more --
  // useEffect(()=>{
  //   console.log("App component useEffect method")
  //   window.addEventListener("scroll",handleSize)

  //   //when app component will unmount this return method will be called and wll remove the eventListner 
  //   //
  //   return ()=>{
  //     console.log("This return will call only second time as it will remove or will do clean up activity")
  //     window.removeEventListener("resize",handleSize)
  //   }
  // },[])
  
  return (
    <div className="app">
      {/* NavBar */}

      <Navbar/>


      {/* Banner */}

      <Banner fetchUrls={request.fetchTreanding}/>
  {/* <h3>ScreenSize= {size}</h3> */}
      {console.log("Hey we are inside return")}

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
