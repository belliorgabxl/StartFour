import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const getData = async (idname) => {
  const res = await fetch(`http://localhost:3000/api/FindManageRoom/${idname}`, {
    cache: "no-store",
  });
  return res.json();
};
export default function manageRoom() {
  const [user_id, setUserID] = useState("");
  const [user_state, setState] = useState("");
  const [user_type, setType] = useState("");
  const [dors, setDors] = useState(null);
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
      setState(userList.State);
      setType(userList.Type);
    }else{
      setUserID("none");
      setState("none");
      setType("none");
    }
    getData(userList.UserID).then((d) => {
      setDors(d);
    });
  }, []);
  return (
    <div>
      <div>
        <h1> Room manager page</h1>
        id name  : {user_id}
      </div>
      <div>

        {dors?.length > 0 ? (
          <div>
        {dors?.map((d) => (
          <Link href={"/dormManager/manageRoom/room/" + d._id}>
            <div>
              {d.dorm_name}
              {d.price}
              {d.type}
            </div>
          </Link>
        ))}</div> ): (<h1>opps no post  คุณยังไม่ได้เพิ่มหอ</h1>)  }

      </div>
    </div>
  );
}
