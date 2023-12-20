
import React,{useState,useEffect} from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';


function CreatePitch(){ 
    const navigate = useNavigate()
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
        .then((data) => {
            newPitch(data)
            navigate(`/pitches/${data.id}`)
        })
      }


    return(

    <div className='create-pitch-container'>
        <h1>
           Create A New Pitch
        </h1> 

       
        <form >
            <div className='mb-3'>
                <label for="pitchInput" className='form-label'>Pitch Title:</label>
                <input
                    className='form-control'
                    type= "text"
                    name= "title"
                    id="pitchInput"
                    value= {title}
                    onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <label for="pitchDesc">Pitch Description:</label>
                <textarea
                    className='form-control'
                    type= "text"
                    name= "description"
                    id="pitchDesc"
                    value={description}
                    onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <label for="amount">Amount Needed:</label>
                <input
                    className='form-control'
                    type= "text"
                    name= "amountNeeded"
                    id="amount"
                    value={amount}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className='btn btn-info' onClick={submitPitch}>Submit Pitch</button>
            

        </form>
        </div>
    )


}
export default CreatePitch