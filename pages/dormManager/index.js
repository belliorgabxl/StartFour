import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Space from "@/components/SpaceTab";
import styles from "./dorm.module.css";
import Link from "next/link";

const getInfomation = async() => {
  res   = await fetch("http://localhost:3000/api/getDormManagement",{
    cache:"no-store",
  });
  return res.json();
}
const getDors = async () => {
    const res = await fetch("http://localhost:3000/api/getDors", {
      cache: "no-store",
    });
    return res.json();
};
export default function IDroom(){
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>

      <h1> manager</h1>


      <Link href="/dormManager/manageRoom" className={styles.btnRoom}>
        + Room
      </Link>

      </div>
      <Space/>
      <Footer/>
    </div>
  )
}