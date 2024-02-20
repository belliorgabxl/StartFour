import styles from "./aboutus.module.css"
import Navbar from "@/components/Navbar"

import Footer from "@/components/Footer"


export default function(){
    return( 
         <div>
        <Navbar/>
        <div className={styles.bg}></div>
            <div className={styles.container}>
            <h1>
                About Us

            </h1>
            <div className={styles.block}>


                <div className={styles.text2}>Content</div>

                <div className={styles.text1}> โครงงานนี้จัดทำขึ้นเพื่อนำเสนอการออกแบบเว็บไซต์สำหรับการเลือกหาหอพักบริเวณรอบสถาบัน
เทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง โดยมีวัตถุประสงค์เพื่อศึกษาการสร้างเว็บไซต์เลือกเช่าหอพัก
ระบบฐานข้อมูล ระบบการจับคู่หาเพื่อนร่วมห้อง (Roommate) และการนัดหมายเพื่อพูดคุยเกี่ยวกับหอพัก
ซึ่งเว็บไซต์ดังกล่าวประกอบด้วยระบบล็อกอินในการใช้งานระหว่างผู้เช่าสัญญาหอพักและเจ้าของหอพัก โดยผู้ดูแล
ระบบสามารถเพิ่มและแก้ไขข้อมูลของหอพักได้ตลอดเวลา อัปโหลดรูปหอพัก สำหรับผู้เช่าสามารถเลือกดูหอพัก
จากประเภทหอพัก ระยะทางจากแผนที่ ช่วงราคา สถานที่ใกล้เคียง และเลือกจับคู่เพื่อหาเพื่อนร่วมห้องได้
                </div>

            
            </div>

            <div className={styles.img}>
                <img src="/teamwork.jpg" width={1250} height={320} alt="Our Team" />
            </div>

            <div className={styles.block1}>
                <div className={styles.header}> Dormitory Platform for Searching 
                    <div className={styles.text3}>Telecom Pre-project </div>
                </div>

                <div className={styles.img1}>
                    <img src="/dorm.jpg" width={500} height={250} alt="Our Team" />
                </div>
     
            </div>  
            
                <h2 className={styles.pad}>สมาชิกในกลุ่ม</h2>
            <div className={styles.blockuse}>
                <div className={styles.profile}>
                    <img src="/por.jpg" width={150} height={150} alt="Our Team" />
                </div>
                <div className={styles.name}> <div>กษม มิ่งเมือง</div>
                <div>นักศึกษาปี 3 ภาควิชาโทรคมนาคมและโครงข่าย คณะวิศวกรรมศาสตร์</div>
                <div>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</div>
                
                </div>
            </div>
            
            <div className={styles.blockuse}>
                <div className={styles.profile}>
                    <img src="/bam.jpg" width={150} height={150} alt="Our Team" />
                </div>
                <div className={styles.name}>
                    <div>ชนิดาภา ชาติศักดิ์</div>
                <div>นักศึกษาปี 3 ภาควิชาโทรคมนาคมและโครงข่าย คณะวิศวกรรมศาสตร์</div>
                <div>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</div>


                </div>
            </div>

            <div className={styles.blockuse}>
                <div className={styles.profile}>
                    <img src="/gabel.jpg" width={150} height={150} alt="Our Team" />
                </div>
                <div className={styles.name}>
                <div>ภัทรจาริน นภากาญจน์</div>
                <div>นักศึกษาปี 3 ภาควิชาโทรคมนาคมและโครงข่าย คณะวิศวกรรมศาสตร์</div>
                <div>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</div>
                </div>
            </div>

            <h2 className={styles.pad}>อาจารย์ที่ปรึกษา</h2>
             <div className={styles.blockuse1}>
                <div className={styles.profile}>
                    <img src="/aj_wa.jpg" width={150} height={150} alt="Our Team" />
                </div>
                <div className={styles.name}><div>รศ.ดร.เวธิต ภาคย์พิสุทธิ์</div>
                <div>หัวหน้าภาคโทรคมนาคม คณะวิศวกรรมศาสตร์</div>
                <div>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</div>
                </div>
            </div>




            


        </div>

        <Footer/>
        
        </div>
        
        
        )
      
   
}