import React from 'react'

import '../../style/Header/MobilHeader.css'
import '../../style/Header/PcHeader.css'
import '../../style/Header/Header.css'
import TopRoundPart from '../Assets/TopRoundPart'
import {isMobile} from 'react-device-detect';

import { Link } from "react-router-dom"

import { List } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function HeaderCopy(){
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const Menu = isMenuOpen ? X : List;
    const windowWidth = window.innerWidth 

    async function menuClickHandler(){
        document.getElementById("Menu").style.animation = `spin ${0.1}s linear infinite`;
        await sleep(100);
        setIsMenuOpen(!isMenuOpen);
    }

    function clickHandler(attr, platform){
        
        let primColor = 'black';
        let secColor  = '#023A51';
        
        if(platform === 'pc'){
            primColor = '#023A51';
            secColor = '#00B7EF';
        }
        // resets all buttons and only changes the color of the neccesary one
        document.getElementById('home').style.color = primColor;
        document.getElementById('projects').style.color = primColor;
        document.getElementById('contact').style.color = primColor;
        document.getElementById('qualifications').style.color = primColor;
        document.getElementById('linktree').style.color = primColor;
        
        switch(attr){
            case 'home' : document.getElementById('home').style.color = secColor; break;
            case 'projects' : document.getElementById('projects').style.color = secColor; break;
            case 'contact' : document.getElementById('contact').style.color = secColor; break;
            case 'qualifications' : document.getElementById('qualifications').style.color = secColor; break;
            case 'linktree' : document.getElementById('linktree').style.color = secColor; break;
        }
    }


    return(
        <div id='headerWrapper'>

            <div id='navPc' className='navBar'>
                <div>
                    <div 
                        className="header">
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
                                    id="home"
                                    onClick={ () => clickHandler('home', 'pc')}>
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
                                    id="projects"
                                    onClick={ () => clickHandler('projects', 'pc')}>
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
                                    id="qualifications"
                                    onClick={ () => clickHandler('qualifications', 'pc')}>
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
                                    id="contact"
                                    onClick={ () => clickHandler('contact', 'pc')}>
                                    Kontakt
                                </p>

                            </Link>
                        </div>
                    </div>

                    <div 
                        className="linkTree">

                        <Link
                            to="/Linktree"
                            className="noUnderline blueOnHover"
                        >

                            <p 
                                className="navButton blueOnHover"
                                id="linktree"
                                onClick={ () => clickHandler('linktree', 'pc')}>
                                Linktree
                            </p>

                        </Link>
                    </div>
                    </div>
                    <TopRoundPart></TopRoundPart>
                </div>
            </div>


            {/* Mobile Version */}
            <div id='navMobile' className='navBar'>
                <div style={{marginBottom: 100, width: '100%'}}>
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
                            >
                                <div 
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p 
                                        className="MenuPointText"
                                        id="home"
                                        onClick={ () => clickHandler('home')}
                                    >
                                        Home
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Projects"
                                className="noUnderline blueOnHover"
                            >
                                <div 
                                    className={isMenuOpen ? "MenuPoint" : "none"}>
                                        
                                    <p 
                                        className="MenuPointText"
                                        id="projects"
                                        onClick={ () => clickHandler('projects')}>
                                        Projects
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Qualifications"
                                className="noUnderline blueOnHover"
                            >

                                <div 
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p 
                                        className="MenuPointText"
                                        id="qualifications"
                                        onClick={ () => clickHandler('qualifications')}>
                                        Qualifications
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Contact"
                                className="noUnderline blueOnHover"
                            >
                                <div 
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p 
                                        className="MenuPointText"
                                        id="contact"
                                        onClick={ () => clickHandler('contact')}>
                                        Contact
                                    </p>
                                </div>
                            </Link>

                            <Link
                                to="/Linktree"
                                className="noUnderline blueOnHover"
                            >
                                <div 
                                    className={isMenuOpen ? "MenuPoint" : "none"}>

                                    <p 
                                        className="MenuPointText"
                                        id="linktree"
                                        onClick={ () => clickHandler('linktree')}
                                    >
                                        Linktree
                                    </p>
                                </div>
                            </Link>
                        </div>

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
    )
        /*return(
            <div style={{marginBottom: 100}}>
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

                    {/!* Displays Menu in the middle aka. actual Menu part*!/}
                    <div 
                        id="nav"
                        className={isMenuOpen ? "open" : ""}>
                        
                        <Link
                            to="/Home"
                            className="noUnderline blueOnHover"
                        >
                            <div 
                                className={isMenuOpen ? "MenuPoint" : "none"}>

                                <p 
                                    className="MenuPointText"
                                    id="home"
                                    onClick={ () => clickHandler('home')}
                                >
                                    Home
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/Projects"
                            className="noUnderline blueOnHover"
                        >
                            <div 
                                className={isMenuOpen ? "MenuPoint" : "none"}>
                                    
                                <p 
                                    className="MenuPointText"
                                    id="projects"
                                    onClick={ () => clickHandler('projects')}>
                                    Projects
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/Qualifications"
                            className="noUnderline blueOnHover"
                        >

                            <div 
                                className={isMenuOpen ? "MenuPoint" : "none"}>

                                <p 
                                    className="MenuPointText"
                                    id="qualifications"
                                    onClick={ () => clickHandler('qualifications')}>
                                    Qualifications
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/Contact"
                            className="noUnderline blueOnHover"
                        >
                            <div 
                                className={isMenuOpen ? "MenuPoint" : "none"}>

                                <p 
                                    className="MenuPointText"
                                    id="contact"
                                    onClick={ () => clickHandler('contact')}>
                                    Contact
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/Linktree"
                            className="noUnderline blueOnHover"
                        >
                            <div 
                                className={isMenuOpen ? "MenuPoint" : "none"}>

                                <p 
                                    className="MenuPointText"
                                    id="linktree"
                                    onClick={ () => clickHandler('linktree')}
                                >
                                    Linktree
                                </p>
                            </div>
                        </Link>
                    </div>

                    <Menu 
                        id="Menu"
                        color="black"
                        size={80}
                        onClick={ () => menuClickHandler()}
                    />

                </div>
            </div>
        )
    }
    return(
        <div>
        <div 
            className="header">
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
                        id="home"
                        onClick={ () => clickHandler('home', 'pc')}>
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
                        id="projects"
                        onClick={ () => clickHandler('projects', 'pc')}>
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
                        id="qualifications"
                        onClick={ () => clickHandler('qualifications', 'pc')}>
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
                        id="contact"
                        onClick={ () => clickHandler('contact', 'pc')}>
                        Kontakt
                    </p>

                </Link>
            </div>
        </div>

        <div 
            className="linkTree">

            <Link
                to="/Linktree"
                className="noUnderline blueOnHover"
            >

                <p 
                    className="navButton blueOnHover"
                    id="linktree"
                    onClick={ () => clickHandler('linktree', 'pc')}>
                    Linktree
                </p>

            </Link>
        </div>
        </div>
        <TopRoundPart></TopRoundPart>
    </div>
    )*/
}

export default HeaderCopy