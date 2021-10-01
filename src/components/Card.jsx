import React from "react";
import Avatar from "./Avatar"
import Details from "./Details";

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
                    <Details email = {props.tel} />
                    <Details email = {props.email} />
                </div>
            </div>
        </div>
    );   
}


export default Card;