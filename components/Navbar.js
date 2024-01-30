import Link from "next/link";
import styles from "./styles/navbar.module.css";
import Image from "next/image";
export default function Navbar(){
    return(
        <nav className={styles.navbar}>

                <div className={styles.topbar}> 
                        <span className={styles.logotab}>
                            <Link href="/">
                                <Image  src="/Honghub.png"
                                width={80} height={80} alt="logo"> 
                                </Image>
                            </Link>
                           
                        </span>
                        <span className={styles.logoname}>
                            <Link href="/">HONGHUB</Link>
                        </span>
                        <span></span>

                        <span className={styles.mainbar_search1}>
                            <div className={styles.mainbar_search2}>
                                <Image className="search_img" src="/search.png" 
                                width={35} height={35} alt='logo'></Image>
                                <input type="search" className={styles.search} 
                                placeholder="  i'm searching for..." id=""></input>
                            </div>
                        </span>

                        <span className={styles.helptab}><Link href="#">help?</Link></span>

                        <span className={styles.sign}>
                            <div></div>
                            <div className={styles.singbtn}>
                                 <Link href="/signIn">Sign in</Link>
                            </div>
                            <div>
                                <Link href="/signup">Sign up</Link>
                            </div>
                            <div></div>
                        </span>
                </div>


                <div className={styles.menubar}>
                        <div className={styles.dropdown}>
                                <Image
                                src="/dropdown.png" 
                                alt="dropdown"
                                width={45}
                                height={45}/>
                 
                            <div className={styles.dropdown_menu}>
                                <a href="#">PROMOTION</a>
                                <a href="#">LOCATION</a>
                                <a href="#">PRICE RANG</a>
                                <a href="#">HELP</a>
                            </div>
                        </div>
                    <Link href="/addRoom" className={styles.menulist}><span >add Room</span></Link>
                    <Link href="/RoomType" className={styles.menulist}><span >Roomtype</span></Link>
                    <Link href="/" className={styles.menulist}><span>Announcment</span></Link>
                    <Link href="/NearMe" className={styles.menulist}><span>NearMe</span></Link>
                    <Link href="/" className={styles.menulist}><span>Promotion</span></Link>
                    <Link href="/GenPDF" className={styles.menulist}><span>ทำสัญญาเช่าหอ</span></Link>
                    
                </div>

        </nav>
    )
}