import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul>
      <li>
        <Link to='/'>home</Link>
      </li>
      <li>
        <Link to='/login'>login</Link>
      </li>
    </ul>
  )
}

export default Header