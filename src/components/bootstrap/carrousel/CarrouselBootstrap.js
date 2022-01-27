import {Carousel} from "react-bootstrap";
import BgCactus from "./bg-cactus.jpg"
import BgStore from "./bg-store.jpg"
import BgSuculenta from "./bg-suculenta.jpg"

export default function CarouselBootstrap(props) {
    return <Carousel style={{ height: '20rem', overflow: 'hidden' }}>
        <Carousel.Item style={{ height: '20rem' }}>
            <img
                className="d-block w-100"
                src={BgCactus}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '20rem' }}>
            <img
                className="d-block w-100"
                src={BgStore}
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '20rem' }}>
            <img
                className="d-block w-100"
                src={BgSuculenta}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}