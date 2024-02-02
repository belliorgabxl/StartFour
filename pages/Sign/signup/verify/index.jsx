import styles from "./verify.module.css"
import Image from "next/image"
import Navbar from "@/components/Navbar"
export default function verify(){
    return(
    <div className={styles.title_verify}>
        <Navbar/>
            <div className={styles.content_verify}>
                <h1>Register Success</h1>
                <div><Image src="/green_tick.png"
                 width={70} height={70} alt="picture"></Image></div>
            </div>
    </div>
    )
}