import React,{useState,useEffect} from 'react'
import { useOutletContext, useParams } from 'react-router-dom';

const initialState = {
    donorName:"",
    amountDonated:"",
}
const initialCardState = {
    card:"",
    expiration:""
}
function Donate(){
    // const {newDonation} = useOutletContext()
    const {id} = useParams() 
    const [donateData,setDonateData] = useState(initialState)
    const [cardData,setCardData] = useState(initialCardState)
    const {donorName,amountDonated} = donateData 
    const {card,expiration}=cardData
    useEffect(()=>{
        setDonateData((currentStateDonateData) =>{
            return{...currentStateDonateData,
            ["pitchesId"]:id}
        })
    },[id])
    console.log(donateData)
    
    const handleChange = (event) => {
        const {value,name}= event.target
         setDonateData((currentStateDonateData) =>{
             return{...currentStateDonateData,
             [name]: value}
         })
    }
    const handleChangeCard = (event) => {
        const {value,name}= event.target
         setCardData((currentStateCardData) =>{
             return{...currentStateCardData,
             [name]: value}
         })
    }

    const submitDonation = (event) => {
        event.preventDefault()
        console.log("submitDonation")
        fetch("http://localhost:8000/donations",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(donateData)
        })
        .then((resp)=> resp.json())
        .then((data) => {
            setDonateData(initialState)
            setCardData(initialCardState)
        })
    }




    return(
        
        <div>
            <h1>
           Donate
        </h1>

        <form>
        <label for="donorName">Name:</label>
        <input
            type= "text"
            name= "donorName"
            id="donorName"
            value= {donorName}
            onChange={handleChange}
        />
        <label for="donAmount">Amount:</label>
        <input
            type= "text"
            name= "amountDonated"
            id="donAmount"
            value= {amountDonated}
            onChange={handleChange}
        />
        <label for="cardNum">Card Number:</label>
        <input
            type= "text"
            name= "card"
            id="cardNum"
            value={card}
            onChange={handleChangeCard}
        />
        <label for="exp">Expiration Date:</label>
        <input
            type= "text"
            name= "expiration"
            id="exp"
            value={expiration}
            onChange={handleChangeCard}
        />
        <button type="submit" onClick={submitDonation}>Submit Donation</button>
    
        
        
    
        </form>
    
    </div>
    )

}
export default Donate