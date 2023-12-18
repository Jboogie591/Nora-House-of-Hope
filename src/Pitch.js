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
            <h1>
                {pitch && pitch.title}
            </h1>
            <h1>
               {pitch && pitch.amountNeeded}
            </h1>
            <p>
               {pitch && pitch.description}
            </p>
        </div>
    )

}
export default Pitch