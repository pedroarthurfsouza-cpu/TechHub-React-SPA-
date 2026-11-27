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
                        <td>Preencher</td>
                        <td>Preencher</td>
                        <td>Preencher</td>
                        <td>Preencher</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default About