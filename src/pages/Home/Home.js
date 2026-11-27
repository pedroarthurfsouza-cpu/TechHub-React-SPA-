import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <main className={styles.home}>
            <Link className={styles.newsLink} to="/news">Notícias Tech</Link>
        </main>
    )
}

export default Home