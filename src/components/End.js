import React from "react"
import karta from './images/karta_stkino.png'
import './End.css'

const End =(props)=>{

    return(
        <>
        <div className="container">
            <div>
                <h1 style={{textAlign:'center'}}>Uspješno ste rezervirali kartu!</h1><br/>
            </div>
                    
            <div className="image-container">
                <img src={karta} alt=''/>
            </div>
            <div className="centered">
                <h3>{props.movie}</h3><br/>
                
                <p>Sjedalo: </p><h2>{props.seat}</h2><p>Dvorana: </p><h2>D4</h2>
            </div>
            <div className="date">
                
            </div>

            
        </div>
        
        </>
    )

}
export default End