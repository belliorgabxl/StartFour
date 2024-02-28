import Navbar from "@/components/Navbar";
import styles from "./help.module.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function helpe(){
    return(
        <div className={styles.body}>
            <Navbar/>
             <div className={styles.container}>
                <div className={styles.Boxonegrid}>
                    <div className={styles.Boxhead}>
                        ศูนย์ช่วยเหลือ
                    </div>
                    <Link className={styles.Textone} href="/help/customer">
                        <div className={styles.Textoneleft}>
                            วิธีใช้งานระบบในส่วนของผู้เช่า
                        </div>
                        <div className={styles.Textoneright}>
                            <img className={styles.iconright} src="/right.png" alt="right.png" width={20} height={20}></img>
                        </div>
                    </Link>
                    <div className={styles.divider1}></div>
                    <Link className={styles.Texttwo} href="/help/seller">
                        <div className={styles.Texttwoleft}>
                            วิธีใช้งานระบบในส่วนของผู้ปล่อยเช่า
                        </div>
                        <div className={styles.Texttworight}>
                            <img className={styles.iconright} src="/right.png" alt="right.png" width={20} height={20}></img>
                        </div>
                    </Link>
                    <div className={styles.divider2}></div>
                    <Link className={styles.Textthree} href="#">
                        <div className={styles.Textthreeleft}>
                            วิธียืนยันตัวตน
                        </div>
                        <div className={styles.Textthreeright}>
                            <img className={styles.iconright} src="/right.png" alt="right.png" width={20} height={20}></img>
                        </div>
                    </Link>
                    <div className={styles.divider3}></div>
                </div>
                <div className={styles.Boxtwogrid}>
                    <div className={styles.Boxgridleft}>
                        <div className={styles.Boxleftone}>
                            คำถามแบ่งตามผลิตภัณฑ์
                        </div>
                        <div className={styles.Boxlefttwo}>
                            <div className={styles.one}>
                                 <img className={styles.iconright} src="/global.png" alt="global.png" width={80} height={80}></img>
                                 <div>ข้อมูลทั่วไป</div>
                            </div>
                            <div className={styles.two}>
                                 <img className={styles.iconright} src="/building_help.png" alt="building_help.png" width={80} height={80}></img>
                                 <div>ห้องพัก</div>
                            </div>
                            <div className={styles.three}>
                                 <img className={styles.iconright} src="/agreement.png" alt="agreement.png" width={80} height={80}></img>
                                 <div>สัญญา</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Boxgridright}>
                        <div className={styles.Boxrightone}>
                            <div className={styles.Textonebottomleft}>
                                ราคาห้องพัก
                            </div>
                            <div className={styles.Textonebottomright}>
                                <div className={styles.dropdown}>
                                    <Image
                                    src="/arrowbutton.png" 
                                    alt="arrowbutton.png"
                                    width={15}
                                    height={15}
                                    />
                 
                                    <div className={styles.dropdown_menu}>
                                        <div className={styles.texthead}>ราคาห้องพักมีหลายช่วงราคา</div> 
                                        <div className={styles.text}>
                                            <div className={styles.textone} >ห้องพัดลม ราคาอยู่ที่ 2500-4000</div> 
                                            <div className={styles.texttwo}>ห้องแอร์ ราคาอยู่ที่ 4000-5000</div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Boxrighttwo}>
                            <div className={styles.Texttwobottomleft}>
                                เลือกประเภทเตียง
                            </div>
                            <div className={styles.Texttwobottomright}>
                               <div className={styles.dropdown}>
                                    <Image
                                    src="/arrowbutton.png" 
                                    alt="arrowbutton.png"
                                    width={15}
                                    height={15}
                                    />
                 
                                    <div className={styles.dropdown_menu}>
                                        <div className={styles.texthead}>ประเภทของเตียง</div>
                                        <div className={styles.text}>
                                            <div className={styles.textbed}>ประเภทของเตียงสามารถดูได้จากรายละเอียดที่ผู่ปล่อยเช่ากรอกไว้</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Boxrightthree}>
                            <div className={styles.Textthreebottomleft}>
                                ช่องทางติดต่อ
                            </div>
                            <div className={styles.Textthreebottomright}>
                                <div className={styles.dropdown}>
                                    <Image
                                    src="/arrowbutton.png" 
                                    alt="arrowbutton.png"
                                    width={15}
                                    height={15}
                                    />
                 
                                    <div className={styles.dropdown_menu}>
                                        <div className={styles.texthead}>ช่องทางติดต่อ</div>
                                        <div className={styles.social}>
                                            <div className={styles.textsocial}>
                                                <div className={styles.textgridone}>
                                                    <img className={styles.imgfacebook} src="/fac.png" alt="fac.png" width={50} height={50}></img>
                                                    <div className={styles.textfacebook}>Facebook</div>
                                                </div>
                                                <div className={styles.textgridtwo}>
                                                    <img className={styles.imginstagram}  src="/insta.png" alt="insta.png" width={50} height={50}></img>
                                                    <div className={styles.textinstagram}>Instagram</div>
                                                </div>
                                                <div className={styles.textgridthree}>
                                                    <img className={styles.imgphone} src="/phone.png" alt="phone.png" width={50} height={50}></img>
                                                    <div className={styles.textphone}>Telephone</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <Footer/>
        </div> 
    )
}
