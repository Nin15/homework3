import React from "react";
import './Card.css'


export default function Card({name, surname, email, password, img, id}) {
  return (
    <div className="card-div">
      <img src={img} alt="" className={`img-${id}`} />
      <h1>
        {name}
        <span>{surname}</span>!
      </h1>
      <h2>Email: {email}</h2>
      <h3>Password: {password}</h3>
    </div>
  );
}
