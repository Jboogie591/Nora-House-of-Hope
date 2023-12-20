function PitchCard({pitch}){
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="Pitch Photo"/>
            <div className="card-body">
                <h5 className="card-title">{pitch.title}</h5>
                <p className="card-text">{pitch.amountNeeded}</p>
                <div className="btn-spacing">
                    <a href={`/pitches/${pitch.id}`} className="btn btn-primary">Learn More</a>
                </div>
                <div className="btn-spacing">
                    <a href={`/donate/${pitch.id}`} className="btn btn-primary">Donate</a>
                </div>
            </div>
        </div>
    )
}
    
export default PitchCard