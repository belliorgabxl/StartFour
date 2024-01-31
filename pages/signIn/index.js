"use client";
import Navbar from "@/components/Navbar";
import styles from "./singin.module.css";
import Space from "@/components/SpaceTab";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const getUser = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/getUser", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
export default function SigIn() {
  const [user_login,getUsername] = useState("");
  const [pass_login,getPassword] = useState("");
  const router = useRouter();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const user_list = [];
    const pass_list = [];
    const {users} = await getUser();
    let user_value = 0;let pass_value = 0;
      users.map((u) => (
        user_list.push(u.username)
      ));
      users.map((u) => (
        pass_list.push(u.password)
      ));
    for (let i = 0 ; i<user_list.length;i++){
      if(user_list[i] == user_login){
        user_value = 1;
      }
      if(pass_list[i] == pass_login){
        pass_value=1;
      }
    }
    // check value username&password  1 or 0
    
    if (user_value == 1 && pass_value == 1){
      alert("Login Success!!");
      try{
        router.push("/Homepage");
        var getID = {UserID:user_login,State:"login"}
        localStorage.setItem("userList",JSON.stringify(getID));


      }catch(e){
        console.log(error);
      }
    }
    else if(!user_login ) {
      alert("Username Required.");
    }
    else if(!pass_login) {
      alert("Password Required.");
    }
    else if(!user_login && !pass_login){
      alert("Password & Username are required.");
    }
    else{
      alert("Username or Password is Wrong.");
    }
  }

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={loginSubmit} className={styles.signin_form}>
          <div className={styles.titlebox}>Sign In</div>

          <input
            className={styles.input_box}  
            type="text"
            placeholder="username"
            onChange={(e) => getUsername(e.target.value)}
            value={user_login}
          />
          <input
            className={styles.input_box}
            type="password"
            placeholder="password"
            onChange={(e) => getPassword(e.target.value)}
            value={pass_login}
          />
          <button className={styles.login_btn} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
