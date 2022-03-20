//import {Nav} from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
//import { AiOutlineHome, IoMenu } from 'react-icons/fa';
import "./Nav.css"

function Nav() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            return
        }
        setIsExpanded(true);
    };

    return (
            <nav className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
                <ul className="nav flex-column align-items-start">
                    <button className="btn btn-primary" onClick={handleToggler}><i className="bi bi-list"></i></button>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#"><i className="bi bi-house-door"></i><span className="nav-text"> Home</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portofolio"><i className="bi bi-window-stack"></i><span className="nav-text"> Portofolio </span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact"><i className="bi bi-person-lines-fill"></i><span className="nav-text"> Contact Me</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><i className="bi bi-file-earmark-person"></i><span className="nav-text"> My Resume</span></a>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;