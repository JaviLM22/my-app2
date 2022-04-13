import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
const URL_API = "https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getProductos() {
    return axios.get(`${URL_API}/sql?sql=select * from products order by product_name`)
}

export default function Productos() {
  
  const { isLoading, data } = useQuery('products', getProductos)
        
  if (isLoading) {  
       return <div>Espere un momento, por favor</div>
  }

  return (
    <div>
        <h2>Productos actuales</h2>
        <table className="table">
            <thead>
                <tr>
                    <th className='text-center'>Id</th>
                    <th>Nombre</th>
                    <th className='text-end'>Precio</th>
                </tr>
            </thead>

            <tbody>
                {data.data.map(producto => (
                    <tr key={producto.producto_id}>
                        <td className='text-center'>{producto.product_id}</td>
                        <td>{producto.product_name}</td>
                        <td className='text-end'>{producto.unit_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
  }  
