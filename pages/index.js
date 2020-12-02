import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

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
  
      <a
        href="/pets"
      > <img
            style={{ width: "100%" }}
            src="/pets/banner.png"
            alt="Banner" /> 
      </a>

      <Footer />
    </div>
  )
}
