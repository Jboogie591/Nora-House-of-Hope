import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Pitch from './Pitch';
import NavBar from './NavBar';

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
    if (event.target.innerText=="Login"){
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
      <NavBar handleLogin={handleLogin} loggedInUser={loggedInUser}/>
      <div className='page-content'>
        <Outlet context={context}/>
      </div>
    </div>
  );
}

export default App;
