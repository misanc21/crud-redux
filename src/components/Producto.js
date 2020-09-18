import React from 'react';
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux'
import {
    deleteProductoAction,
    getProductoEditarAction
} from '../actions/productoActions'


const Producto = ({producto}) => {
    const dispatch = useDispatch()
    const history = useHistory()

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

    // funcion que ridirige
    const redireccionarEdicion = () => {
        dispatch(getProductoEditarAction(producto))
        history.push(`/productos/editar/${id}`)
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button
                    className="btn btn-primary mr-2"
                    onClick={redireccionarEdicion}
                >
                    Editar
                </button>
                <button className="btn btn-danger" type="button" onClick={handleClick}>Eliminar</button>
            </td>
        </tr>
    );
}
 
export default Producto;