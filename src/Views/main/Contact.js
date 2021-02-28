import React from 'react'
import '../../style/contact/contactStyle.css'

import {isMobile} from 'react-device-detect';

import { Envelope } from 'react-bootstrap-icons';
import { Telephone } from 'react-bootstrap-icons';

function Contact(){
    return(
        <div 
            id="parent"
            className="parent"
            style={{marginTop: isMobile ? 120 : 20}}
        >
        
            <div 
                id="infoContainer" 
                className="infoContainer" 
                style={{height: 'auto'}}
            >
                <div 
                    id="imgContainer"
                    style={{width: isMobile ? 150 : 200}}
                >
                    <img 
                        id="personalImage" 
                        className="img"
                        style={{width: isMobile ? 150 : 200, height: isMobile ? 150 : 200}} 
                        src="https://cdn.discordapp.com/attachments/806161925163581531/815648116119306241/unknown.png"></img>
                    
                    <p 
                        id="name"
                    >
                        Daniel Bosin
                    </p>

                </div>

                <div 
                    id="textDiv"
                >
                    <p 
                        id="title"
                        className="text"
                    >
                        Fragen?
                    </p>
                    
                    <p 
                        id="text"
                        className="text"
                    >
                        Melde dich jederzeit bei mir.
                    </p>

                </div>

                <div 
                    id="textDiv"
                >
                    
                    <div 
                        id="contactEmail"
                        className="contactButton text"
                    >
                        
                        <Envelope 
                            id="Menu" 
                            color="white" 
                            size={30}
                        />

                        <a 
                            style={{paddingLeft: 5}}
                        >
                            E-Mail
                        </a>
                    
                    </div>

                    <div 
                        id="contactEmail"
                        className="contactButton text"
                    >

                        <Telephone 
                            id="Menu"
                            color="white"
                            size={30}
                        />

                        <a 
                            style={{paddingLeft: 5}}
                        >
                            Phone
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact