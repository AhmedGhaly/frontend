import React from 'react'

import './product.css'
const product = props => {
    return (
        <div className='row'>
        <div className="card col-6">
            {/* <img src={props.image} className="card-img-top"/> */}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <button onClick={props.onClick} className="btn btn-primary">Add To Card</button>
            </div>
        </div>
        </div>
    )
}

export default product