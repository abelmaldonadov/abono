import {Link} from "react-router-dom";

export default function Categories() {
    return <div className="text-center mt-5">
        <h4><Link to={`/categories/suculentas`}>Suculentas</Link></h4>
        <h4><Link to={`/categories/cactus`}>Cactus</Link></h4>
    </div>
}