import React, { useState } from 'react';
import CSSTransitionGroup from 'react-transition-group/cjs/CSSTransition';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar/Sidebar';
import TopBar from './Topbar/TopBar';

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleShow = () => {
        setShowNav(true);
    };
    const handleHide = () => {
        setShowNav(false);
    };
    return (
        <nav>
            <div className="wrapper">
                <TopBar handleShow={handleShow} />
                <CSSTransitionGroup in={showNav} timeout={500} classNames="active" unmountOnExit>
                    <Sidebar showNav={showNav} />
                </CSSTransitionGroup>
            </div>
            <CSSTransitionGroup in={showNav} timeout={500} classNames="active">
                <div className={showNav ? 'overlay active' : 'overlay'} onClick={handleHide}></div>
            </CSSTransitionGroup>
        </nav>
    );
};

export default NavBar;
