import Link from "next/link";
import styles from "./styles/navbar.module.css";
import Image from "next/image";
import {useState,useEffect}  from "react";
import { useRouter } from "next/router";

export default function Navbar(){
const router = useRouter();
const [user_id  ,setUserID] = useState('');
const [user_state ,setState]  = useState("");
const [user_type,setType] = useState("");
  useEffect(()=>{
    const userList = JSON.parse(localStorage.getItem("userList"))
    if(userList){
        setUserID(userList.UserID);
        setState(userList.State);
        setType(userList.Type);
    }else{
        setState("none")
        setUserID("none")
    }
  },[])
function logOutBtn(){
    localStorage.clear()
    router.push("/")
}
  if (user_id && user_state=="login"){
    if (user_type == "customer"){
    return(
        <nav className={styles.navbar}>
                <div className={styles.topbar}> 
                        <span className={styles.logotab}>
                            <Link href="/Homepage">
                                <Image  src="/Honghub.png"
                                width={80} height={80} alt="logo">
                                </Image>
                            </Link>
                           
                        </span>
                        <span className={styles.logoname}>
                            <Link href="/Homepage">HONGHUB</Link>
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
                            <button className={styles.logoutbtn} onClick={logOutBtn} >
                                Logout
                            </button>
                            <div></div>
                        </span>
                </div>

                <div className={styles.menubar}>
                        <div className={styles.dropdown}>
                                <Image
                                src="/dropdown.png" 
                                alt="dropdown"
                                width={45}
                                height={45}/>--
                 
                            <div className={styles.dropdown_menu}>
                                <a href="/Homepage">PROMOTION</a>
                                <a href={"/payment/"+user_id}>LOCATION</a>
                                <a href="#">PRICE RANG</a>
                                <a href="#">HELP</a>
                            </div>
                        </div>
                    <Link href="/#" className={styles.menulist}><span >Noticfication</span></Link>
                    <Link href="/RoomType" className={styles.menulist}><span >Roomtype</span></Link>
                    <Link href="/Homepage" className={styles.menulist}><span>Announcment</span></Link>
                    <Link href="/NearMe" className={styles.menulist}><span>NearMe</span></Link>
                    <Link href="/Homepage" className={styles.menulist}><span>Promotion</span></Link>
                    <Link href={"/Booking/"+user_id} className={styles.menulist}><span>Booking</span></Link>
                    
                </div>

        </nav>
    )}
    else if (user_type == "seller"){
        return(
            <nav className={styles.navbar2}>
            <div className={styles.topbar}> 
                    <span className={styles.logotab}>
                        <Link href="/dormManager">
                            <Image  src="/Honghub.png"
                            width={80} height={80} alt="logo">
                            </Image>
                        </Link>
                    </span>
                    <span className={styles.logoname}>
                        <Link href="/dormManager">HONGHUB</Link>
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
                        <button className={styles.logoutbtn} onClick={logOutBtn} >
                            Logout
                        </button>
                        <div></div>
                    </span>
            </div>
    </nav>
        )
    }
    }
    else if (user_state == "none" && user_id == "none"){
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
                                 <Link href="/Sign/signIn">Sign in</Link>
                            </div>
                            <div>
                                <Link href="/Sign/signup">Sign up</Link>
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
                                <a href="/">PROMOTION</a>
                                <a href="#">LOCATION</a>
                                <a href="#">PRICE RANG</a>
                                <a href="#">HELP</a>
                            </div>
                        </div>
                    <Link href="/#" className={styles.menulist}><span >Noticfication</span></Link>
                    <Link href="/RoomType" className={styles.menulist}><span >Roomtype</span></Link>
                    <Link href="/" className={styles.menulist}><span>Announcment</span></Link>
                    <Link href="/NearMe" className={styles.menulist}><span>NearMe</span></Link>
                    <Link href="/" className={styles.menulist}><span>Promotion</span></Link>
                    <Link href="/AboutUs" className={styles.menulist}><span>Aboute Us</span></Link>
                    
                </div>

        </nav>
        )

    }
}