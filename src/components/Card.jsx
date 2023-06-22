import React from 'react'

function Card({ props }) {
    return (
        <div>
            {
                props.map((items, index) =>

                    <div className="card" style={{width: "18rem;"}}>
                        <img scr={items.image} className="card-img-top" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{items.name}</h5>
                                <p className="card-text">Price{}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>

                )



            }</div>
    )
}

export default Card