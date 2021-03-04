import React from 'react'
import '../../style/home/homeStyle.css'

import { Link } from "react-router-dom"

import Carousel from 'react-bootstrap/Carousel'

function Home(){
    return(
    <div id='HomeParent'>

        <div
            id="text1div"
            className="text1div"
        >
            <p
                id="titel"
                className="titel highlighted"
            >
                Informatiker
            </p>
            <p
                id="titel2"
                className="titel"
            >
                Daniel Bosin
            </p>

            <p
                className="firstTextChild"
            >
                Junger, zielstrebiger, Student aus Südtirol mit mehrjähriger Erfahrung mit Full-Stack-Development und Sehnsucht nach Sillicon-Valley.
            </p>

            <p
                className="firstTextChild"
            >
                Meister in präziser Eigen-, sowie Teamarbeit
            </p>
            <Link
                to="/Projects"
                className="noUnderline blueOnHover"
            >
                <div id='HomeMainButtonDiv'>
                    <p id='HomeMainButton'>
                        Jetzt mehr erfahren!
                    </p>
                </div>
            </Link>
        </div>
        
        <div id='CarouselParent'>
            <Carousel style={{marginTop: 20}}>
                <Carousel.Item>
                    <img
                    id='CarouselImage'
                    className="d-block w-100"
                    src="https://cdn.discordapp.com/attachments/613625981219110914/815624653410009118/unknown.png"
                    alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                    id='CarouselImage'
                    className="d-block w-100"
                    src="https://cdn.discordapp.com/attachments/613625981219110914/815624653410009118/unknown.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    id='CarouselImage'
                    className="d-block w-100"
                    src="https://cdn.discordapp.com/attachments/613625981219110914/815624653410009118/unknown.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    </div>
    )
}

export default Home