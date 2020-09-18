import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                <h1 className="col-md-8 col-xs-12">
                    <Link to={'/'} className="text-light">
                        CRUD - React - redux
                    </Link>
                </h1>
                <Link 
                    to={"/productos/nuevo"}
                    className="btn btn-danger nuevo-post d-block d-md-inline-block col-md-4 col-xs-12"
                >
                    Agregar producto &#43;
                
                </Link>
        </nav>
     );
}
 
export default Header;