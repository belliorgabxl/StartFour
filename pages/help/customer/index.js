import styles from "./customer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function customer(){
    return(
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.Boxgridone}>
                        <Link href="/help" className={styles.btn}>
                            <Image src="/back.png" width={30} height={30} alt="img"/>
                        </Link>
                    </div>
                    <div className={styles.Boxgridtwo}>
                        <div className={styles.Boxleft}>
                            วิธีใช้งานระบบในส่วนของผู้เช่า
                        </div>
                        <div className={styles.Boxright}>
                            <div className={styles.line}>• ทำการ sign up กรอกข้อมูลลงระบบ โดยเลือก customer </div>
                            <div className={styles.line}>• ทำการ sign in ใส่ username และ password ที่ทำการ sign up ไว้</div>
                            <div className={styles.line}>• เลือกประเภทห้อง เพื่อเลือกห้องที่สนใจ </div>
                            <div className={styles.line}>• กดเลือกห้องที่สนใจ แล้วกดจอง</div>
                            <div className={styles.line}>• เมื่อผู้ปล่อยเช่ากดอนุมัติการจอง ผู้เช่าสามารถกดชำระการจองได้แต่หากยังไม่มีการอนุมัติการจองต้องรอการอนุมัติ</div>
                            <div className={styles.line}>• สแกนคิวอาร์โค้ดจ่ายเงิน แล้วกดยืนยันการทำรายการ </div>
                            <div className={styles.line}>• เมื่อผู้ปล่อยเช่ากดอนุมัติทำสัญญา ผู้เช่าสามารถกดทำสัญญาแล้วกรอกข้อมูลได้แต่หากยังไม่มีการอนุมัติต้องรอการอนุมัติ</div>
                        </div>
                     </div>
                </div>
                
            </div>
        </div>
    )
}
