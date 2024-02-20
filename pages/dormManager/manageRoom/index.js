import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./manageRoom.module.css"

const getData = async (idname) => {
  const res = await fetch(`/api/FindManageRoom/${idname}`, {
    cache: "no-store",
  });
  return res.json();
};
export default function manageRoom() {
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

  return (
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.Texthead}>
          <h1> ห้องที่ลงทะเบียน</h1>
        </div>

        <div >
          {dors?.length > 0 ? (
          <div className={styles.two} >
            {dors?.map((d) => (
              <Link className={styles.one} href={"/dormManager/manageRoom/room/" + d._id} >
                <div className={styles.Box}>
                  <img className={styles.icon} src="/iconroom.png" width={80} height={80}></img>
                  <div className={styles.Textedit}>[แก้ไข]</div>
                  <div className={styles.Textname}>{d.dorm_name}</div>
                  <div className={styles.Texttype}>{d.type}</div>
                </div>
              </Link>
            ))}
          </div> ): (
          <div className={styles.errorpost}>
            <img className={styles.iconerror} src="/error.png" width={200} height={200}></img>
            <div className={styles.Texterror} >opps no post </div>
          </div>
          )  }

        </div>
      </div>
      <Footer/>
    </div>
  );
}
