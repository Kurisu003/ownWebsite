import React from "react";
import { useState } from "react";

function QPanel(props) {
    
    const [isOpen, setIsOpen] = useState(false)
    let classNameSuffix = ''
    if(isOpen){
        classNameSuffix = ' Extended'
    }
    else{
        classNameSuffix = ''
    }
    let imgsrc = require("../Svgs/" + props.logoName);

    return (
    <div style={{minHeight: 110}}>
        <div
            className={'QH' + (isOpen ? classNameSuffix + 'QH' : '')}
            onClick={() => setIsOpen(!isOpen)}
        >
        
        <img src={imgsrc.default} alt='logo' style={{width: 50, marginLeft: 20, userSelect: 'none', borderRadius: '20px'}}/>
            <p className='QHTitle'>
                {props.name}
            </p>
        </div>

        <div
            className={'QC' + (isOpen ? classNameSuffix + 'QC' : '')}
        >
        {props.buttonInfo.map(element => {
            return(
                <div
                    className={'QCE' + (isOpen ? classNameSuffix + 'QCE' : '')}
                >
                    
                    <p
                        className='QCText'
                    >
                        {element[0]}
                    </p>
                    <a
                        className={'QCB' + (isOpen ? classNameSuffix + 'QCB' : '')}
                        href={element[1]}
                    >
                        Github
                    </a>
                </div>
        )})}
        </div>
    </div>
    );
}


export default QPanel