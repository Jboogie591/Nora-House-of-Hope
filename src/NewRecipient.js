import { useState } from "react";
const initialData = {
    recipientName:"",
    email:"",
    username:"",
    password:""
}
function NewRecipient(){
    const [recipientData,setRecipientData] = useState(initialData);
    const {recipientName,email,username,password} = recipientData
    
    const handleChange = (event) => {
       const {value,name}= event.target
        setRecipientData((currentStateRecipientData) =>{
            return{...currentStateRecipientData,
            [name]: value}
        })
    }

    const submitPitch = (event) => {
        event.preventDefault()
        fetch("http://localhost:8000/recipients",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(recipientData)
        })
        .then((resp)=> resp.json())
        .then((data) => {
            setRecipientData(initialData)
        })
      }
    return(
        <div>
        <h1>
            NewRecipient
        </h1>
        <form>
            <label for="recipientName">Name:</label>
            <input
                type= "text"
                name= "recipientName"
                id="recipientName"
                value= {recipientName}
                onChange={handleChange}
            />
            <label for="email">email:</label>
            <input
                type= "text"
                name= "email"
                id="email"
                value={email}
                onChange={handleChange}
            />
            <label for="username">Username:</label>
            <input
                type= "text"
                name= "username"
                id="username"
                value={username}
                onChange={handleChange}
            />
            <label for="password">Password:</label>
            <input
                type= "text"
                name= "password"
                id="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit" onClick={submitPitch}>Submit Pitch</button>
            

        </form>
        </div>
        
    )
}

export default NewRecipient