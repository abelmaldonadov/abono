import React from 'react'
import {BrowserRouter, Route, Routes as Switch} from "react-router-dom";
import NavBarBootstrap from "../components/bootstrap/navBar/NavBarBootstrap";
import Grid from "../components/grid/Grid";
import Error404 from "../components/error/Error404";
import Categories from "../components/categories/Categories";

export default function Routes(props) {
    return <BrowserRouter>
        <NavBarBootstrap/>
        <Switch>
            <Route path="/" element={ <Grid {...props}/> }/>
            <Route path="/categories" element={ <Categories/> }/>
            <Route path="/categories/:category" element={ <Grid {...props}/> }/>
            <Route path="*" element={ <Error404/> }/>
        </Switch>
    </BrowserRouter>
}