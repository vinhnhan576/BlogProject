import React from "react";


export default function Topic_Post(props) {
  return (
      <div className="body" id={props.id}>
        <div className="body-image">
          <img src={props.urlImage} alt="" />
        </div>
        <div className="body-content">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
  );
}
