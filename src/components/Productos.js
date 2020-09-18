import React, {Fragment, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux'
import { 
    getProductosAction
} from '../actions/productoActions'

import Producto from './Producto'

const Productos = () => {
    const dispatch = useDispatch()

    const productos = useSelector(state => state.productos.productos)
    const error = useSelector(state => state.productos.error)
    const cargando = useSelector(state => state.productos.loading)

    useEffect(() => {
        dispatch(getProductosAction())
        // eslint-disable-next-line
    }, [])
    return ( 
        <Fragment>
            <h2 className="text-center my-5"> Listado de productos</h2>
            {error? <p className="font-weight-bold alert alert-danger text-center">Hubo un error</p>: null}
            {cargando ? <p className="text-center">Cargando...</p>: null}
            <table className="table table-striped"> 
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col"> Nombre </th>
                        <th scope="col"> Precio </th>
                        <th scope="col"> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0? 
                        <tr><td>No hay productos</td></tr>
                        : 
                        productos.map( p => {
                            return <Producto key={`i-${p.id}`} producto={p}/>
                        })
                    }
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;