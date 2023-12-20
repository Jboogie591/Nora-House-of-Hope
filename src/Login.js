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
        
        <div className="col-md-6 offset-md-3">
            <h1>
                Login
            </h1>
            <form>
            <div className="mb-3">
                <label for="username" className="form-label">Email address</label>
                <input type="username" name="username" className="form-control" id="username" value={username} onChange={handleChange}/>
            </div>
            <div clasNames="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password"  name="password" className="form-control" id="password" value={password} onChange={handleChange}/>
            </div>
            <div className="btn-spacing">
                <button type="submit" onClick={submitLogin}clasNames="btn btn-primary">Login</button>
            </div>
            </form>
    
    </div>
    )

}

export default Login