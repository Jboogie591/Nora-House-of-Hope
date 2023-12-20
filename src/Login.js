import { useState } from "react";
import { useNavigate,useOutletContext } from "react-router-dom";
const initialData = {
    username:"",
    password:""
}
function Login(){
    const [recipientData,setRecipientData] = useState(initialData);
    const {loggedInUser,setLoggedInUser} = useOutletContext()
    const navigate = useNavigate()
    const {username,password} = recipientData
    
    const handleChange = (event) => {
       const {value,name}= event.target
        setRecipientData((currentStateRecipientData) =>{
            return{...currentStateRecipientData,
            [name]: value}
        })
    }

    const submitLogin = (event) => {
        event.preventDefault()
        fetch("http://localhost:8000/recipients/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(recipientData)
        })
        .then((resp)=> resp.json())
        .then((data) => {
            // setLoggedInUser(initialData)
            setLoggedInUser( {
                "id": 1,
                "recipientName": "Lyana",
                "email": "sparkles@aol.com",
                "username": "Jmoney",
                "password": "spiderman"
              })
            navigate("/recipient/dashboard")
        })
      }




    return(
        
        <div>
            <h1>
           Login
        </h1>

        <form>
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
      
        <button type="submit" onClick={submitLogin}>Login</button>
    
        
        
    
        </form>
    
    </div>
    )

}

export default Login