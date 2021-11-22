import styles from '../styles/Layout.module.scss'

export default function Hero() {
  return (
    
      

      <main className={styles.hero}>
       <h1>“Hope of a Nation” </h1> 
      <video 
      src="video/final2014.mp4"  
      autoPlay
      muted={true}  
      loop={true}
      id="myVideo" >
      
      </video>
        
      </main>

      
  )
}