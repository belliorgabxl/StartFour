import Navbar from "@/components/Navbar";
import styles from "./post.module.css";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

const getPost = async () => {
  const res = await fetch("/api/getPost", {
    cache: "no-store",
  });
  return res.json();
};

export default function Post() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost().then((p) => {
      setPost(p);
    });
  }, []);

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.topic}>
          รวมห้องขายต่อไว้ที่นี่ แลกเปลี่ยนซื้อ-ขายสัญญาหอ
        </div>
        <div className={styles.roomPost}>
          <div className={styles.topicPost}>community post</div>
          {post?.map(
            (p) =>
              p.post === "yes" && (
                <Link key={p._id} href={"/Post/room/" + p._id}>
                  <div className={styles.roomBox}>
                    <div className={styles.imgBox}>
                      <img src={p.img} width={350} height={270} alt="img"></img>
                    </div>
                    <div className={styles.textBox}>
                      <div className={styles.textBox1}>
                        <div className={styles.dormNameBox}>{p.dorm_name}</div>
                        <div className={styles.locationBox}>, {p.location}</div>
                      </div>
                      <div className={styles.priceBox}>
                        <div className={styles.price}>{p.price_m}</div>
                        <div className={styles.month}>/month</div>
                        <div className={styles.priceBox}>
                          <div className={styles.priceLabel}>ประกัน :</div>
                          <div className={styles.price}>{p.price_rent}</div>
                          <div className={styles.month}>/month</div>
                        </div>
                      </div>
                      <div className={styles.detailBox}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{p.detail}
                      </div>
                      <div className={styles.typeBox}>Roomtype: {p.type}</div>
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
