import Link from "next/link";
import styles from "./Styles/navbar.module.css";
import Image from "next/image";
import {useState,useEffect}  from "react";
import { useRouter } from "next/router";
const getBook = async () => {
    const res = await fetch(`/api/getBooking`, {
      cache: "no-store",
    });
    return res.json();
  };
export default function Navbar(){
const router = useRouter();
const [user_id  ,setUserID] = useState('');
const [user_state ,setState]  = useState("");
const [user_type,setType] = useState("");
const [book , setBook] = useState();
const [isDropdownOpen, setIsDropdownOpen] = useState(false);


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
    getBook().then((b)=>{
        setBook(b);
    })
  },[])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

function logOutBtn(){
    localStorage.clear()
    router.reload();
    router.push("/")
}
function Booking_btn(){
    router.push("/Booking/"+user_id)
}
async function  PostRomm_btn(){
    router.push("/PostRoom/"+user_id)
}
const id_booking_list = []
const notic_list = []
const user_booking_list = []
const own_dormitory_list = []
let id_booking =''
let notic = ''
let own_dormitory = ''
let user_booking = ''
{book?.map((b)=>{
    notic_list.push(b.notic)
    id_booking_list.push(b._id)
    user_booking_list.push(b.user_booking)
    own_dormitory_list.push(b.own_dormitory)
})}
  if (user_id && user_state=="login"){
    if (user_type == "customer"){
        for(let i = 0 ; i < id_booking_list.length ; i++){
            if(user_booking_list[i] == user_id){
                id_booking = id_booking_list[i]
                user_booking = user_booking_list[i]
                own_dormitory = own_dormitory_list[i]
                notic = notic_list[i]
            }
        }
    return(
        <nav className={styles.navbar}>
                <div className={styles.topbar1}> 
                        <div className={styles.logotab}>
                            <Link href="/Homepage">
                                <Image  src="/Honghub.png"
                                width={80} height={80} alt="logo">
                                </Image>
                            </Link>
                           
                        </div>
                        <div className={styles.logoname}>
                            <Link  className={styles.home} href="/Homepage">TELEROOM</Link>
                        </div>
                       

                        <div className={styles.mainbar_search1}>
                            <div className={styles.mainbar_search2}>
                                <Image className="search_img" src="/search.png" 
                                width={35} height={35} alt='logo'></Image>
                                <input type="search" className={styles.search} 
                                placeholder="  i'm searching for..." id=""></input>
                            </div>
                        </div>
                        <Link href="/help" className={styles.help}>
                            Help?
                        </Link>
                        <div className={styles.mainbar_feature}>
                            <button className={styles.booking_btn} 
                            onClick={Booking_btn}>
                                ข้อมูลการจอง
                            </button>
                            <button className={styles.postRoom_btn} 
                            onClick={PostRomm_btn}>
                                +&nbsp;Post Room
                            </button>
                        </div>
                        <div className={styles.iconbell}>
                            { notic == "on"? (
                                <Link href={"/Booking/"+user_id}>
                                <Image className={styles.bell} src="/notion.jpg" 
                                width={32} height={32} alt='notion'></Image>
                                </Link>
                                ):
                                (
                                <Link href={"/Booking/"+user_id}>
                                <Image className={styles.bell} src="/nonenoti.jpg" 
                                width={29} height={34} alt='nonenoti'></Image>
                                </Link> 
                                )}
                        </div>
                        <div className={styles.outdropdown_one}>
                        <Image
                            src="/gear.png" 
                            alt="dropdown"
                            width={37}
                            height={37}
                            onClick={toggleDropdown}
                        />

                        {isDropdownOpen && (
                            <div className={styles.dropdownout}>
                            <button
                                className={styles.menuButton}
                                onClick={logOutBtn}
                            >
                                Logout
                            </button>
                            </div>
                        )}
                        </div>
                        <div className={styles.iconprofilecustomer}>
                            <div >
                                <Image src="/iconuser.jpg"width={38} height={38} alt='iconuser.jpg'></Image>
                            </div>
                            <div className={styles.namecust}>
                                {user_id}
                            </div>
                        </div>

                    </div>

                <div className={styles.menubar}>
                        <div className={styles.dropdown}>
                                <Image
                                src="/dropdown.png" 
                                alt="dropdown"
                                width={45}
                                height={45}/>
                            <div className={styles.dropdown_menu}>
                                <a href="/RoomType" > ประเภทห้อง </a>
                                <a href={"/Payment/"+user_id} >ห้องขายต่อ</a>
                                <a href="/NearMe" >ห้องพักใกล้ฉัน</a>
                                <a href={"/Booking/"+user_id}>จองหอพัก</a>
                                <a href="/AboutUs">เกี่ยวกับเรา</a>
                                <a href="/help">ช่วยเหลือ</a> 
                                <a href="/Admin">Admin Manager</a> 
                            </div>
                        </div>
                    
                    <Link href="/RoomType" className={styles.menulist}><span >ประเภทห้อง</span></Link>
                    <Link href={"/Post"} className={styles.menulist}><span>ห้องขายต่อ</span></Link>
                    <Link href="/NearMe" className={styles.menulist}><span>ห้องพักใกล้ฉัน</span></Link>
                    <Link href={"/Booking/"+user_id} className={styles.menulist}><span>จองหอพัก</span></Link>
                    <Link href="/AboutUs" className={styles.menulist}><span>เกี่ยวกับเรา</span></Link>
                    
                </div>

        </nav>
    )}
    else if (user_type == "seller"){
        return(
            <nav className={styles.navbar2}>
            <div className={styles.topbar2}> 
                    <div className={styles.logotab}>
                        <Link href="/dormManager">
                            <Image  src="/Honghub.png"
                            width={80} height={80} alt="logo">
                            </Image>
                        </Link>
                    </div>
                    <div className={styles.logoname1}>
                        <Link href="/dormManager">TELEROOM</Link>
                    </div>

                    <div className={styles.mainbar_search1}>
                        <div className={styles.mainbar_search2}>
                            <Image className="search_img" src="/search.png" 
                            width={35} height={35} alt='search.png'></Image>
                            <input type="search" className={styles.search} 
                            placeholder="  i'm searching for..." id=""></input>
                        </div>
                    </div>
                    
                    <div className={styles.iconteb}>
                    { notic == "on"? (
                        <Link href= "/dormManager/dormConfirm" >
                        <Image className={styles.bell} src="/mail_off.png" 
                        width={42} height={34} alt='mail_off.png'></Image>
                        </Link>
                        ):
                        (
                        <Link href= "/dormManager/dormConfirm" >
                        <Image className={styles.bell} src="/mail_on.png" 
                        width={42} height={34} alt='mail_on.png'></Image>
                        </Link> 
                        )}
                    </div>

                    <div className={styles.outdropdown_two}>
                    <Image
                        src="/gear.png" 
                        alt="dropdown"
                        width={40}
                        height={40}
                        onClick={toggleDropdown}
                    />

                    {isDropdownOpen && (
                        <div className={styles.dropdownout}>
                        <button
                            className={styles.menuButton}
                            onClick={logOutBtn}
                        >
                            Logout
                        </button>
                        </div>
                    )}
                    </div>
                    
                    <div className={styles.iconprofilecustomer}>
                    <div>
                        <Image src="/iconuser.jpg" 
                        width={38} height={38} alt='iconuser.jpg'></Image></div>
                        <div className={styles.namesell}>{user_id}</div>
                    </div>
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
                                width={80} height={80} alt="Honghub.png">
                                </Image>
                            </Link>
                           
                        </span>
                        <div className={styles.logoname2}>
                            <Link href="/">TELEROOM</Link>
                        </div>
                        <span></span>

                        <span className={styles.mainbar_search1}>
                            <div className={styles.mainbar_search2}>
                                <Image className="search_img" src="/search.png" 
                                width={35} height={35} alt='search.png'></Image>
                                <input type="search" className={styles.search} 
                                placeholder="  i'm searching for..." id=""></input>
                            </div>
                        </span>

                        <span className={styles.helptab}><Link href="/help">ช่วยเหลือ</Link></span>

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

                <div className={styles.menubartwo}>
                        <div className={styles.dropdown}>
                                <Image
                                src="/dropdown.png" 
                                alt="dropdown"
                                width={45}
                                height={45}/>
                 
                            <div className={styles.dropdown_menu}>
                                <a href="/">ประเภทห้อง</a>
                                <a href="#">ใกล้ฉัน</a>
                                <a href="/AboutUs">เกี่ยวกับเรา</a>
                                <a href="#">ช่วยเหลือ</a>
                                <a href="/Admin">Admin Manager</a> 
                            </div>
                        </div>
                    
                    <Link href="/RoomType" className={styles.menulist}><span >ประเภทห้อง</span></Link>
                    <Link href="/NearMe" className={styles.menulist}><span>ใกล้ฉัน</span></Link>
                    <Link href="/AboutUs" className={styles.menulist}><span>เกี่ยวกับเรา</span></Link>
                    
                </div>

        </nav>
        )

    }
}