import React from "react";
import Avatar from "./Avatar"

function Card(props){
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h1 className="name">{props.name}</h1>
                    <Avatar 
                        img = {props.img}
                    />
                </div>
                <div className="bottom">
                    <p className="info">{props.tel}</p>
                    <p className="info">{props.email}</p>
                </div>
            </div>
        </div>
    );   
}


export default Card;