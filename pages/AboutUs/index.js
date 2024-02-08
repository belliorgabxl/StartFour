import styles from "./aboutus.module.css"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Footer from "@/components/Footer"
import Space from "@/components/SpaceTab"

export default function(){
    return( 
         <div className={styles.bg}>
        <Navbar/>
            <div className={styles.container}>
            <h1>
                About Us

            </h1>
            <div className={styles.block}>


                <div className={styles.text2}>Content</div>

                <div className={styles.text1}> Cashless payment has become a crucial part of Thailand's financial infrastructure over the past few years. In response, Bank of Thailand and commercial banks are joining forces to push the agenda forward, with QR payment as one of their primary medium. SCB’s open API platform enables the public to capitalize on the cashless payment trend by providing payment interfaces for partners and startups alike to develop on top of
                </div>

            
            </div>

            <div className={styles.img}>
                <img src="/ab.jpg" width={1250} height={300} alt="Our Team" />
            </div>

            <div className={styles.block1}>
                <div className={styles.header}> Dormitory Platform for Searching 
                    <div className={styles.text1}>Telecom Pre-project </div>
                </div>

                <div className={styles.img1}>
                    <img src="/dorm.jpg" width={500} height={250} alt="Our Team" />
                </div>
     
            </div>  
                <h2>OUR TEAM</h2>
            <div className={styles.blockuse}>
                <div className={styles.profile}>
                    <img src="/profile.png" width={100} height={100} alt="Our Team" />
                </div>
                <div className={styles.name}> <div>กษม มิ่งเมือง</div>
                <div>นักศึกษาปี 3 ภาควิชาโทรคมนาคมและโครงข่าย</div>
                
                </div>
            </div>
            
            <div className={styles.blockuse}>
                <div className={styles.profile}>
                    <img src="/profile.png" width={100} height={100} alt="Our Team" />
                </div>
                <div className={styles.name}>
                    <div>ชนิดาภา ชาติศักดิ์</div>
                <div>นักศึกษาปี 3 ภาควิชาโทรคมนาคมและโครงข่าย</div>


                </div>
            </div>

            <div className={styles.blockuse}>
                <div className={styles.profile}>
                    <img src="/profile.png" width={100} height={100} alt="Our Team" />
                </div>
                <div className={styles.name}><div>ภัทรจาริน นภากาญจน์</div>
                <div>นักศึกษาปี 3 ภาควิชาโทรคมนาคมและโครงข่าย</div></div>
            </div>



            


        </div>
        <Space/>
        <Footer/>
        
        </div>
        
        
        )
      
   
}