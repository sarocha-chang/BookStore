import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar1() {
    return (
        <>
            <header>
                <h3><a href="#">CHACHAX</a></h3>
                <nav>
                <Link to={localStorage.getItem("username") ? '#':'/login' }    className="login" >
          {localStorage.getItem("username") ?localStorage.getItem("username"):'เข้าสู่ระบบ' }   
          </Link>
                </nav>
            </header>
        </>
    )
}
