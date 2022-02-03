import {useEffect} from "react";
import {Link} from "react-router-dom";

export default function Category({setLoading}) {
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return <div className="text-center mt-5">
        <h4><Link to={`/category/suculentas`}>Suculentas</Link></h4>
        <h4><Link to={`/category/cactus`}>Cactus</Link></h4>
    </div>
}