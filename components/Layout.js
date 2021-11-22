import { Children } from 'react'
import { Navbar } from './Navbar'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <h1>
                 WPT-Cricket
            </h1>
            <h2>
                 -Road to the World-Cup-
            </h2>
             </div>
            <Navbar/>
            <main className={styles.main}>{children}</main>
            
      

      <footer className={styles.footer}>
         
      © Copyrights 2021
       
      </footer>
            
        </div>
    )
}

export default Layout