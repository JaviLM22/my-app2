import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
            <ul class="list-group list-group-horizontal">
                <li class="list-group-item"><Link to="/clientes">Clientes</Link></li>
                <li class="list-group-item"><Link to="/productos">Productos</Link></li>
                <li class="list-group-item"><Link to="/facturas">Facturas</Link></li>
            </ul>
        </header>
  )
}
