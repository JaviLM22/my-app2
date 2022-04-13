import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
            <ul>
                <li><Link to="/clientes">Clientes</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/facturas">Facturas</Link></li>
            </ul>
        </header>
  )
}
