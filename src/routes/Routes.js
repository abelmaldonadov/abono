import React, {useState} from 'react'
import {BrowserRouter, Route, Routes as Switch} from "react-router-dom";
import NavBarBootstrap from "../components/bootstrap/navBar/NavBarBootstrap";
import Grid from "../components/grid/Grid";
import Error404 from "../components/grid/Error404";
import Category from "../components/grid/Category";

export default function Routes(props) {
    const [loading, setLoading] = useState(true)

    return <BrowserRouter>
        <NavBarBootstrap/>
        <Switch>
            <Route path="/" element={ <Grid setLoading={setLoading}/> }/>
            <Route path="/category" element={ <Category setLoading={setLoading}/> }/>
            <Route path="/category/:id" element={ <Grid setLoading={setLoading}/> }/>
            <Route path="*" element={ <Error404 setLoading={setLoading}/> }/>
        </Switch>
        { (loading) && <div className="container">
            <p className="text-center">Cargando...</p>
        </div> }
    </BrowserRouter>
}