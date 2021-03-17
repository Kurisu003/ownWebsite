import React from 'react'

import '../../style/Header/MobilHeader.css'
import '../../style/Header/PcHeader.css'
import '../../style/Header/Header.css'

import navColorClickHandler from '../../Components/clickHandler'
import TopRoundPart from '../Assets/Header/TopRoundPart'

import { Link } from "react-router-dom"

import { List } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';

//function to sleep passed amount of ms
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Header(){

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const Menu = isMenuOpen ? X : List;

    //used for spinning animation on mobile
    async function menuClickHandler(){
        document.getElementById("Menu").style.animation = `spin ${0.1}s linear infinite`;
        await sleep(100);
        setIsMenuOpen(!isMenuOpen);
    }

    

    //Used to color elements in header even if page is loaded directly
    document.addEventListener('readystatechange', event => { 
        // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
        if (event.target.readyState === "complete") {
            console.log('test')
            if(window.location.pathname.endsWith('Home')){
                document.getElementById('homePc').style.color = '#1B8BC9';
                document.getElementById('homeMobile').style.color = '#1B8BC9';
            }
            else if(window.location.pathname.endsWith('Projects')){
                document.getElementById('projectsPc').style.color = '#1B8BC9';
                document.getElementById('projectsMobile').style.color = '#1B8BC9';
            }
            else if(window.location.pathname.endsWith('Qualifications')){
                document.getElementById('qualificationsPc').style.color = '#1B8BC9';
                document.getElementById('qualificationsMobile').style.color = '#1B8BC9';
            }
            else if(window.location.pathname.endsWith('Contact')){
                document.getElementById('contactPc').style.color = '#1B8BC9';
                document.getElementById('contactMobile').style.color = '#1B8BC9';
            }
        }
    });
    

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
                                    onClick={ () => navColorClickHandler('home')}>
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
                                    onClick={ () => navColorClickHandler('projects')}>
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
                                    onClick={ () => navColorClickHandler('qualifications')}>
                                    Kompetenzen
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
                                    onClick={ () => navColorClickHandler('contact')}>
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
                            alt=""
                            src="https://cdn.discordapp.com/attachments/806161925163581531/815674562330755153/HuskyLogo.png"></img>

                        {/* Displays Menu in the middle aka. actual Menu part */}
                        <div
                            id="nav"
                            className={isMenuOpen ? "open" : ""}>

                            <Link
                                to="/Home"
                                className="noUnderline blueOnHover"
                                onClick={ () => {navColorClickHandler('home'); setIsMenuOpen(false)}}
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
                                onClick={ () => {navColorClickHandler('projects'); setIsMenuOpen(false)}}
                            >
                                <div
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p
                                        className="MenuPointText"
                                        id="projectsMobile">
                                        Projekte
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Qualifications"
                                className="noUnderline blueOnHover"
                                onClick={ () => {navColorClickHandler('qualifications'); setIsMenuOpen(false)}}
                            >

                                <div
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p
                                        className="MenuPointText"
                                        id="qualificationsMobile">
                                        Kompetenzen
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Contact"
                                className="noUnderline blueOnHover"
                                onClick={ () => {navColorClickHandler('contact'); setIsMenuOpen(false)}}
                            >
                                <div
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p
                                        className="MenuPointText"
                                        id="contactMobile">
                                        Kontakt
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

export default Header