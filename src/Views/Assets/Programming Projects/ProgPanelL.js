import React from 'react'
import '../../../style/panel/Panel.css'
import {isMobile} from 'react-device-detect';

function PanelL(props){

    const maxHeight = isMobile ? props.obj.maxHeightMobile : props.obj.maxHeightPc;

    return(
        <div style={{paddingTop: 50, paddingBottom: 50}}>
            <div className="panelParent" style={{marginTop: 10}}>
                
                <img
                    id="img"
                    alt=""
                    className="img"
                    style={{maxHeight: maxHeight + "px"}}
                    src={props.obj.imgSrc}
                >
                </img>

                <div id="textDiv" className="textDiv">
                    <p 
                        className="title">
                        {props.obj.title}
                    </p>
                    
                    <p
                        id="projectText" className="text">
                        {props.obj.text.map((element) => {return(element)})}
                    </p>

                    <div className="linkDiv">
                        <a 
                            href={props.obj.href}
                            className="link">
                            Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelL