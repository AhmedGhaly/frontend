import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const navbar = props => {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to='/'>my commerce</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
                <li className="nav-item "><NavLink className="nav-link" exact to='/order'>Order</NavLink></li>
                <li className="nav-item "><NavLink className="nav-link" exact to='/signup'>signup</NavLink></li>
                <li className="nav-item "><NavLink className="nav-link" exact to='/login'>login</NavLink></li>
          </ul>
          <ul className="navbar-nav ml-auto">
                <li className="nav-item "><NavLink className="nav-link" to='/card'>card</NavLink></li>
          </ul>
      </div>
    </nav>
    )
}

export default navbar