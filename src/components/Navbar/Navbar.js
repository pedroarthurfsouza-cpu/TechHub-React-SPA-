import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <h1>TechHub</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar