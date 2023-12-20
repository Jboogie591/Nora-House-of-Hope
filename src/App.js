import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Pitch from './Pitch';

function App() {
  const [pitches,setPitches] = useState([])
  const [loggedInUser,setLoggedInUser] = useState(null)
  const navigate = useNavigate()
  const getPitches = () => {
    fetch("http://localhost:8000/pitches")
    .then((resp)=> resp.json())
    .then((data) => {setPitches(data)})
  }
  useEffect(getPitches,[])
  
  const newPitch = (pitch)=>{
    setPitches((currentStatePitches) =>{
      return[...currentStatePitches,
      pitch]
    })
  }

  const handleLogin = (event) => {
    console.log(event.target.inerText==="login")
    console.log(event)
    console.log(typeof event.target.innerText)
    if (event.target.innerText=="login"){
      navigate("/recipient/login")
    }
    else {
      setLoggedInUser(null)
      navigate("/")
    }

  } 
  

  const context = {
    setPitches,
    pitches,
    newPitch,
    loggedInUser,
    setLoggedInUser
  }

  return (
    <div className="App">
       <button type="button" onClick={handleLogin}>{!!loggedInUser ?"logout":"login"}</button>
      <nav class="navbar navbar-default navbar-fixed-top">
        
        <div class="container">
        <ul class="nav nav-tabs">
          <li role="presentation" class="active"><a href="/">Home</a></li>
          <li role="presentation"onClick={handleLogin}><a href="#">{!!loggedInUser ?"logout":"login"}</a></li>
          <li role="presentation"><a href="/pitches/create">Create New Pitch</a></li>
          <li role="presentation"><a href="/pitches">Pitches</a></li>
        </ul>
        </div>
      </nav>
      <Outlet context={context}/>
    </div>
  );
}

export default App;
