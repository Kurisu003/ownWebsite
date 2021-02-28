import React from 'react'
import '../../style/panel/Panel.css'
import {isMobile} from 'react-device-detect';

function Panel1(){

    const topMargin = isMobile ? 120 : 10;
    const maxHeight = isMobile ? 300 : 500;
    const textTopMargin = isMobile ? 20 : 0;

    return(
        <div>
            <div className="panelParent" style={{marginTop: topMargin + 'px'}}>
                
                <img
                    id="img"
                    className="img"
                    style={{maxHeight: maxHeight + "px"}}
                    src="https://cdn.discordapp.com/attachments/613625981219110914/814968350757224519/Paketdienst.png"
                >
                </img>

                <div id="textDiv" className="textDiv">
                    <p 
                        className="title">
                        Traveling Salesman
                    </p>
                    
                    <p
                        className="text"  style={{marginTop: textTopMargin + 'px'}}>
                        Lösung zum TSP. Hier werden
                        mehrere, auf einem <strong> Backend Java-Server </strong> laufende, Algorithmen verwendet, 
                        welche auf einer mit <strong> HTML, Bootstrap </strong> und <strong> CSS </strong> wundervoll 
                        gestalteten Website mit <strong> Javascript </strong> abgerufen werden.
                    </p>

                    <div className="linkDiv">
                        <a 
                            href="http://paketdienst.tk"
                            className="link">
                            Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel1