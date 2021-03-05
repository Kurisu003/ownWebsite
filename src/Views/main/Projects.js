import React from 'react'
import '../../style/projects/projectsStyle.css'

import Panel1 from '../Assets/Programming Projects/Panel1'
import Panel2 from '../Assets/Programming Projects/Panel2'
import Panel3 from '../Assets/Programming Projects/Panel3'
import Panel4 from '../Assets/Programming Projects/Panel4'

import DividerBottomColor1 from '../Assets/DividerBottomColor1'
import DividerTopColor1 from '../Assets/DividerTopColor1'
import DividerBottomColor2 from '../Assets/DividerBottomColor2'
import DividerTopColor2 from '../Assets/DividerTopColor2'

function Projects(){
    return(
        <div className="parent">
            <DividerTopColor1 />
            <div className="ProjectTitle">
                Programmier Projekte
            </div>
            <div style={{backgroundColor: '#97ddcd'}}>
                <Panel1 />
                
                <Panel2 />
                
                <Panel3 />

                <Panel4 />
               
            </div>

            <DividerBottomColor1/>
            
            <DividerTopColor2 />

            
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