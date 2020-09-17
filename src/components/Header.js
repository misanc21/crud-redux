import React from 'react';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1> CRUD - React - redux</h1>
                <a 
                    href="/productos/nuevo"
                    className="btn btn-danger nuevo-post d-block d-md-inline-block"
                >
                    Agregar producto &#43;</a>
            </div>
        </nav>
     );
}
 
export default Header;