import React from 'react'

//Used to change color of header elements when navigated
//to with buttons
export default function naviColorClickHandler(setterId){

        // console.log(callerId, setterId)

        let primColor = 'white';
        let secColor  = '#1B8BC9';

        // resets all buttons and only changes the color of the neccesary one
        document.getElementById('homePc').style.color = primColor;
        document.getElementById('projectsPc').style.color = primColor;
        document.getElementById('contactPc').style.color = primColor;
        document.getElementById('qualificationsPc').style.color = primColor;

        document.getElementById('homeMobile').style.color = primColor;
        document.getElementById('projectsMobile').style.color = primColor;
        document.getElementById('contactMobile').style.color = primColor;
        document.getElementById('qualificationsMobile').style.color = primColor;

        
        document.getElementById(setterId + 'Pc').style.color = secColor;
        document.getElementById(setterId + 'Mobile').style.color = secColor;
    }