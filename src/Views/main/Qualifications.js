import React from 'react'
import '../../style/qualifications/qualificationsStyle.css'

import CLogo from '../Assets/Svgs/C.svg'

function Qualifications(){

    const [isPanelOpen, setIsPanelOpen] = React.useState(false);
    
    //used for expansion animation
    function expansionHandler(attr){

        setIsPanelOpen(!isPanelOpen)

        document.getElementById(attr).style.transition = "all 1s, borderadius 0s";
        if(isPanelOpen){
            document.getElementById(attr + 'Content').style.transition = "all 1s ease 0s"

            document.getElementById(attr).style.maxWidth = "80%"
            document.getElementById(attr).style.width = "80%"
            document.getElementById(attr).style.borderBottomLeftRadius = "0px"
            document.getElementById(attr).style.borderBottomRightRadius = "0px"
            
            document.getElementById(attr + 'Content').style.height = "300px"
            document.getElementById(attr + 'Content').style.maxWidth = "80%"
            document.getElementById(attr + 'Content').style.width = "80%"
            document.getElementById(attr + 'Content').style.borderBottomLeftRadius = "10px"
            document.getElementById(attr + 'Content').style.borderBottomRightRadius = "10px"
            
            document.getElementById(attr + 'ContentElement').style.display = "inline-flex"
            document.getElementById(attr + 'ContentElement2').style.display = "inline-flex"
            document.getElementById(attr + 'ContentElement3').style.display = "inline-flex"

            document.querySelector('#' + attr + 'Content').addEventListener('transitionend', () => {
                if(document.getElementById(attr + 'Content').style.height !== "0px"){
                    console.log('Animation ended');
                    document.getElementById(attr + 'ContentButton').style.display = "flex"
                    document.getElementById(attr + 'ContentButton2').style.display = "flex"
                    document.getElementById(attr + 'ContentButton3').style.display = "flex"
                }
            });

        }
        else{
            document.getElementById(attr + 'Content').style.transition = "all 1.13s"

            document.getElementById(attr).style.maxWidth = "200px"
            document.getElementById(attr).style.borderBottomLeftRadius = "10px"
            document.getElementById(attr).style.borderBottomRightRadius = "10px"

            // document.getElementById(attr + 'Content').style.height = "0px"
            document.getElementById(attr + 'Content').style = "height: 0px"
            document.getElementById(attr + 'Content').style.width = "0px"
            document.getElementById(attr + 'Content').style.borderBottomLeftRadius = "0px"
            document.getElementById(attr + 'Content').style.borderBottomRightRadius = "0px"

            document.getElementById(attr + 'ContentElement').style.display = "none"
            document.getElementById(attr + 'ContentElement2').style.display = "none"
            document.getElementById(attr + 'ContentElement3').style.display = "none"

            
            document.getElementById(attr + 'ContentButton').style.display = "none"
            document.getElementById(attr + 'ContentButton2').style.display = "none"
            document.getElementById(attr + 'ContentButton3').style.display = "none"

        }
    }

    return(
        <div>
            <div>
                <div 
                    className='QualificationsButton'
                    id='C'
                    onClick={() => expansionHandler('C')}
                    >
                    <img src={CLogo} alt='C logo' style={{width: 50, marginLeft: 20}}/>
                    <p className='QualificationButtonTitle'>
                        C
                    </p>
                </div>

                <div
                    id='CContent'
                    className='QualificationsContent'
                >
                    <div id='CContentElement' className='QualificationsContentElement'>
                        <p 
                            id='CContentText'
                            className='QualificationsContentText'
                        >
                            Eigene Shell
                        </p>
                        <a 
                            id='CContentButton'
                            className='QualificationsContentButton'
                            href='https://github.com'
                        >
                            Github
                        </a>
                    </div>

                    <br></br>
                    
                    <div id='CContentElement2' className='QualificationsContentElement'>
                        <p 
                            id='CContentText'
                            className='QualificationsContentText'
                        >
                            Sortier Algorithmen
                        </p>
                        <a 
                            id='CContentButton2'
                            className='QualificationsContentButton'
                            href='https://github.com'
                        >
                            Github
                        </a>
                    </div>

                    <br></br>
                    
                    <div id='CContentElement3' className='QualificationsContentElement'>
                        <p 
                            id='CContentText3'
                            className='QualificationsContentText'
                        >
                            Binary-Search-Tree
                        </p>
                        <a 
                            id='CContentButton3'
                            className='QualificationsContentButton'
                            href='https://github.com'
                        >
                            Github
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Qualifications