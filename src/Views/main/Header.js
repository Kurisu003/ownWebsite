import React from 'react'

import '../../style/Header/MobilHeader.css'
import '../../style/Header/PcHeader.css'
import '../../style/Header/Header.css'
import TopRoundPart from '../Assets/TopRoundPart'

import { Link } from "react-router-dom"

import { List } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function HeaderCopy(){

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const Menu = isMenuOpen ? X : List;

    async function menuClickHandler(){
        document.getElementById("Menu").style.animation = `spin ${0.1}s linear infinite`;
        await sleep(100);
        setIsMenuOpen(!isMenuOpen);
    }

    function clickHandler(attr){

        let primColor = 'white';
        let secColor  = '#1B8BC9';

        setIsMenuOpen(false)
        // resets all buttons and only changes the color of the neccesary one
        document.getElementById('homePc').style.color = primColor;
        document.getElementById('projectsPc').style.color = primColor;
        document.getElementById('contactPc').style.color = primColor;
        document.getElementById('qualificationsPc').style.color = primColor;

        document.getElementById('homeMobile').style.color = primColor;
        document.getElementById('projectsMobile').style.color = primColor;
        document.getElementById('contactMobile').style.color = primColor;
        document.getElementById('qualificationsMobile').style.color = primColor;

        switch(attr){
            case 'homePc' : document.getElementById(attr).style.color = secColor; break;
            case 'projectsPc' : document.getElementById(attr).style.color = secColor; break;
            case 'contactPc' : document.getElementById(attr).style.color = secColor; break;
            case 'qualificationsPc' : document.getElementById(attr).style.color = secColor; break;
            
            case 'homeMobile' : document.getElementById(attr).style.color = secColor; break;
            case 'projectsMobile' : document.getElementById(attr).style.color = secColor; break;
            case 'contactMobile' : document.getElementById(attr).style.color = secColor; break;
            case 'qualificationsMobile' : document.getElementById(attr).style.color = secColor; break;
        }
    }


    return(
        <div id='headerWrapper'>

            <div id='navPc' className='navBar'>
                <div>
                    <div
                        className="header" style={{width:'100%'}}>
                    <div>
                    <img className="logo" alt=""
                            src="https://cdn.discordapp.com/attachments/806161925163581531/815674562330755153/HuskyLogo.png"></img>
                    </div>


                    <div
                        className="navigationParentDiv">

                        <div
                            className="navigationDiv">

                            <Link
                                to="/Home"
                                className="noUnderline blueOnHover"
                            >

                                <p
                                    className="navButton blueOnHover"
                                    id="homePc"
                                    onClick={ () => clickHandler('homePc')}>
                                    Home
                                </p>

                            </Link>
                        </div>

                        <div
                            className="navigationDiv">
                            <Link
                                to="/Projects"
                                className="noUnderline blueOnHover"
                            >

                                <p
                                    className="navButton blueOnHover"
                                    id="projectsPc"
                                    onClick={ () => clickHandler('projectsPc')}>
                                    Projekte
                                </p>

                            </Link>
                        </div>

                        <div
                            className="navigationDiv">

                            <Link
                                to="/Qualifications"
                                className="noUnderline blueOnHover"
                            >

                                <p
                                    className="navButton blueOnHover"
                                    id="qualificationsPc"
                                    onClick={ () => clickHandler('qualificationsPc')}>
                                    Qualifikationen
                                </p>

                            </Link>
                        </div>

                        <div
                            className="navigationDiv">

                            <Link
                                to="/Contact"
                                className="noUnderline blueOnHover"
                            >

                                <p
                                    className="navButton blueOnHover"
                                    id="contactPc"
                                    onClick={ () => clickHandler('contactPc')}>
                                    Kontakt
                                </p>

                            </Link>
                        </div>
                    </div>

                    <div></div>

                    </div>
                    <TopRoundPart></TopRoundPart>
                </div>
            </div>


            {/* Mobile Version */}
            <div id='navMobile' className='navBar'>
                <div style={{marginBottom: 100, width: '100vw'}}>
                    <div
                        id="leftCircle"
                        className="leftCircle"
                    >
                        &nbsp;
                    </div>
                    <div
                        id="middleStrip"
                        className="middleStrip"
                    >
                        &nbsp;
                    </div>
                    <div
                        id="rightStrip"
                        className="rightStrip"
                    >
                        &nbsp;
                    </div>
                    <div
                        id="rightCircle"
                        className="rightCircle"
                    >
                        &nbsp;
                    </div>

                    <div
                        className="homeParent">

                        <img
                            className="newLogo"
                            src="https://cdn.discordapp.com/attachments/806161925163581531/815674562330755153/HuskyLogo.png"></img>

                        {/* Displays Menu in the middle aka. actual Menu part */}
                        <div
                            id="nav"
                            className={isMenuOpen ? "open" : ""}>

                            <Link
                                to="/Home"
                                className="noUnderline blueOnHover"
                                onClick={ () => clickHandler('homeMobile')}
                            >
                                <div
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p
                                        className="MenuPointText"
                                        id="homeMobile"
                                    >
                                        Home
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Projects"
                                className="noUnderline blueOnHover"
                                onClick={ () => clickHandler('projectsMobile')}
                            >
                                <div
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p
                                        className="MenuPointText"
                                        id="projectsMobile">
                                        Projects
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Qualifications"
                                className="noUnderline blueOnHover"
                                onClick={ () => clickHandler('qualificationsMobile')}
                            >

                                <div
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p
                                        className="MenuPointText"
                                        id="qualificationsMobile">
                                        Qualifications
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Contact"
                                className="noUnderline blueOnHover"
                                onClick={ () => clickHandler('contactMobile')}
                            >
                                <div
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p
                                        className="MenuPointText"
                                        id="contactMobile">
                                        Contact
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div id='overlay'>
                            <Menu
                                id="Menu"
                                color="black"
                                size={80}
                                onClick={ () => menuClickHandler()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCopy