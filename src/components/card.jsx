import React from "react";
import "./card.css";

export function Card({ albumId, id, title, url }) {
  return (
    <div className="card">
      <img src={url} />
      <h2>{title}</h2>
      <p>Track No {id} del albúm {albumId}</p>
    </div>
  );
}
