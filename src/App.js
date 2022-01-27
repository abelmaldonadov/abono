import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBootstrap from "./components/bootstrap/navBar/NavBarBootstrap";
import Grid from "./components/grid/Grid";
import CarouselBootstrap from "./components/bootstrap/carrousel/CarrouselBootstrap";

const inventory = [
    {code:"001", name:"Planta 1", price:"10.00", category:"suculentas", stock:3},
    {code:"002", name:"Planta 2", price:"20.00", category:"suculentas", stock:6},
    {code:"003", name:"Planta 3", price:"30.00", category:"suculentas", stock:2},
    {code:"004", name:"Planta 4", price:"10.00", category:"cactus", stock:7},
    {code:"005", name:"Planta 5", price:"20.00", category:"cactus", stock:1},
    {code:"006", name:"Planta 6", price:"30.00", category:"cactus", stock:4},
    {code:"007", name:"Planta 7", price:"10.00", category:"huerto", stock:2},
    {code:"008", name:"Planta 8", price:"20.00", category:"huerto", stock:5},
    {code:"009", name:"Planta 9", price:"30.00", category:"huerto", stock:9}
]

export default function App() {
    return <div>
        <NavBarBootstrap/>
        <CarouselBootstrap/>
        <Grid inventory={inventory} />

        {/*<Greeting/>*/}
        {/*<hr/>*/}
        {/*<Toggle/>*/}
        {/*<hr/>*/}
        {/*<List/>*/}
        {/*<hr/>*/}
        {/*<Calculator/>*/}
        {/*<hr/>*/}
        {/*<Timer/>*/}
    </div>
}
