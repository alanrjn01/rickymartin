import React from 'react'
import '../styles/Card.css'

export const Card = ({image,name,species,id}) => {

  return (
    <div className='card-container'>
        <img className='image' src={image} alt="" />
        <p className='name'>{name}</p>
        <p className='specie'>{species}</p>
    </div>
  )
}

