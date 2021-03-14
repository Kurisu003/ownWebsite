import React from 'react'
import '../../../style/panel/Panel.css'
import {isMobile} from 'react-device-detect';

function PanelR(props){

    const maxHeight = isMobile ? props.obj.maxHeightMobile : props.obj.maxHeightPc;
    const maxWidth = isMobile ? props.obj.maxWidthMobile : props.obj.maxWidthPc;
    const textTopMargin = isMobile ? 20 : 0;
    console.log(props.obj.maxWidthMobile)

    return(
        <div style={{paddingTop: 50, paddingBottom: 50}}>
            <div className="panelParent" style={{marginTop: 10}}>
                
                <img
                    id={'Panel' + props.obj.idNum + 'ImgMobile'}
                    className="img"
                    style={{maxHeight: maxHeight + "px", maxWidth: maxWidth + 'px'}}
                    src={props.obj.imgSrc}
                >
                </img>

                <div id="textDiv" className="textDiv">
                    <p 
                        className="title">
                        Gutschein Generator
                    </p>
                    
                    <p
                        id="projectText" className="text"  style={{marginTop: textTopMargin + 'px'}}>
                        {props.obj.text.map((element) => {return(element)})}
                    </p>

                    <div className="linkDiv">
                        <a 
                            href={props.obj.href}
                            className="link">
                            Git-Hub
                        </a>
                    </div>
                </div>

                <img
                    id={'Panel' + props.obj.idNum + 'ImgPc'}
                    className="img"
                    style={{maxHeight: maxHeight + "px", maxWidth: maxWidth + 'px'}}
                    src={props.obj.imgSrc}
                >
                </img>
            </div>
        </div>
    )
}

export default PanelR