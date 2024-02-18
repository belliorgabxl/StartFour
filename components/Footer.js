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
                        <Image src="/Honghub_white.PNG" alt="logo" height={70} width={70}></Image>
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

                    <div className={styles.regis}>
                        <Image className={styles.icon2} src="/hand.png" width={100} height={100} alt='hand.png'></Image>
                        <div className={styles.textabout}>
                            <Link   href="/" > ลงทะเบียนเพื่อใช้งาน</Link>
                        </div>
                    </div>

                    <div className={styles.textfooter_one}>
                        <div className={styles.textfooter_one1}>
                            เกี่ยวกับ  HongHub
                        </div>
                        <div className={styles.fun}>
                            <Link href="/">วิธีการจอง</Link>
                        </div>
                        <div className={styles.fun}>
                            <Link href="/">เกี่ยวกับเรา</Link>
                        </div>
                        <div className={styles.fun}>
                            <Link href="/">ศูนย์ช่วยเหลือ</Link>
                        </div> 
                    </div>

                    <div className={styles.textfooter_two}>
                        <div className={styles.textfooter_two1}>
                            ผลิตภัณฑ์
                        </div>
                        <div className={styles.fun}>
                            <Link href="/">จองที่พัก</Link>
                        </div>
                        <div className={styles.fun}>
                            <Link href="/">ประเภทห้องพัก</Link>
                        </div>
                        <div className={styles.fun}>
                            <Link href="/">อพาร์ตเมนต์</Link>
                        </div> 
                    </div>

                </div>

                <div className={styles.blog3}>
                    <div className={styles.text}>ช่องทางติดต่อ</div>
                    <div className={styles.icon}>
                        <div >
                            <Image className={styles.icon1} src="/fac.png" width={40} height={40} alt='logo'></Image>
                            <span className={styles.textsocial}>
                                <Link  href="/">Facebook</Link>
                            </span>
                        </div>
                        <div>
                            <Image className={styles.icon1} src="/insta.png" width={40} height={40} alt='logo'></Image>
                            <span className={styles.textsocial}>
                                <Link  href="/">Instagram</Link>
                            </span>
                        </div>
                        <div>
                           <Image className={styles.icon1} src="/phone.png" width={40} height={40} alt='logo'></Image>
                           <span className={styles.textsocial} >
                               <Link  href="/">Telephone</Link> 
                           </span>
                        </div>
                        
                    </div>
                </div>
           </div>
        </footer>
        </>
    )
}