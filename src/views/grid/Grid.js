import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import CardBootstrap from "../../components/bootstrap/cards/CardBootstrap";
import './grid.css'
import {Container} from "react-bootstrap";
import Loader from "../../components/loader/Loader";


export default function Grid({products}) {
    const {category} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const listCategory = products.map(item => {
        if (category === undefined) {
            return <CardBootstrap key={item.code} item={item}/>
        } else if (item.category === category) {
            return <CardBootstrap key={item.code} item={item}/>
        } else return null
    })

    useEffect(() => {
        const timeout = setTimeout(
            () => setIsLoading(false),
            2000
        )
        return () => clearTimeout(timeout)
    }, []);


    return <Container>
        <p className="text-muted text-center py-4">Catálogo</p>
        {
            isLoading
            ? <div style={{ display:'flex', width:'100%', justifyContent:'center' }}>
                <Loader/>
            </div>
            : <div className="grid">
                {listCategory}
            </div>
        }
    </Container>
}