import React from 'react'
import styles from './About.module.css'

function About() {
    return (
        <main className={styles.about}>
            <table className={styles.activityTable}>
                <thead>
                    <tr>
                        <th>Autor</th>
                        <th>Data da atividade</th>
                        <th>Matéria</th>
                        <th>Tecnologias usadas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pedro Arthur</td>
                        <td>27 de Novembro de 2026</td>
                        <td>Desenvolvimento Web</td>
                        <td>React, JavaScript, CSS</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default About