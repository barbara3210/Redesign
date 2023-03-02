import React from "react";
import './Card.css'

const Card=(props)=>{

    return(
        
        <div className="card-container">
            <div className="image-container">
                <img src={props.image} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h1>{props.title}</h1>
                </div>
                <div className="card-body">
                    <p>{props.des}</p>
                </div>
                <div className="card-body">
                    <p>{(props.time+'  ')}</p>
                </div>

                <div className="btn">
                    <button>
                        <a href="/rezervacija"><span></span>Rezerviraj kartu</a>
                    </button>
                </div>

            </div>
        </div>
        
    )

}
export default Card