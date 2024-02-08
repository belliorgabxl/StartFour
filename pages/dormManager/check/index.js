import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./check.module.css"
import Image from "next/image";


const getData = async (idname) => {
    const res = await fetch(`http://localhost:3000/api/FindManageRoom/${idname}`, {
      cache: "no-store",
    });
    return res.json();
};
export default function check () {
  const [user_id, setUserID] = useState("");
  const [user_state, setState] = useState("");
  const [user_type, setType] = useState("");
  const [dors, setDors] = useState(null);
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
      setState(userList.State);
      setType(userList.Type);
    }else{
      setUserID("none");
      setState("none");
      setType("none");
    }
    getData(userList.UserID).then((d) => {
      setDors(d);
    });
  }, []);

  return(
    <div className={styles.body}>
        <Navbar/>
        <div className={styles.container}>
            {dors?.map((d) => (
            <div key={d._id}> 
                <div className={styles.Box}>
                    <img className={styles.iconuser} src="/users.png" width={60} height={60}></img>
                    <div className={styles.Textname}>คุณ {user_id}</div>
                    <div className={styles.Textdorm}>{d.dorm_name}</div>
                    
                    <div className={styles.dropdown}>
                                <Image
                                src="/arrowbutton.png" 
                                alt="dropdown"
                                width={15}
                                height={15}
                                />
                 
                            <div className={styles.dropdown_menu}>
                                <img className={styles.showimg} src={d.img} width={400} height={250} alt='img'></img>
                                <img className={styles.iconstar} src="/star3.5.png" width={60} height={60}></img>
                                <div className={styles.showreview}>3.5 ดีมาก</div>
                                <img className={styles.iconmap} src="/map.png" width={15} height={15}></img>
                                <div className={styles.showlocation}>{d.location}</div>
                                <div className={styles.showtype}>{d.type}</div>
                                <img className={styles.icondetail} src="/detail.png" width={15} height={15}></img>
                                <div className={styles.showdetail}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.detail}</div>
                            </div>
                        </div>
                    
                </div>
            </div>
            ))}
        </div> 
        <Footer/>
    </div>
  )
}