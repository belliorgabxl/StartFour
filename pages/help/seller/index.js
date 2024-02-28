import styles from "./seller.module.css"
import Link from "next/link";
import Image from "next/image";

export default function seller(){
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
                            วิธีใช้งานระบบในส่วนของผู้ปล่อยเช่า
                        </div>
                        <div className={styles.Boxright}>
                            <div className={styles.line}>• ทำการ sign up กรอกข้อมูลลงระบบ โดยเลือก seller </div>
                            <div className={styles.line}>• ทำการ sign in ใส่ username และ password ที่ทำการ sign up ไว้</div>
                            <div className={styles.line}>• กดเพิ่มห้องพักที่ผู้ปล่อยเช่าต้องการปล่อยเช่า  </div>
                            <div className={styles.line}>• กดตรวจสอบเพื่อดูความถูกต้องของข้อมูลที่กรอก</div>
                            <div className={styles.line}>• กดแก้ไขหากข้อมูลที่กรอกผิด</div>
                            <div className={styles.line}>• เมื่อมีการกดจอง ฝั่งผู้ปล่อยเช่าจะมีข้อความให้กดอนุมัติการชำระ </div>
                            <div className={styles.line}>• เมื่อผู้เช่าชำระเงิน ฝั่งผู้ปล่อยเช่าจะมีข้อความให้กดอนุมัติการทำสัญญา</div>
                            <div className={styles.line}>• เมื่อผู้เช่ากรอกสัญญาแล้วกดยืนยัน ฝั่งผู้ปล่อยเช่าจะมีข้อความให้กดอนุมัติการเช่า</div>
                        </div>
                     </div>
                </div>
                
            </div>
        </div>
    )
}
