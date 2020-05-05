import React from 'react';
import { LogoSVG, MenuSVG } from '../../svg';

const TopBar = ({ handleShow }) => {
    return (
        <div className="topBar fixed-top">
            <div className="container d-flex justify-content-between  navbar navbar-expand-md">
                <div className='topBar__logo'>
                    <a className="navbar-brand" href="#">
                        <LogoSVG />
                    </a>
                </div>
                <button type="button" onClick={handleShow} className="navbar-toggler">
                    <MenuSVG />
                </button>
                <div className="collapse navbar-collapse topBar__links'">
                    <ul className="navbar-nav">
                        <li className="nav-item active mr-5">
                            <a className="nav-link" href='#form'>
                                About me <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href='#form'>
                                Relationships
                            </a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href='#form'>
                                Requirements{' '}
                            </a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href='#form'>
                                Users
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#form'>
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
