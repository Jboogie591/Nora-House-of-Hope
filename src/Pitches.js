
import React,{useEffect,useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import PitchCard from './PitchCard'



function Pitches(){
    const {pitches} = useOutletContext()
   

    return(
        <div className="container text-center">
            <div className="row g-3 align-items-center">
            {
                pitches?.map(pitch=>{
                    return(
                        <div className='col'>
                            <PitchCard pitch={pitch}/>
                       </div>
                    )
                })
            }
            </div>
        </div>
    )

}
export default Pitches