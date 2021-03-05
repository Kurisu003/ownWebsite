import React from 'react'
import '../../style/qualifications/qualificationsStyle.css'

import {isMobile} from 'react-device-detect';

function Qualifications(){

    const [isPanelOpen, setIsPanelOpen] = React.useState(false);

    function expansionHandler(attr){

        // console.log(attr)
        setIsPanelOpen(!isPanelOpen)

        document.getElementById(attr).style.transition = "all 1s ease 0s";
        if(isPanelOpen){
            document.getElementById(attr + 'Content').style.transition = "all 1s ease 0s"

            document.getElementById(attr).style.maxWidth = "80%"
            document.getElementById(attr).style.borderBottomLeftRadius = "0px"
            document.getElementById(attr).style.borderBottomRightRadius = "0px"
            // document.getElementById(attr).style.height = "40px"
            // document.getElementById(attr + 'Content').style.display = "block"
            document.getElementById(attr + 'Content').style.height = "300px"
            document.getElementById(attr + 'Content').style.width = "80%"
            document.getElementById(attr + 'Content').style.borderBottomLeftRadius = "10px"
            document.getElementById(attr + 'Content').style.borderBottomRightRadius = "10px"
            
            document.getElementById(attr + 'ContentText').style.display = "block"
            // document.getElementById(attr + 'ContentText').style.setProperty('--animate-duration', '2s');
        }
        else{
            document.getElementById(attr + 'Content').style.transition = "all 1.13s ease 0s"

            document.getElementById(attr).style.maxWidth = "200px"
            document.getElementById(attr).style.borderBottomLeftRadius = "10px"
            document.getElementById(attr).style.borderBottomRightRadius = "10px"
            // document.getElementById(attr).style.height = "40px"
            // document.getElementById(attr + 'Content').style.display = "none"
            document.getElementById(attr + 'Content').style.height = "0px"
            document.getElementById(attr + 'Content').style.width = "0px"
            document.getElementById(attr + 'Content').style.borderBottomLeftRadius = "0px"
            document.getElementById(attr + 'Content').style.borderBottomRightRadius = "0px"

            document.getElementById(attr + 'ContentText').style.display = "none"
        }
    }

    return(
        <div>
            <div>
                <div 
                    className='QualificationsButton'
                    id='java'
                    onClick={() => expansionHandler('java')}
                    >
                    <p className='QualificationButtonTitle'>
                        Java
                    </p>
                </div>

                <div
                    id='javaContent'
                    className='QualificationsContent'
                >
                    <p 
                    id='javaContentText'
                    className='QualificationsContentText'>Some text</p>
                </div>
            </div>
        </div>
    )
}

export default Qualifications