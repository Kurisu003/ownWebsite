import React from 'react'
import '../../style/projects/projectsStyle.css'

import Panel1L from '../Assets/Panel1L'
import Panel2R from '../Assets/Panel2R'
import Panel2L from '../Assets/Panel2L'
import Panel3L from '../Assets/Panel3L'
import Panel4R from '../Assets/Panel4R'
import Panel4L from '../Assets/Panel4L'

function Projects(){
    return(
        <div className="parent">

            <Panel1L></Panel1L>
            
            <div id='panel2Pc' className='panel'>
                <Panel2R></Panel2R>
            </div>
            
            <div id='panel2Mobile' className='panel'>
                <Panel2L></Panel2L>                
            </div>
            <Panel3L></Panel3L>

            <div id='panel4Pc' className='panel'>
                <Panel4R></Panel4R>
            </div>
            
            <div id='panel4Mobile' className='panel'>
                <Panel4L></Panel4L>                
            </div>
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