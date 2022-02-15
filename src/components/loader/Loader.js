import {Audio} from 'react-loader-spinner'

function Loader(props) {
    return <Audio
        heigth="100"
        width="100"
        color='grey'
        ariaLabel='loading'
    />
}

export default Loader