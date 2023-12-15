
import React,{useState,useEffect} from 'react'


function CreatePitch(){ 

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); 
    const [amount, setAmount] = useState("");  
    
    const handleChange = (event) => {
        if (event.target.name === "pitchTitle") {
            setTitle(event.target.value)
        }
        else if (event.target.name === "pitchStory") {
            setDescription(event.target.value)
        }
        else if (event.target.name === "AmountNeeded") {
            setAmount(event.target.value)
        }
    }

    const submitForm = (event) => {
        event.preventDefault()
    }


    return(

    <div>
        <h1>
           CreatePitch
        </h1> 
        <form>
            <label for="pitchInput">Pitch Title:</label>
            <input
                type= "text"
                name= "pitchTitle"
                id="pitchInput"
                value= {title}
                onChange={handleChange}
            />
            <label for="pitchDesc">Pitch Description:</label>
            <input
                type= "text"
                name= "pitchStory"
                id="pitchDesc"
                value={description}
                onChange={handleChange}
            />
            <label for="amount">Amount Needed:</label>
            <input
                type= "text"
                name= "AmountNeeded"
                id="amount"
                value={amount}
                onChange={handleChange}
            />
            <button type="submit" onClick={submitForm}>Submit Pitch</button>
            

        </form>
        </div>
    )


}
export default CreatePitch