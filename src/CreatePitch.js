
import React,{useState,useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';


function CreatePitch(){ 
    const {setPitches,newPitch}=useOutletContext()
    
    const [pitchData,setPitchData] = useState({});
    const {title,description,amount} = pitchData
    
    const handleChange = (event) => {
       const {value,name}= event.target
        setPitchData((currentStatePitchData) =>{
            return{...currentStatePitchData,
            [name]: value}
        })
    }

    const submitPitch = (event) => {
        event.preventDefault()
        console.log(pitchData)
        fetch("http://localhost:8000/pitches",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(pitchData)
        })
        .then((resp)=> resp.json())
        .then((data) => {newPitch(data)})
      }


    return(

    <div className='create-pitch-container'>
        <h1>
           CreatePitch
        </h1> 
        <form className='form-horizontal'>
            <div className='form-group'>
                <label for="pitchInput">Pitch Title:</label>
                <input
                    type= "text"
                    name= "title"
                    id="pitchInput"
                    value= {title}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label for="pitchDesc">Pitch Description:</label>
                <input
                    type= "text"
                    name= "description"
                    id="pitchDesc"
                    value={description}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label for="amount">Amount Needed:</label>
                <input
                    type= "text"
                    name= "amountNeeded"
                    id="amount"
                    value={amount}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className='btn btn-default' onClick={submitPitch}>Submit Pitch</button>
            

        </form>
        </div>
    )


}
export default CreatePitch