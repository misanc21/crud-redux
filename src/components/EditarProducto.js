import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {
    editaProductoAction
}from '../actions/productoActions'

const EditarProducto = () => {
    const history = useHistory()
    const productoEditar = useSelector(state=> state.productos.productoEditar)
    const dispatch = useDispatch()
    
    
    const [producto, setProducto] = useState({
        nombre:'',
        precio: 0
    })
    const {nombre, precio} = producto
    
    useEffect(() => {
        setProducto(productoEditar)   
    }, [productoEditar])

    const handleChange = e =>{
        const valor = e.target.name === 'precio'? e.target.value = Number(e.target.value): e.target.value
        setProducto({
            ...producto,
            [e.target.name] : valor
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if(nombre.trim() === '' || precio <= 0){
            return
        }
        dispatch(editaProductoAction(producto))
        history.push('/')
    }

    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Nombre producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Agrega nombre de producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Agrega precio de producto"
                                    name="precio"
                                    value={precio}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditarProducto;