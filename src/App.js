import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Pitch from './Pitch';

function App() {
  const [pitches,setPitches] = useState([])
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
  

  const context = {
    setPitches,
    pitches,
    newPitch
  }

  return (
    <div className="App">
      
    <Outlet context={context}/>
    </div>
  );
}

export default App;
