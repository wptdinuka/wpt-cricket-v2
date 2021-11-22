import Link from 'next/link'
import styles from '../styles/Layout.module.scss'




export const Navbar = () => {

    

    return (

        
<div className={styles.navbarcontainer}>

<button className="btn btn-primary" 
        type="button" data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasRight" 
        aria-controls="offcanvasRight">
    
    <div className={styles.icon1} > ≡ </div> 
          
 </button>

<div className="offcanvas offcanvas-end" 
      tabIndex="-1" id="offcanvasRight" 
      aria-labelledby="offcanvasRightLabel">

  <div className="offcanvas-header">

  <h5 id="offcanvasRightLabel">WPT <br/> Cricket</h5>

<button type="button" className="btn-close text-reset" 
        data-bs-dismiss="offcanvas" aria-label="Close">
    <div className={styles.icon2} >  X  </div> 
   
</button>
 </div>

  <div className="offcanvas-body">
  <ul className={styles.nav}>
                <li className={styles.navitem} type="button"  
        data-bs-dismiss="offcanvas" aria-label="Close" >
                    <Link href='/' data-bs-dismiss="offcanvas" >Home</Link>
                </li>
                <li className={styles.navitem} type="button"  
        data-bs-dismiss="offcanvas" aria-label="Close" >
                    <Link href='/live'>Live Score</Link>
                </li>
                <li className={styles.navitem} type="button"  
        data-bs-dismiss="offcanvas" aria-label="Close" >
                    <Link href='/upcoming'>Fixtures</Link>
                </li>
                <li className={styles.navitem} type="button"  
        data-bs-dismiss="offcanvas" aria-label="Close" >
                    <Link href='/results'>Results</Link>
                </li>
                <li className={styles.navitem} type="button"  
        data-bs-dismiss="offcanvas" aria-label="Close" >
                    <Link href='/players'>Players</Link>
                </li>
                <li className={styles.navitem} type="button"  
        data-bs-dismiss="offcanvas" aria-label="Close" >
                    <Link href='/records'>Records</Link>
                </li>
                
   </ul>
  </div>
</div>
</div>
    )
}
export default Navbar