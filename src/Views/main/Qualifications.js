import React from 'react'
import '../../style/qualifications/qualificationsStyle.css'

import {isMobile} from 'react-device-detect';

function Qualifications(){
    return(
        <div id="qualParent" className="parent" style={{marginTop: isMobile ? 120 : 20}}>
            <div id="infoContainer" className="infoContainer">
                <div 
                    id="imgContainer"
                    style={{width: isMobile ? 150 : 200}}
                >
                    <img 
                        id="personalImage" 
                        className="img"
                        style={{width: isMobile ? 150 : 200, height: isMobile ? 150 : 200}} 
                        src="https://cdn.discordapp.com/attachments/806161925163581531/815648116119306241/unknown.png"></img>
                    <p id="name">Daniel Bosin</p>
                </div>
            </div>
        </div>
    )
}

export default Qualifications