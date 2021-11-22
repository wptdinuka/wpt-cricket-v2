import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'

function Players() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WPT-Cricket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Players
        </h1>

        <ul className={styles.playerlist}>
          <li className={styles.card}>
            <Image 
            src="/images/p1.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>KUSAL PERERA</h2>
            <h3>KEEPER/BATSMEN</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p2.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>PATHUM NISSANKA</h2>
            <h3>BATSMEN</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p3.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>CHARITH ASALANKA</h2>
            <h3>BATSMEN</h3>
          </li>
          <li className={styles.card}> 
            <Image 
            src="/images/p4.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>BHANUKA RAJAPAKSA</h2>
            <h3>BATSMEN</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p5.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>AVISHKA FERNANDO</h2>
            <h3>BATSMEN</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p6.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>WANINDU HASARANGA</h2>
            <h3>ALL-ROUNDER</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p7.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>DASUN SHANAKAE</h2>
            <h3>ALL-ROUNDER</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p8.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>CHAMIKA KARUNARATNE</h2>
            <h3>ALL-ROUNDER</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p9.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>DUSHMANTHA CHAMEERA</h2>
            <h3>BOWLER</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p10.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>MAHEESH THEEKSHANA</h2>
            <h3>BOWLER</h3>
          </li>
          <li className={styles.card}>
            <Image 
            src="/images/p11.jpg"
            width="200px"
            height="200px"
            layout="fixed" 
            alt="" />
            <h2>LAHIRU KUMARA</h2>
            <h3>BOWLER</h3>
          </li>
        </ul>

        
      </main>

    
    </div>
  )
}


export default Players