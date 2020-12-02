import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer.js'

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

      <Footer />
    </div>
  )
}
