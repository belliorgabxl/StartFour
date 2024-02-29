import Navbar from "@/components/Navbar"
import styles from "./post.module.css"
import Footer from "@/components/Footer"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

const getPost = async () => {
  const res = await fetch("/api/getPost", {
    cache: "no-store",
  });
  return res.json();
};

export default function Post(){
  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost().then((p) => {
      setPost(p);
    });
  }, []);
  
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.topic}>
          รวมห้องขายต่อไว้ที่นี่ แลกเปลี่ยนซื้อ-ขายสัญญาหอ
        </div>
        <div className={styles.roomPost}>
          ช่องหอพัก
          {
            post?.map((p)=>(
              <Link href={"/Post/room/"+p._id}>
                <div>
                  {p.dorm_name}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}