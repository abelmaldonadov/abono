import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBootstrap from "./components/bootstrap/navBar/NavBarBootstrap";
import Grid from "./components/grid/Grid";
import List from "./components/list/List";
import Calculator from "./components/raisingStates/Calculator";
import Greeting from "./components/greeting/Greeting";
import Timer from "./components/timer/Timer";
import Toggle from "./components/toggle/Toggle";

export default function App() {
    return <div>
        <NavBarBootstrap/>

        <Greeting/>
        <hr/>
        <Toggle/>
        <hr/>
        <List/>
        <hr/>
        <Calculator/>
        <hr/>
        <Timer/>

        {/*<Grid/>*/}
    </div>
}
