import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Pet from '../components/Pet'

export default function Pets() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pets
        </h1>
        <div className={styles.grid}>
          <Pet
            src="/pets/Aledsita.jpg"
            alt="Alexa da doga"
            subtitle="La Alexa"
            text="Es una shihuahua"
          />
          <Pet
            src="/pets/Nengo.jpg"
            alt="Nenguito"
            subtitle="Nengo"
            text="Hijo de Alexitaaa. Estaba chikito"
          />
          <Pet
            src="/pets/pou.jpg"
            alt="pouuuu"
            subtitle="Pou"
            text="Pou. De plastilina."
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
