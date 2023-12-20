import React,{useEffect,useState} from 'react'
import { useOutletContext, useParams } from 'react-router-dom';

function Pitch(){

    const {pitches} = useOutletContext()
    const {id} = useParams()
    const [pitch,setPitch] = useState(null)
    
    useEffect(() => {
       if(pitches.length>0){ const currentPitch = pitches.find(pitch => pitch.id === Number.parseInt(id))
        setPitch(currentPitch)}
    },[id,pitches])
    console.log(pitch)
    return(
        <div>
            <h1 className='display-4'>
                {pitch && pitch.title}
            </h1>
            <figure class="text-end">
                <blockquote className='blockquote'>
                <p>
                    <span>Amount Needed: {pitch && pitch.amountNeeded}</span>   
                    <br/>
                    <span>Amount Raised: {pitch && pitch.amountNeeded}</span>
                </p>
                </blockquote>
            </figure>
            <img src='https://picsum.photos/600/500?random' alt='Pitch cover photo'/>
            <p>
               {pitch && pitch.description}
            </p>
        </div>
    )

}
export default Pitch