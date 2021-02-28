import React from 'react'
import '../../style/panel/Panel.css'
import {isMobile} from 'react-device-detect';

function Panel4R(){

    const topMargin = isMobile ? 120 : 10;
    const maxHeight = isMobile ? 300 : 500;
    const maxWidth = isMobile ? 400 : 600;
    const textTopMargin = isMobile ? 20 : 0;
    const windowWidth = window.innerWidth 

    console.log(windowWidth)

    if(!isMobile && windowWidth >= 1264){
    return(
        <div style={{marginBottom: 50}}>
            <div className="panelParent" style={{marginTop: 10}}>

                <div id="textDiv" className="textDiv">
                    <p 
                        className="title">
                        Hamming-Code
                    </p>
                    
                    <p
                        id="projectText" className="text"  style={{marginTop: textTopMargin + 'px'}}>
                        Code zur Ausbesserung von Bitflips. Lange Version in <strong> Java </strong> und kurze
                        Version in <strong> Javascript </strong>
                    </p>

                    <div className="linkDiv">
                        <a 
                            href="http://paketdienst.tk"
                            className="link">
                            Git-Hub
                        </a>
                    </div>
                </div>
                 
                <img
                    id="img"
                    className="img"
                    style={{maxHeight: maxHeight + "px", maxWidth: maxWidth + 'px'}}
                    src="https://cdn.discordapp.com/attachments/814271639122477107/815518869367685130/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
                >
                </img>
            </div>
        </div>
    )}
    return(
        <div>
            <div className="panelParent" style={{marginTop: 10}}>
                
                <img
                    id="img"
                    className="img"
                    style={{maxHeight: maxHeight + "px", maxWidth: maxWidth + 'px'}}
                    src="https://cdn.discordapp.com/attachments/814271639122477107/815518869367685130/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
                >
                </img>

                <div id="textDiv" className="textDiv">
                    <p 
                        className="title">
                        Hamming-Code
                    </p>
                    
                    <p
                        id="projectText" className="text"  style={{marginTop: textTopMargin + 'px'}}>
                        Code zur Ausbesserung von Bitflips. Lange Version in <strong> Java </strong> und kurze
                        Version in <strong> Javascript </strong>
                    </p>

                    <div className="linkDiv">
                        <a 
                            href="http://paketdienst.tk"
                            className="link">
                            Git-Hub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel4R