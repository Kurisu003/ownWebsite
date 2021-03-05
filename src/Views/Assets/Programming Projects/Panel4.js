import React from 'react'
import '../../../style/panel/Panel.css'
import {isMobile} from 'react-device-detect';

function Panel4L(){

    const maxHeight = isMobile ? 300 : 500;
    const maxWidth = isMobile ? 400 : 600;
    const textTopMargin = isMobile ? 20 : 0;

    
    return(
        <div style={{paddingTop: 50, paddingBottom: 50}}>
            <div className="panelParent" style={{marginTop: 10}}>
                
                <img
                    id="Panel4ImgMobile"
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

                <img
                    id="Panel4ImgPc"
                    className="img"
                    style={{maxHeight: maxHeight + "px", maxWidth: maxWidth + 'px'}}
                    src="https://cdn.discordapp.com/attachments/814271639122477107/815518869367685130/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
                >
                </img>
            </div>
        </div>
    )
}

export default Panel4L