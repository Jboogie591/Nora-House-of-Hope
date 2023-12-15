import React,{useState,useEffect} from 'react'

function Donate(){

    const [donation, setDonation] = useState("");
    const [card, setCard] = useState(""); 
    const [expiration, setExpiration] = useState("");  
    
    const handleChange = (event) => {
        if (event.target.name === "donationAmount") {
            setDonation(event.target.value)
        }
        else if (event.target.name === "cardNumber") {
            setCard(event.target.value)
        }
        else if (event.target.name === "ExpirationDate") {
            setExpiration(event.target.value)
        }
    }

    const submitForm = (event) => {
        event.preventDefault()
    }





    return(
        
        <div>
            <h1>
           Donate
        </h1>

        <form>
        <label for="donAmount">Amount:</label>
        <input
            type= "text"
            name= "donationAmount"
            id="donAmount"
            value= {donation}
            onChange={handleChange}
        />
        <label for="cardNum">Card Number:</label>
        <input
            type= "text"
            name= "cardNumber"
            id="cardNum"
            value={card}
            onChange={handleChange}
        />
        <label for="exp">Expiration Date:</label>
        <input
            type= "text"
            name= "ExpirationDate"
            id="exp"
            value={expiration}
            onChange={handleChange}
        />
        <button type="submit" onClick={submitForm}>Submit Donation</button>
    
        
        
    
        </form>
    
    </div>
    )

}
export default Donate