"use client";
import Navbar from "@/components/Navbar";
import styles from "./singin.module.css";
import Space from "@/components/SpaceTab";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const getUser = async () => {
  try {
    const res = await fetch("/api/getUser", {
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
const getBook = async () => {
  try {
    const res = await fetch("/api/getBooking", {
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
  const [user_login, getUsername] = useState("");
  const [pass_login, getPassword] = useState("");
  const [book, setBook] = useState(null);
  const router = useRouter();
  const id_booking_list = [];
  const user_booking_list = []
useEffect(()=>{
  getBook().then((b)=>{
    setBook(b);
  })
},[])
  {book?.map((b)=>{
    id_booking_list.push(b._id),
    user_booking_list.push(b.user_booking)
  })}

  const loginSubmit = async (e) => {
    e.preventDefault();
    const user_list = [];
    const pass_list = [];
    const type_list = [];
    const id_list = [];
    const dorm_list = [];
    let dormitory = "";
    let type_user = "";
    let id_user = "";
    let id_booking = ''
    const { users } = await getUser();
    let user_value = 0;
    let pass_value = 0;
    users.map((u) => user_list.push(u.username));
    users.map(
      (u) => (
        pass_list.push(u.password),
        type_list.push(u.state),
        id_list.push(u._id),
        dorm_list.push(u.dormitory)
      )
    );
    for (let i = 0; i < user_list.length; i++) {
      if (user_list[i] == user_login) {
        user_value = 1;
        type_user = type_list[i];
        id_user = id_list[i];
        dormitory = dorm_list[i];
      }
      if (pass_list[i] == pass_login) {
        pass_value = 1;
      }
    }
    for (let i = 0 ; i<user_booking_list.length;i++){
      if(user_booking_list[i] == user_login){
        id_booking = id_booking_list[i]
      }
    }
    // check value username&password  1 or 0

    if (user_value == 1 && pass_value == 1) {
      alert("Login Success!!");
      try {
        var getID = {
          UserID: user_login,
          State: "login",
          Type: type_user,
          _id: id_booking,
          Dormitory: dormitory,
        };
        localStorage.setItem("userList", JSON.stringify(getID));
        if (type_user == "customer") {
          router.push("/Homepage");
        } else if (type_user == "seller") {
          router.push("/dormManager");
        } else {
          router.push("/");
        }
      } catch (e) {
        console.log(error);
      }
    } else if (!user_login) {
      alert("Username Required.");
    } else if (!pass_login) {
      alert("Password Required.");
    } else if (!user_login && !pass_login) {
      alert("Password & Username are required.");
    } else {
      alert("Username or Password is Wrong.");
    }
  };

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
          <button className={styles.login_btn} type="submit">
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
