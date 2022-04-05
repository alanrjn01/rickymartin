import React from "react";
import { Characters } from './Characters'
import '../styles/Home.css'

export const Home = () => {

  return (
      <>
        <h1>te odio react</h1>
        <p>Usando la api de <a href="https://rickandmortyapi.com" target={"_blank"}>rick and morty</a> para obtener los personajes (183) haciendo una petición con axios y posteriormente mostrarlos en pantalla</p>
        <Characters></Characters>
        <div className="vid_container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ubMdLFfYZFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
      </>
      
  )
}
