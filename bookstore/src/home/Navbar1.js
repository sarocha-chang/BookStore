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
                        <li><Link to="/Cart" className="cart">
                            <box-icon name="shopping-bag" color="#fff"></box-icon>
                        </Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
