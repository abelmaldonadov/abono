import {useParams} from "react-router-dom";
import React from "react";
import CardBootstrap from "../bootstrap/cards/CardBootstrap";
import './grid.css'
import {Container} from "react-bootstrap";


export default function Grid({products}) {
    const {category} = useParams()

    const listCategory = products.map(item => {
        if (category === undefined) {
            return <CardBootstrap key={item.code} item={item}/>
        } else if (item.category === category) {
            return <CardBootstrap key={item.code} item={item}/>
        } else return null
    })

    return <Container>
        <p className="text-muted text-center py-4">Catálogo</p>
        <div className="grid">
            {listCategory}
        </div>
    </Container>
}