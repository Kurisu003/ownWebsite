import React from 'react'
import '../../style/panel/Panel.css'
import {isMobile} from 'react-device-detect';

function Panel3(){

    const topMargin = isMobile ? 120 : 10;
    const maxHeight = isMobile ? 300 : 500;
    const textTopMargin = isMobile ? 20 : 0;

    return(
        <div style={{paddingTop: 50, paddingBottom: 50}}>
            <div className="panelParent" style={{marginTop: 10}}>
                
                <img
                    id="img"
                    className="img"
                    style={{maxHeight: maxHeight + "px"}}
                    src="https://cdn.discordapp.com/attachments/814271639122477107/815518284761530368/unknown.png"
                >
                </img>

                <div id="textDiv" className="textDiv">
                    <p 
                        className="title">
                        Url Shortener
                    </p>
                    
                    <p
                        id="projectText" className="text"  style={{marginTop: textTopMargin + 'px'}}>
                        Url Shortener in <strong> Java </strong> mit <strong> Hashmaps </strong> und <strong>26<sup>4</sup>
                        möglichen Urls</strong>
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

export default Panel3