import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { CardContainer } from "./components/cardcontainer.jsx";
import "./App.css";

const API = "https://jsonplaceholder.typicode.com/albums/1/photos"; 

 export default function App() {
  const [data, setData] = useState([]); 
  
  useEffect(() => {
    fetch(API)
      .then((res) => res.json()) 
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <>
      <h1>Album de canciones</h1>
      <CardContainer>
        {data.map((card) => (
          <Card
            key={card.url}
            albumId={card.albumId}
            id={card.id}
            title={card.title}
            url={card.url}
          />
        ))}
      </CardContainer>
      <footer className="footer">Parcial 2 - Carlos Valero</footer>
    </>
  );
}
