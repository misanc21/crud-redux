import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

//actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions'
import { 
    mostrarAlertaAction,
    ocultarAlertaAction
} from '../actions/alertaActions'

const NuevoProducto = ({history}) => {
    //utiliza el use dispatch para crear el dispatch
    const dispatch = useDispatch()

    //acceder al state del store
    const cargando = useSelector(state => state.productos.loading)
    const error = useSelector(state=> state.productos.error)
    const alerta = useSelector(state => state.alerta.alerta)


    const [datos, setDatos] = useState({
        nombre:'',
        precio: 0
    })
    const {nombre, precio} = datos


    const handleChange = e =>{
        const valor = e.target.name === 'precio'? e.target.value = Number(e.target.value): e.target.value
        setDatos({
            ...datos,
            [e.target.name] : valor,
        })
    }

    const handlesubmit = e => {
        e.preventDefault()

        if(nombre.trim() === '' || precio <= 0){
            console.log('entro')
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3 mt-3'
            }
            dispatch(mostrarAlertaAction(alerta))
            return
        }
        dispatch(ocultarAlertaAction)
        dispatch(crearNuevoProductoAction(datos))
        history.push('/')
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        <form
                            onSubmit={handlesubmit}
                        >
                            <div className="form-group">
                                <label>Nombre producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Agrega nombre de producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange = {handleChange}
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
                                    onChange = {handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                        {cargando ? <p>cargando...</p>: null}
                        {alerta? <p className={alerta.classes}>{alerta.msg}</p>: null}
                        {error? <p className="alert alert-danger p2 mt-2 text-center">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;