import React from 'react'
import '../../style/home/homeStyle.css'
import navColorClickHandler from '../../Components/clickHandler'

import { Link } from "react-router-dom"

import Carousel from 'react-bootstrap/Carousel'

function Home(){
    return(
    <div id='HomeParnetExterior'>
        <div id='HomeParentInterior'>

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
                    onClick={() => {
                    navColorClickHandler('projects')
                }}
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
                        src="https://cdn.discordapp.com/attachments/613625981219110914/847417883872722954/unknown.png"
                        alt="First slide"
                        />

                        <Carousel.Caption>
                            <h3>Memento Mori</h3>
                            <p>Videospiel in Java</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        id='CarouselImage'
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/613625981219110914/821695304738406410/unknown.png"
                        alt="First slide"
                        />

                        <Carousel.Caption>
                            <h3>Paketdienst</h3>
                            <p>Vereint HTML, CSS und JS</p>
                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        id='CarouselImage'
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/613625981219110914/821695697216733194/unknown.png"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Kalender</h3>
                            <p>Kalender für Südtiroler Spengler Innung</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        id='CarouselImage'
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/613625981219110914/821696893296836608/unknown.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Shulker Shell</h3>
                            <p>Eigene, in C geschriebene, Shell</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>

        {/* Webdesign / Erster div */}
        <div id='ServicesParent'>
            <div className='ServicesChild'>
                <div className='SercivesIconWrapper'>
                    <img
                        className='ServicesIcon'
                        src="https://cdn.discordapp.com/attachments/613625981219110914/881475895376871424/website_1.png"
                        alt="WebsiteIcon"
                    />
                </div>

                <div className='ServicesTextWrapper'>
                    <p>
                        Webdesign auf ihre Bedürfnisse Abgestimmt.
                        Egal ob einfache Landingpage oder komplexe Webdesigns.
                    </p>
                </div>

                <Link
                    to="/serviceswebsite"
                    className="noUnderline blueOnHover"
                    onClick={() => {
                    navColorClickHandler('home')
                }}
                >
                    <div id='HomeServicesButtonDiv'>
                        <p id='HomeServicesButton'>
                            Jetzt mehr erfahren!
                        </p>
                    </div>
                </Link>
                
            </div>

            {/* Logo design / Zweiter div */}
            <div className='ServicesChild'>
                <div className='SercivesIconWrapper'>
                    <img
                        className='ServicesIcon'
                        src="https://cdn.discordapp.com/attachments/613625981219110914/881475893430714458/world-graphics-day_1.png"
                        alt="WebsiteIcon"
                    />
                </div>

                <div className='ServicesTextWrapper'>
                    <p>
                        Lassen Sie uns das perfekte Logo für Sie gestalten.
                        Egal ob minimalistisch und modern, abstrakt oder etwas ihrer Wahl.
                    </p>
                </div>

                <Link
                    to="/serviceslogo"
                    className="noUnderline blueOnHover"
                >
                    <div id='HomeServicesButtonDiv'>
                        <p id='HomeServicesButton'>
                            Jetzt mehr erfahren!
                        </p>
                    </div>
                </Link>
                
            </div>

            {/* It Hilfe / dritter div */}
            <div className='ServicesChild'>
                <div className='SercivesIconWrapper'>
                    <img
                        className='ServicesIcon'
                        src="https://cdn.discordapp.com/attachments/613625981219110914/881475891551682580/smartphone_1.png"
                        alt="WebsiteIcon"
                    />
                </div>

                <div className='ServicesTextWrapper'>
                    <p>
                        Wir helfen gerne bei Problemen mit ihrem PC, Smartphone
                        oder Tablet. Kontaktieren Sie uns um Hilfe zu erhalten.
                    </p>
                </div>

                <Link
                    to="/serviceshelp"
                    className="noUnderline blueOnHover"
                >
                    <div id='HomeServicesButtonDiv'>
                        <p id='HomeServicesButton'>
                            Jetzt mehr erfahren!
                        </p>
                    </div>
                </Link>
                
            </div>
  
        </div>
    </div>
    )
}

export default Home