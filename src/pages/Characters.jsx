import React, { useState, useEffect } from "react";
import { getAllCharacters,getOneCharacter } from "../functions/functions";
import { Card } from "./Card";
import '../styles/Characters.css'

export const Characters = (pageIndex) => {
  const [oneCharacter,setOneCharacter] = useState([])

  useEffect(()=>{
    getOneCharacter(setOneCharacter)
  },[])
  return (
    <div>
      <div className="characters_container">
          {
            oneCharacter.map((character) => {
              console.log(oneCharacter.length)
              return (
                <Card
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  id={character.id}
                ></Card>
              );
            })
          }
      </div>
      
    </div>
  );
};
