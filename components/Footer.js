import Link from "next/link"
import Image from "next/image"
import styles from "./Styles/footer.module.css"

export default function Footer(){
    return(
        <>
        <footer className={styles.foot}>

           <div className={styles.body}>

                <div className={styles.blog1}>

                    <div  className={styles.logo}>
                        <Image src="/HongHub.png" alt="logo" height={70} width={70}></Image>
                        <h1 className={styles.logotext}>HongHub</h1>
                    </div>

                    <div className={styles.copyright}>
                        Copyright @2023-Now<br/>
                        Telecommunication Engineering
                    </div>
                    <div className={styles.kmitl}>
                        <p >Faculity Of Engineering<br/>
                        King's Mongkut instuite Technology Ladkrabang<br/>
                        1 Chalong Krung 1 Alley, Lat Krabang, Khet Lat<br/>
                        Krabang, Krung Thep Maha Nakhon 10520</p>
                    </div>
                </div>

                <div className={styles.blog}>
                </div>

                <div className={styles.blog3}>
                    <div className={styles.aboutus}>
                        <Link href="/">About Us</Link>
                    </div>
                </div>
           </div>




        </footer>
        </>
    )
}