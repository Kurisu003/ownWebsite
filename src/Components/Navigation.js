import React, {useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Transition} from 'react-spring/renderprops'
import NavigationMenu from './NavigationMenu';

function Navigation(){
    const [showMenu, setShowMenu] = useState(false);

    return(
        <nav>

            {/* black fade in background
            <Transition
                items={showMenu}
                from={{position: 'absolute', opacity: 0}}
                enter={{ opacity: 0.5}}
                leave={{ opacity: 0}}>
                {showMenu => showMenu && (props =>
                    <div
                        style={props} className="position-absolute top-0 start-0 h-100 w-100 bg-dark"
                        onClick={() => setShowMenu(false)}
                    >
                    </div>)}
            </Transition>

            Menu
            <Transition
                items={showMenu}
                from={{ opacity: 0,transform: 'translateX(-100%)'}}
                enter={{ opacity: 1, transform: 'translateX(100%)'}}
                leave={{ opacity: 0, transform: 'translateX(-100%)'}}>
                {showMenu => showMenu && (props =>
                    <div
                        className="position-absolute top-0 start-0 h-100 w-75 shadow-lg p-3 mb-5 rounded"
                        style={{backgroundColor: "#181726"}}
                    >
                    <span
                        className="text-light"
                        style={{fontSize: 30}}
                    >
                        PK Sterzing
                    </span>

                    <NavigationMenu
                        closeMenu={() => setShowMenu(false)}
                    />

                    </div>)}
            </Transition>

            <span className="d-flex justify-content-end mr-4 display-3">
                <FontAwesomeIcon
                    style={{filter: 'invert(1)'}}
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span> */}
        </nav>
    )
}

export default Navigation