import React from 'react'
import '../../style/projects/projectsStyle.css'

import PanelL from '../Assets/Programming Projects/PanelL'
import PanelR from '../Assets/Programming Projects/PanelR'

import DividerBottomColor1 from '../Assets/DividerBottomColor1'
import DividerTopColor1 from '../Assets/DividerTopColor1'
import DividerBottomColor2 from '../Assets/DividerBottomColor2'
import DividerTopColor2 from '../Assets/DividerTopColor2'

function Projects(){

    let tsp = {
        title: 'Traveling Salesman',
        imgSrc: 'https://cdn.discordapp.com/attachments/613625981219110914/814968350757224519/Paketdienst.png',
        text: [`Lösung zum TSP. Hier werden 
        mehrere, auf einem `, <strong> Backend Java-Server </strong>, `laufende, Algorithmen verwendet, 
        welche auf einer mit`, <strong> HTML, Bootstrap </strong>, ` und`, <strong> CSS </strong>, ` wundervoll 
        gestalteten Website mit`, <strong> Javascript </strong>, ` abgerufen werden.`],
        maxHeightMobile: '300',
        maxHeightPc: '500',
        href:'http://paketdienst.tk'
    }

    let giftGen = {
        title: 'Gutschein Generator',
        imgSrc: 'https://cdn.discordapp.com/attachments/814271639122477107/815514477528612914/TagesKarteVorlage.png',
        text: [`Ein Generator für Gutscheine mit `, <strong> QR-Code Generierung </strong>, ` und Bildüberlagerung. 2 
        Varianten, in `, <strong> Python </strong>, ` und in`, <strong> Java </strong>],
        maxHeightMobile: '400',
        maxHeightPc: '500',
        maxWidthMobile: '240',
        maxWidthPc: '300',
        href:'http://paketdienst.tk',
        idNum: '2'
    }

    let urlShort = {
        title: 'Url Shortener',
        imgSrc: 'https://cdn.discordapp.com/attachments/814271639122477107/815518284761530368/unknown.png',
        text: [`Url Shortener in `, <strong> Java </strong>, ` mit `, <strong> Hashmaps </strong>, ` und `, 
        <strong> 26<sup>4</sup> möglichen Urls </strong>],
        maxHeightMobile: '300',
        maxHeightPc: '500',
        href: '',
    }

    let hammingCode = {
        title: 'Hamming Code',
        imgSrc: 'https://cdn.discordapp.com/attachments/814271639122477107/815518869367685130/florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
        text: [`Code zur Ausbesserung von Bitflips. Lange Version in `, <strong> Java </strong>, ` 
        und kurze Version in `, <strong> Javascript </strong>],
        maxHeightMobile: '400',
        maxHeightPc: '500',
        maxWidthMobile: '400',
        maxWidthPc: '600',
        href:'http://paketdienst.tk',
        idNum: '4'        
    }

    return(
        <div className="parent">
            <DividerTopColor1 />

                <div className="ProjectTitle" id='ProgrammingProjects'>
                    Programmier-Projekte
                </div>
                <div style={{backgroundColor: '#97ddcd'}}>
                    <PanelL obj={tsp}/>
                    <PanelR obj={giftGen}/>
                    <PanelL obj={urlShort}/>
                    <PanelR obj={hammingCode}/>
                
                </div>

            <DividerBottomColor1/>
            

            <DividerTopColor2 />

                <div className="ProjectTitle" id="DesignProjects">
                    Design-Projekte
                </div>
            
            <DividerBottomColor2/>
            {/* <RightPanel1></RightPanel1> */}

            {/* <div className="imgDiv">
                <img className="img" src="https://cdn.discordapp.com/attachments/613625981219110914/814968350757224519/Paketdienst.png"></img>

                <div>
                    <p
                        className="title">
                        Traveling Salesman
                    </p>
                    <p
                        className="text">
                        Hier hat man eine bestimmte Anzahl von Knoten, welche man jeweils einmal besuchen muss.
                        Der Startpunkt ist gleichzeitig der Endpunkt und wird deshalb zweimal besucht. Hier werden
                        mehrere, auf einem <strong> Backend Java-Server </strong> laufende, Algorithmen in verwendet,
                        welche auf einer mit <strong> HTML, Bootstrap </strong> und <strong> CSS </strong> wundervoll
                        gestalteten Website mit <strong> Javascript </strong> abgerufen werden
                    </p>
                    <div className="linkDiv">
                        <a
                            href="http://paketdienst.tk"
                            className="link">
                            Website
                        </a>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Projects