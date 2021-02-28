import React from 'react'
import '../../style/home/homeStyle.css'

import {isMobile} from 'react-device-detect';

import Carousel from 'react-bootstrap/Carousel'

function Home(){
    return(
    <div className="parent">
            
    <Carousel style={{marginTop: isMobile ? 120 : 20}}>
        <Carousel.Item>
            <img
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

    <div id="text1div" className="text1div">
        
        <p id="titel" className="titel">Informatiker</p>
        <p id="titel2" className="titel highlighted">Daniel Bosin</p>
        
        <p className="firstTextChild">
            Junger, zielstrebiger, Student aus Südtirol mit mehrjähriger Erfahrung mit Full-Stack-Development und Sehnsucht nach Sillicon-Valley. 
        </p>
        
        <p className="firstTextChild">
            Meister in präziser Eigen-, sowie Teamarbeit
        </p>
    </div>

        {/* <div className="titleParent">

            <p className="titleChild">
                Informatiker
            </p>
            <p className="titleChild highlighted">
                DANIEL BOSIN
            </p>

        </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <div className="firstTextParent">

            <p className="firstTextChild">
                Junger,  zielstrebiger,  Unetrnehmer aus Südtirol mit Sehnsucht nach Sillicon-Valley und mehrjähriger Erfahrung mit Full-Stack-Development
            </p>
            
            <p className="firstTextChild">
                Meister in präziser Eigen-, sowie Teamarbeit
            </p>
            
        </div> */}

        </div>
    )
}

export default Home