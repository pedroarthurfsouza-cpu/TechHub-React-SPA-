import React from 'react'
import imageCard01 from '../../assets/Image-card01.jpeg'
import imageCard02 from '../../assets/Image-card02.jpeg'
import imageCard03 from '../../assets/Image-card03.jpeg'
import styles from './News.module.css'

const newsCards = [
    {
        title: 'CESUPA é hackeado e todos alunos são aprovados em Cálculo 1',
        image: imageCard01,
        description: 'Instituição de ensino é hackeada e subtamente todos os aluno da matéria de Cálculo 1 são aprovados. A polícia suspeita do aluno Ricardo Kenji Hidaka, que é conhecido por suas habilidades em programação e hacking. A investigação está em andamento para determinar a extensão do ataque e identificar os responsáveis.',
    },
    {
        title: 'Binance é hackeada e perde quadrilhões',
        image: imageCard02,
        description: 'A empresa de criptomoedas Binance é hackeada e perde quadrilhões em ativos digitais. A investigação está em andamento para determinar a extensão do ataque e identificar os responsáveis.',
    },
    {
        title: 'Governo do Brasil é hackeado e envia alerta falso para celulares',
        image: imageCard03,
        description: 'Instituição governamental é hackeada e envia alerta falso para celulares dos cidadãos. A investigação está em andamento para determinar a extensão do ataque e identificar os responsáveis.',
    },
]

function News() {
    return (
        <main className={styles.news}>
            <section className={styles.cardGrid} aria-label="Notícias de tecnologia">
                {newsCards.map((card, index) => (
                    <article className={styles.card} key={card.title}>
                        <h2>{card.title}</h2>
                        <img src={card.image} alt={`Imagem da notícia ${index + 1}`} />
                        <p>{card.description}</p>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default News
