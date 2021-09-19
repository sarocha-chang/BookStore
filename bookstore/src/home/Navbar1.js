import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar1() {
    return (
        <>
            <header>
                <h3><a href="#">CHACHAX</a></h3>
                <nav>
                    <ul class="nav-link">
                        <Link to="/Login"><li><a href="#">login</a></li></Link>
                        <li><a href="#">cart</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
