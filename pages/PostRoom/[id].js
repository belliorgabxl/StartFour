import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import styles from "./post.module.css"


export default function PostRoom(){
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
          <h1>hello this is PostRoom Page</h1>
      </div>
      <Footer/>
    </div>
  )
}