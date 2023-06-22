import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data/Data'

function CardInfo() {

    const {Name} = useParams();

  return (
    <div>
        {
            data.filter(card => card.Name === Name).map
            ((card,index)=>
            
            <div key={index} className="container">
                <img src={card.image} alt=""/>
                <h2>{card.Name}</h2>
                <h2>{card.Price}</h2>
            
            </div>
            
            )
        }
    </div>
  )
}

export default CardInfo