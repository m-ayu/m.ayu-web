import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atribuciones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Attribuciones
        </h1>
        <p>
          <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/mm.a.yu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.svg" alt="Logo Instagram m.ayu" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
