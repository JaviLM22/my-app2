import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='d-flex justify-content-around mb-5'>
            <div className='d-flex flex-column'>
                <Link to="/personas">Facebook</Link>
                <Link to="/personas">Instagram</Link>
                <Link to="/personas">Linked</Link>
            </div>
            <div className='d-flex flex-column'>
                <Link to="/personas">Contactar</Link>
                <Link to="/personas">Términos y condiciones</Link>
                <Link to="/personas">Seguridad</Link>
            </div>
        </footer>
  )
}
