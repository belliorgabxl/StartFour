import { useState,useEffect } from "react"
import { useRouter } from "next/router"
import styles from "./addUser.module.css"

export default function AddUser(){
  const [username , setUsername] = useState();
  const [password , setPassword] = useState();
  const [email,setEmail] = useState();
  const [phone ,setPhone]=  useState();
  const [name ,setName]  = useState();
  const [state , setState] = useState();
  const [dormitory ,setDorm] =useState();
  const router =  useRouter();
  const addBtn =async(e)=>{
    e.preventDefault();
    const res = await fetch("/api/getUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username,password,email,phone,name,state,dormitory}),
    });
    if(res.ok){
      alert("Success");
      router.push("/Admin/Database/User")
    }else{
      alert("error")
    }
  }

  return(
    <div className={styles.body}>
       <nav className={styles.nav}>
        <a href="/Admin/Database/User" className={styles.navBtn}>
          Back to User Table
        </a>
        <div></div><div></div>
      </nav>
      <div className={styles.container}>
        <div className={styles.formArea}>
          <form className={styles.formBox} onSubmit={addBtn}>
            <div className={styles.inputDiv}>
              <label className={styles.label}>Username:</label>
              <input type="text"  className={styles.inputBox}
              onChange={(e)=>setUsername(e.target.value)} value={username}/>
            </div>
            <div  className={styles.inputDiv}>
              <label className={styles.label}>Password:</label>
              <input type="text"  className={styles.inputBox}
              onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            <div  className={styles.inputDiv}>
              <label className={styles.label}>Email:</label>
              <input type="text"  className={styles.inputBox}
              onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div  className={styles.inputDiv}>
              <label className={styles.label}>Name:</label>
              <input type="text" className={styles.inputBox}
              onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <div  className={styles.inputDiv}>
              <label className={styles.label}>Phone:</label>
              <input type="text" className={styles.inputBox} />
            </div>
            <div  className={styles.inputDiv}>
              <label className={styles.label}>State:</label>
              <input type="text"  className={styles.inputBox}defaultValue="customer"
              onChange={(e)=>setState(e.target.value)} value={state}/>
            </div>
            <div  className={styles.inputDiv}>
              <label className={styles.label}>Dormitory:</label>
              <input type="text"  className={styles.inputBox}  defaultValue="none" 
              onChange={(e)=>setDorm(e.target.value)} value={dormitory}/>
            </div>
            <div className={styles.btnArea}>
              <button type="submit" className={styles.btnSubmit}>Submit</button>
            </div>
          </form>
        </div>
        
      </div>
       
    </div>
  )
}