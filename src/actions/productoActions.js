import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types'

import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

//crear nuevos productos
export function crearNuevoProductoAction (producto) {
    return async (dispatch) =>{
        dispatch(agregarProducto())

        try {
            await clienteAxios.post('/productos',producto)
            dispatch(agregarProductoExito(producto))
            Swal.fire(
                'correcto',
                'el producto se agrego correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch(agregarProductoError(true))
            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//obtener productos

export function getProductosAction() {
    return async dispatch => {
        dispatch(startDescargaProductos())
        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch(descargaProductosExito(respuesta.data))
            
        } catch (error) {
            dispatch(descargaProductosError(true))
        }
    }
}

const startDescargaProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExito = (productos) =>({
    type:DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = (estado) =>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: estado
})

// eliminacion de productos

export function deleteProductoAction(id) {
    return async dispatch => {
        dispatch(startDeleteProducto(id))
        try {
            const res = await clienteAxios.delete(`/productos/${id}`)
            dispatch(deleteProductoExito())
        } catch (error) {
            deleteProductoError(true)
        }
    }
}

const startDeleteProducto = id =>({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const deleteProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const deleteProductoError = estado =>({
    type:PRODUCTO_ELIMINADO_ERROR,
    payload: estado
})