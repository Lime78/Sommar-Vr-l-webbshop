import { Link, NavLink, Outlet } from "react-router-dom"
import React, { useEffect } from 'react';
import './router.jsx'
// import Footer from '../components/footer.jsx'

function Root() {
    return (
        <div className="App">
            <header>
        <div className="header-row"> </div>
            {/* aria-hidden means that the element is not visible to the screenreading-..uh.. thing */}
            <section className="mainContent" aria-hidden></section>
            <NavLink to="/AdminPage" className="Log-in">Admin</NavLink>
            <NavLink to="/" className="Vår-skrik"> Vår Skrik </NavLink>
            <NavLink to="/CartPage" className="Kassa">Kassa</NavLink>
            </header>
            <Outlet />
        </div>
    );
}

export default Root; 