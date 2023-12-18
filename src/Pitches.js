
import React,{useEffect,useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import PitchCard from './PitchCard'



function Pitches(){
    const {pitches} = useOutletContext()
   

    return(
        <div>

            {
                pitches?.map(pitch=>{
                    return(
                       <PitchCard pitch={pitch}/>
                    )
                })
            }
        </div>
    )

}
export default Pitches