import React from 'react'
import '../style/style.css'
import { Link } from "react-router-dom"


function Header(){

    function clickHandler(attr){
        console.log(attr)
        //resets all buttons and only changes the color of the neccesary one
        document.getElementById('home').style.color = '#023A51';
        document.getElementById('projects').style.color = '#023A51';
        document.getElementById('contact').style.color = '#023A51';
        document.getElementById('qualifications').style.color = '#023A51';

        switch(attr){
            case 'home' : document.getElementById('home').style.color = '#00B7EF'; break;
            case 'projects' : document.getElementById('projects').style.color = '#00B7EF'; break;
            case 'contact' : document.getElementById('contact').style.color = '#00B7EF'; break;
            case 'qualifications' : document.getElementById('qualifications').style.color = '#00B7EF'; break;
        }

    }

    return(
        <div className="header">

            <div>
               <img  className="logo"
                    alt=""
                    src="https://cdn.discordapp.com/attachments/613625981219110914/814779524968611850/WebHusky.png"></img>
            </div>


            <div className="navigationParentDiv">

                <div className="navigationDiv">
                    <Link
                        to="/Home"
                        className="noUnderline blueOnHover"
                    >

                        <p className="navButton"
                        id="home"
                        onClick={ () => clickHandler('home')}>
                            Home
                        </p>

                    </Link>
                </div>

                <div className="navigationDiv">
                    <Link
                        to="/Projects"
                        className="noUnderline blueOnHover"
                    >

                        <p className="navButton"
                        id="projects"
                        onClick={ () => clickHandler('projects')}>
                            Projekte
                        </p>

                    </Link>
                </div>

                <div className="navigationDiv">
                    <Link
                        to="/Qualifications"
                        className="noUnderline blueOnHover"
                    >

                        <p className="navButton"
                        id="qualifications"
                        onClick={ () => clickHandler('qualifications')}>
                            Qualifikationen
                        </p>

                    </Link>
                </div>

                <div className="navigationDiv">
                    <Link
                        to="/Contact"
                        className="noUnderline blueOnHover"
                    >

                        <p className="navButton"
                        id="contact"
                        onClick={ () => clickHandler('contact')}>
                            Kontakt
                        </p>

                    </Link>
                </div>
            </div>

            <div className="linkTree">
                <Link
                    to="/Linktree"
                    className="noUnderline blueOnHover"
                >

                    <p className="navButton">
                        Linktree
                    </p>

                </Link>
            </div>

        </div>
    )
}

export default Header


