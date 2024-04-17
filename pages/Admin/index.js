import Navbar from "@/components/Navbar"
import styles from "./admin.module.css"
import { useState,useEffect } from "react"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"

const getUser= async()=>{
  const res = await fetch("/api/getUser")
  return res.json()
}
const getPost = async()=>{
  const res = await fetch("/api/getPost")
  return res.json()
}
const getBook = async()=>{
  const res = await fetch("/api/getBooking")
  return res.json()
}
const getDors = async()=>{
  const res = await fetch("/api/getDors", {
    cache: "no-store",
  });
  return res.json()
}
const getDorsManage = async()=>{
  const res = await fetch("/api/getDorsManage")
  return res.json()
}

export default function Admin(){
const [user  , setUser] = useState([]);
const [dors , setDors] = useState([]);
const [dorsMNM , setDorsMNM ] = useState([]);
const [post , setPost ] = useState([]);
const [ book , setBook ] = useState([]);
useEffect(()=>{
  getUser().then((u)=>{
    setUser(u)
  })
  getDors().then((u)=>{
    setDors(u)
  })
  getPost().then((d)=>{
    setPost(d)
  })
  getDorsManage().then((d)=>{
    setDorsMNM(d)
  })
  getBook().then((d)=>{
    setBook(d)
  })
},[])
  const route = useRouter();
const btnSetting=(x)=>{
    route.push("/Admin/Database/"+x.target.value)
}


  return(
    <div className={styles.body}>
    <nav className={styles.nav}>
        <a href="/" className={styles.navBtn}>
          Back to Homepage
        </a>
      <div></div><div></div>
    </nav>
    <div className={styles.container}>
      <h1>Administrator Monitor</h1>
      <div className={styles.Table}>
        <div className={styles.thead}>
          <div  className={styles.th}>Database</div>
          <div className={styles.th}>Detail</div>
          <div className={styles.th}>Amount</div>
          <div className={styles.th}>Action</div>
        </div>
        <div className={styles.TableBody}>
         <div className={styles.tr}>
          <div className={styles.td1}>User Account</div>
          <div className={styles.td}>user information</div>
          <div className={styles.td}>{user?.length}&nbsp;data</div>
          <div className={styles.td}>
            <button className={styles.btnSetting}
            onClick={btnSetting} value="User">Setting</button>
          </div>
         </div>
         <div className={styles.tr}>
          <div className={styles.td1}>Dormitory</div>
          <div className={styles.td}>other dormitory</div>
          <div className={styles.td}>{dors?.dormitory?.length}&nbsp;data</div>
          <div className={styles.td}>
            <button
            onClick={btnSetting} value="Dormitory" className={styles.btnSetting}>Setting</button>
          </div>
         </div>
         <div className={styles.tr}>
          <div className={styles.td1}>Booked</div>
          <div className={styles.td}>user reservation</div>
          <div className={styles.td}>{book?.length}&nbsp;data</div>
          <div className={styles.td}>
            <button
            onClick={btnSetting} value="Book" className={styles.btnSetting}>Setting</button>
          </div>
         </div>
         <div className={styles.tr}>
          <div className={styles.td1}>Dor MNM</div>
          <div className={styles.td}>dormitory owner</div>
          <div className={styles.td}>{dorsMNM?.length}&nbsp;data</div>
          <div className={styles.td}>
            <button
            onClick={btnSetting} value="DorMNM" className={styles.btnSetting}>Setting</button>
          </div>
         </div>
         <div className={styles.tr}>
          <div className={styles.td1}>Posts</div>
          <div className={styles.td}>communicat user</div>
          <div className={styles.td}>{post?.length}&nbsp;data</div>
          <div className={styles.td}>
            <button
            onClick={btnSetting} value="Post" className={styles.btnSetting}>Setting</button>
          </div>
         </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}