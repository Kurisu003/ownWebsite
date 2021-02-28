import React from 'react'
import '../../style/panel/Panel.css'
import {isMobile} from 'react-device-detect';

function Panel2R(){

    const topMargin = isMobile ? 120 : 10;
    const maxHeight = isMobile ? 400 : 500;
    const maxWidth = isMobile ? 240 : 300;
    const textTopMargin = isMobile ? 20 : 0;
    const windowWidth = window.innerWidth 

    console.log(windowWidth)
    if(!isMobile && windowWidth >= 961){
    return(
        <div style={{marginBottom: 50}}>
            <div className="panelParent" style={{marginTop: 10}}>

                <div id="textDiv" className="textDiv">
                    <p 
                        className="title">
                        Gutschein Generator
                    </p>
                    
                    <p
                        id="projectText" className="text"  style={{marginTop: textTopMargin + 'px'}}>
                        Ein Generator für Gutscheine mit <strong> QR-Code Generierung </strong> und Bildüberlagerung. 
                        2 Varianten, in <strong> Python </strong> und in <strong> Java </strong>
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
                    src="https://cdn.discordapp.com/attachments/814271639122477107/815514477528612914/TagesKarteVorlage.png"
                >
                </img>
            </div>
        </div>
    )}
    return(
        <div style={{marginBottom: 50}}>
            <div className="panelParent" style={{marginTop: 10}}>
                
                <img
                    id="img"
                    className="img"
                    style={{maxHeight: maxHeight + "px", maxWidth: maxWidth + 'px'}}
                    src="https://cdn.discordapp.com/attachments/814271639122477107/815514477528612914/TagesKarteVorlage.png"
                >
                </img>

                <div id="textDiv" className="textDiv">
                    <p 
                        className="title">
                        Gutschein Generator
                    </p>
                    
                    <p
                        id="projectText" className="text"  style={{marginTop: textTopMargin + 'px'}}>
                        Ein Generator für Gutscheine mit <strong> QR-Code Generierung </strong> und Bildüberlagerung. 
                        2 Varianten, in <strong> Python </strong> und in <strong> Java </strong>
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

export default Panel2R