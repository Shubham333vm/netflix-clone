import React, { useEffect,useState } from 'react'
import "./Navbar.css"

export default function Navbar() {

    const [show, handleShow] = useState(false)


   // Inside useEffect we can add a return statement at the end of function call which returns a function.
    // This return function does the cleanup work. Frequency execution
    // of the cleanup work also depends upon the second argument passed to useEffect function.
    
    useEffect(()=>{
        console.log("useEffect of NavBar")
        window.addEventListener("scroll",
        ()=>{
        console.log("window.screenY ----> "+window.scrollY)
            if(window.scrollY>100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
       // return ()=>{ window.removeEventListener("scroll")}

    },[])


    return (
       <div className={`nav ${show && "nav_black" }`}>       
            <img className="nav_logo" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'></img>
            <img className="nav_avatar" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'></img>
        </div>
    )
}
