import React from 'react'
import { Link } from "react-router-dom"
import home from '../pictures/Icons/home.png'
import about from '../pictures/Icons/about.png'

function NavigationMenu(props){
    return(
        <div
        >
            <ul>
                <li className="text-light"
                    style={{paddingTop: '10px', fontSize: 20}}>
                    <Link
                        to="/"
                        onClick={props.closeMenu}
                        className="text-light"
                    >
                        <img alt="" src={home} style={{height:'30px', marginRight: '10px', marginBottom: '10px'}}></img>
                        Home
                    </Link>
                </li>
                <li className="text-light"
                    style={{paddingTop: '10px', fontSize: 20}}>
                    <Link
                        to="/about"
                        onClick={props.closeMenu}
                        className="text-light"
                    >
                        <img alt="" src={about} style={{height:'30px', marginRight: '10px', marginBottom: '5px'}}></img>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu