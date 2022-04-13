
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
const URL_API = "https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getClientes() {
    return axios.get(`${URL_API}/sql?sql=select * from customers limit 20`)
}

export default function Clientes() {
  
  const { isLoading, data } = useQuery('products', getClientes)
        
  if (isLoading) {  
       return <div>Espere un momento, por favor</div>
  }

  return (
    <div>
        <h2>Clientes</h2>
        <table className="table">
            <thead>
                <tr>
                    <th className='text-center'>Id</th>
                    <th>Nombre</th>
                    
                </tr>
            </thead>

            <tbody>
                {data.data.map(cliente => (
                    <tr key={cliente.customer_id}>
                        <td className='text-center'>{cliente.customer_id}</td>
                        <td>{cliente.company_name}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
  }  
