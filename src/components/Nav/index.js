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
                <ul class="nav flex-column align-items-start">
                    <button className="btn btn-primary" onClick={handleToggler}><i class="bi bi-list"></i></button>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#"><i class="bi bi-house-door"></i><span className="nav-text"> Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-window-stack"></i><span className="nav-text"> Portofolio </span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-person-lines-fill"></i><span className="nav-text"> Contact Me</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="bi bi-file-earmark-person"></i><span className="nav-text"> My Resume</span></a>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;