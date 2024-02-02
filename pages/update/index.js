import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Space from "@/components/SpaceTab";
import styles from "./update.module.css";
import { useState,useEffect } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
const getDors = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Dors/getDors", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    else{
      console.log("Information complete")
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


export default function updateDelete(){
  const router = useRouter();
  const [dors, setDors] = useState(null);
  useEffect(() => {
    getDors().then((d) => {
      setDors(d);
    });
  }, []);
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>

      <h1>Update</h1>

      {dors?.dormitory?.map((d)=> (
        <Link href={"/update/edit/"+d._id} key={d._id}>
          {d.dorm_name}
        </Link>
      ))}

      </div>
      <Space/>
      <Footer/>
    </div>
  )
}