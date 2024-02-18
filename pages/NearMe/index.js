import style from "../NearMe/nearme.module.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

const Map = dynamic(() => import("@/components/MarkerMap/map"), {
  ssr: false,
});

export default function Home() {
  const [searchlocat, setSearchLocat] = useState("");

  const handleSearch = (e) => {
    setSearchLocat(e.target.value);
  };

  return (
    <>
      <div className={style.bor}>
       
       <Link href="/" className={style.btn}>
       <Image src="/back.png" width={30} height={30} alt="img"/>
      </Link>
      <span className={style.search}>
        <Image src="/pinlo.png" width={25} height={25} alt="img"/>
      <Link className={style.textbox} href="/">KMITL</Link>
      <div className={style.line}></div>
        <div className = {style.text_andicon}>
          <input
          
            className={style.search_text}
            type="text"
            placeholder="Search Dormitory name or Location"
            onChange={handleSearch}
            value={searchlocat}
          />
          <i className={style.search_icon}><Image src="/searchlo.png" width={20} height={20} alt="img"/></i>
          
          </div>
        </span></div>
      <Map searchlocat={searchlocat} />
    </>
  );
}

