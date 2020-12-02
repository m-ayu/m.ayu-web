import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/Footer'
import ArtCard from '../../components/ArtCard'

export default function A2019() {
  return (
    <div className={styles.container}>
      <Head>
        <title>m.ayu 2019</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          2019
        </h1>

        <div className={styles.grid}>

          <ArtCard
            style={{ width: '100%' }}
            src="/dibujos/ibuki.png"
            alt="Ibuki Fanart"
            title="Ibuki Fanart"
            text="Descripcion aca de debe poner"
          />
        </div>

      </main>

      <Footer />
    </div>
  )
}
