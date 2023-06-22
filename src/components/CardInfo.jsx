import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data/Data'

function CardInfo() {

    const title = useParams();

  return (
    <div>
        {
            data.filter(card.title === title).map
            ((card,index)=>
            
            <div key={index} class="container">
                <img scr={card.image} alt=""/>
                <h2>{card.Name}</h2>
                <h2>{card.Price}</h2>
            
            </div>
            
            )
        }
    </div>
  )
}

export default CardInfo