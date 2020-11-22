import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          m.ayu
        </h1>

        <p>Dibujo de la semana:</p>
        <p>
          <img
            style={{ width: "100%" }}
            src="/dibujos/ibuki.png"
            alt="Ibuki Fanart" />
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/mm.a.yu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ paddingRight: 5 }}
            src="/instagram.svg"
            alt="Logo Instagram m.ayu"
            className={styles.logo} />
          Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UCA7lu2Bat3MK9ficXdM46ww
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ paddingRight: 5 }}
            src="/youtube.svg"
            alt="Logo YouTube m.ayu"
            className={styles.logo} />
          YouTube
        </a>
        <a style={{ paddingLeft: 20 }} href="/attr"><small>Atribuciones</small></a>
      </footer>
    </div>
  )
}
