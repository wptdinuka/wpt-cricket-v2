import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'

function Live( {live} ) {

  console.log(live)
  return (
    <div className={styles.container}>
      <Head>
        <title>Live</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Live
        </h1>

        <video 
      src="video/uc.mp4"  
      autoPlay
      muted={true}  
      loop={true}
      id="myVideo" >
      
      </video>
        
      </main>

    
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://cricket-live-data.p.rapidapi.com/match/2576703", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
      "x-rapidapi-key": "2ddc4c8cb4msh0c9e366b10869f2p1df196jsn9f56ebef905e"
    }
  })
  
  const live = await res.json()
  return {
    props: {
      live
    }
  }
}


export default Live