import React from 'react'
import '../components/Card.css'
import { Link } from 'react-router-dom'

function Card({ props }) {
    return (
        <div>
            {
                props.map((items, index) =>
                    <div key={index} className="card">
                        <img src={items.image} className="card-img-top" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{items.Name}</h5>
                                <p className="card-text">Price{items.Price}</p>
                                <Link to={`/cards/${items.name}`}>
                                    <div >Click me</div>
                                </Link>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>

                )



            }</div>
    )
}

export default Card