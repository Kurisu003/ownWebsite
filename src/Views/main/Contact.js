import React from 'react'
import '../../style/contact/contactStyle.css'

import {isMobile} from 'react-device-detect';

import { Envelope } from 'react-bootstrap-icons';
import { Telephone } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';

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
                        alt=""
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
                        Melde dich jederzeit bei mir. Jetzt auch auf Whatsapp.
                    </p>
                    
                    <p 
                        id="text"
                        className="text"
                    >
                       +39 334 5856711
                    </p>
                    
                    <p 
                        id="text"
                        className="text"
                    >
                       dani003@outlook.com
                    </p>

                </div>

                <div 
                    id="textDiv"
                >
                    
                    <a 
                        id="contactButton"
                        className="contactButton text"
                        href="mailto:dani003@outlook.com"
                    >
                        
                        <Envelope 
                            id="Icon" 
                            size={30}
                        />

                        <a
                            className='innerLink'
                            href="mailto:dani003@outlook.com"
                        >
                            E-Mail
                        </a>
                    
                    </a>

                    <a 
                        id="contactButton"
                        className="contactButton text"
                        href="tel:00393345856711"
                    >

                        <Telephone 
                            id="Icon"
                            size={30}
                        />

                        <a 
                            className='innerLink'
                            href="tel:00393345856711"
                        >
                            Phone
                        </a>
                        
                    </a>

                    <a 
                        id="contactButton"
                        className="contactButton text"
                        href="https://www.instagram.com/fusteam/"
                        target="_blank"
                    >

                        <Instagram 
                            id="Icon"
                            size={30}
                        />

                        <a 
                            className='innerLink'
                            href="https://www.instagram.com/fusteam/"
                            target="_blank"
                        >
                            Instagram
                        </a>
                        
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact