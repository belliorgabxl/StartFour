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
                        <Image className={styles.Image} src="/HongHub.png" alt="logo" height={100} width={100}></Image>
                        <h1 className={styles.logotext}>HongHub</h1>
                    </div>

                    
                </div>

                <div className={styles.blog}>
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

                <div className={styles.blog3}>
                    <div className={styles.aboutus}>
                        <Link className={styles.about} href="/">เกี่ยวกับเรา</Link>
                        <div className={styles.Box1}>
                            <Image  className={styles.icon1} src="/facebook.png" alt="facebook.png" height={80} width={80}></Image>
                            <Image className={styles.icon2} src="/instagram.png" alt="instagram.png" height={75} width={80}></Image>
                            <Image className={styles.icon3} src="/telephone.png" alt="telephone.png" height={80} width={80}></Image>
                        </div>
                    </div>
                </div>
           </div>




        </footer>
        </>
    )
}