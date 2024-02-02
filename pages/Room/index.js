import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./room.module.css"
import { useState,useEffect } from "react";
import Space from "@/components/SpaceTab";

import Link from "next/link";

const getData = async()=>{

    const res = await fetch("http://localhost:3000/api/Dors/getDors", {
      cache: "no-store",
    });
    return res.json();
}


export default function Room() {

  const [dors, setDors] = useState(null);
  useEffect(() => {
    getData().then((d) => {
      setDors(d);
    });
  }, []);

    return(
        <div className={styles.body}>
            <Navbar/>
            <div className={styles.container}>
                <h1>test</h1>



           {dors?.dormitory?.map((r)=>
            <Link  className={styles.bor} href={"/Room/"+r._id} key={r._id}>
                
                {r.dorm_name}



            </Link>
           )}




           
            <h1>underline</h1>

            </div>
            <Space/>
            <Footer/>
        </div>
    )
}