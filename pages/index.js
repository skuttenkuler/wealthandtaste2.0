import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { SiteNav } from '../components/Navbar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wealth & Taste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      </main>
     <Footer/>
    </div>
  )
}
