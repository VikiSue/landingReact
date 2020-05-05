import React from "react";
import {LogoSVG} from "../../svg";


const Sidebar = ({showNav}) => {
    return (
        <ul className={showNav ? 'sidebar list-group list-group-flush active' : 'sidebar list-group list-group-flush'}>
            <li className="list-group-item">
                <LogoSVG />
            </li>
            <li className="list-group-item">
                <ul className="list-unstyled ">
                    <li className="active">
                        <a
                            href='#form'
                        >
                            About me
                        </a>
                    </li>

                    <li>
                        <a href='#form'>Relationships </a>
                    </li>
                    <li>
                        <a href='#form'>Users </a>
                    </li>
                    <li>
                        <a href='#form'>Sign Up </a>
                    </li>

                    <li>
                        <a href='#form'>Terms and Conditions</a>
                    </li>
                </ul>
            </li>
            <li className="list-group-item">
                <ul className="list-unstyled components">
                    <li className="active">
                        <a
                            href='#form'
                            data-toggle="collapse"
                            aria-expanded="true"
                        >
                            How it works
                        </a>
                    </li>

                    <li>
                        <a href='#form'>Partnership </a>
                    </li>
                    <li>
                        <a href='#form'>Help </a>
                    </li>
                    <li>
                        <a href='#form'>Leave testimonial</a>
                    </li>

                    <li>
                        <a href='#form'>Contact us</a>
                    </li>
                </ul>
            </li>
            <li className="list-group-item">
                <ul className="list-unstyled components">
                    <li className="active">
                        <a
                            href='#form'
                            data-toggle="collapse"
                            aria-expanded="true"
                        >
                            Articles
                        </a>
                    </li>

                    <li>
                        <a href='#form'>Articles </a>
                    </li>
                    <li>
                        <a href='#form'>Testimonials </a>
                    </li>
                    <li>
                        <a href='#form'>Licenses </a>
                    </li>

                    <li>
                        <a href='#form'>Privacy Policy</a>
                    </li>
                </ul>
            </li>
        </ul>
    )
};

export default Sidebar;

