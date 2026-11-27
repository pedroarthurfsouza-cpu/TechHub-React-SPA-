import React from 'react'
import styles from './Cards.module.css'

function Cards({ imagem, titulo, descricao }) {
    return (
        <article className={styles.card}>
            <img src={imagem} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </article>
    )
}

export default Cards