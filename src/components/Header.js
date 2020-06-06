import React from 'react'
import { NavLink } from 'react-router-dom'

const Header =()=> (
    <header>
      <h1>Contract Database</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Add Contract</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help Pgae</NavLink>
    </header>
)

export default Header