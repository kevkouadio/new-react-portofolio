import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Card(props) {
  return (
    <div className="card" id="pCard" style={{width: 19+"rem" }}>
      {/* <h5 className="card-title">{props.name}</h5> */}
      {/* <i className="bi bi-arrows-angle-expand"></i> */}
        <img src={props.picture} className="card-img-top" alt={props.name}/>
        <div className="card-body">
            <p className="card-text">{props.description}</p>
        </div>
        <div className="card-body">
            <a href={props.link} className="card-link" target="blank">Deployed Website</a>
            <a href={props.repo} className="card-link" target="blank">Github Repo</a>
        </div>
    </div>
  );
}

export default Card;