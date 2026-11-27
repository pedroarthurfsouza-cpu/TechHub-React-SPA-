import React from 'react'
import imageCard01 from '../../assets/Image-card01.jpeg'
import imageCard03 from '../../assets/Image-card03.jpeg'
import imageCard04 from '../../assets/Image-card04.jpeg'
import styles from './News.module.css'
import Cards from '../../components/Cards/Cards'

function News() {
    return (
        <main className={styles.news}>
            <section className={styles.cardGrid} aria-label="Notícias de tecnologia">
                <Cards
                    titulo="CESUPA é hackeado e todos alunos são aprovados em Cálculo"
                    descricao="Instituição de ensino é hackeada e subtamente todos os aluno da matéria de Cálculo 1 são aprovados. A polícia suspeita do aluno Ricardo Kenji Hidaka, que é conhecido por suas habilidades em programação e hacking. A investigação está em andamento para determinar a extensão do ataque e identificar os responsáveis."
                    imagem={imageCard01}
                />

                <Cards
                    titulo="Grupo ATLAS vence 1º lugar em Hackathon de Segurança Cibernética"
                    descricao="O grupo ATLAS, formado por estudantes de tecnologia, conquistou o primeiro lugar em uma competição de segurança cibernética. Eles desenvolveram uma solução inovadora para proteger sistemas contra ataques de hackers."
                    imagem={imageCard04}
                />

                <Cards
                    titulo="Governo do Brasil é hackeado e envia alerta falso para celulares"
                    descricao="Instituição governamental é hackeada e envia alerta falso para celulares dos cidadãos. A investigação está em andamento para determinar a extensão do ataque e identificar os responsáveis."
                    imagem={imageCard03}
                />
            </section>
        </main>
    )
}

export default News
