function PitchCard({pitch}){
    return (
        <div>
            <h1>
                {pitch.title}
            </h1>
            <h3>{pitch.amountNeeded}</h3>
        </div>
    )
}
    
export default PitchCard