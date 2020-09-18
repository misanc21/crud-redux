import React from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux'
import {
    deleteProductoAction
} from '../actions/productoActions'


const Producto = ({producto}) => {
    const dispatch = useDispatch()

    const handleClick = () =>{
        Swal.fire({
            title: 'Estás seguro?',
            text: "se eliminará permanentemente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:'cancelar',
            confirmButtonText: 'si, borralo!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductoAction(id))
                Swal.fire(
                'Eliminado!',
                'el elemento ha sido borrado',
                'success'
                )
            }
          })
    }

    const {nombre, precio, id} = producto
    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
                <button className="btn btn-danger" type="button" onClick={handleClick}>Eliminar</button>
            </td>
        </tr>
    );
}
 
export default Producto;