import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./post.module.css";
import { supabase } from "@/libs/supabase";

const getPost = async () => {
  const res = await fetch("/api/getPost", {
    cache: "no-store",
  });
  return res.json();
};
const getUser = async () => {
  const res = await fetch("/api/getUser", {
    cache: "no-store",
  });
  return res.json();
};

export default function PostRoom() {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const user_id = router.query.id;
  useEffect(() => {
    getPost().then((p) => {
      setPost(p);
    });
    getUser().then((u) => {
      setUser(u);
    });
  }, []);
  const username_list = [];
  const phone_list = [];
  const name_list = [];
  let phone_user = "";
  let name_user = "";
  {
    user?.map((u) => {
      username_list.push(u.username),
        phone_list.push(u.phone),
        name_list.push(u.name);
    });
  }
  for (let i = 0; i < username_list.length; i++) {
    if (user_id == username_list[i]) {
      name_user = name_list[i];
      phone_user = phone_list[i];
    }
  }
  const IDpass_list = [];
  const address_list = [];
  const file_ID_list = [];
  const dorm_name_list = [];
  const user_post_list = [];
  const price_m_list = [];
  const price_rent_list = [];
  const type_list = [];
  const img_list = [];
  const location_list = [];
  const ID_room_list = [];
  const floor_list = [];
  const authentic_list = [];
  const post_list=[]
  let postes=''
  let IDpassport = "";
  let address = "";
  let file_ID = "";
  let dorm_name = "";
  let user_post = user;
  let price_m = "";
  let price_rent = "";
  let type = "";
  let img = "";
  let location = "";
  let ID_room = "";
  let floor = "";
  let authentic = "a";
  {
    post?.map((d) => {
      IDpass_list.push(d.IDpassport),
        address_list.push(d).address,
        file_ID_list.push(d.file_ID),
        dorm_name_list.push(d.dorm_name),
        price_m_list.push(d.price_m),
        price_rent_list.push(d.price_rent),
        type_list.push(d.type),
        img_list.push(d.img),
        location_list.push(d.location),
        ID_room_list.push(d.ID_room),
        floor_list.push(d.floor),
        authentic_list.push(d.authentic),
        user_post_list.push(d.user_post),
        post_list.push(d.post)
    });
  }
  for (let i = 0; i < user_post_list.length; i++) {
    if (user_id == user_post_list[i]) {
      IDpassport = IDpass_list[i];
      address = address_list[i];
      file_ID = file_ID_list[i];
      dorm_name = dorm_name_list[i];
      price_m = price_m_list[i];
      price_rent = price_rent_list[i];
      type = type_list[i];
      img = img_list[i];
      location = location_list[i];
      ID_room = ID_room_list[i];
      floor = floor_list[i];
      authentic = authentic_list[i];
      postes = post_list[i]
    }
  }
  const [authenID, setAID] = useState();
  const [authenAddress, setAAdress] = useState();
  async function AuthenticBtn(e) {
    e.preventDefault();
    try {
      let state = document.querySelector('input[name="status"]:checked').value;
      if (state == "yes") {
        const formData = new FormData(e.currentTarget);
        formData.getAll("passport");
        const pathfile_passport = "/passport:" + user_id + ".png";
        const { data, error } = await supabase.storage
          .from("passportFile")
          .upload(pathfile_passport, formData);
        let NewIDpassport = authenID;
        let NewAdress = authenAddress;
        let Newfile_ID ="https://kmaderbohtpzmtunqlbx.supabase.co/storage/v1/object/public/passportFile"+pathfile_passport;
        let NewAuthentical = "yes";
        const res = await fetch(`/api/PostAPI/UpdateAuthen/${user_id}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            NewAdress,
            NewIDpassport,
            Newfile_ID,
            NewAuthentical
          }),
        });
        router.push("/Homepage");
      } else {
        alert("โปรดยอมรับข้อตกลง");
      }
    } catch(e) {
      alert("โปรดเลือกความยินยอมข้อตกลง"+e);
    }
  }
const [Newdorm_name , setDorm] = useState();
const [Newprice_m,setPm] = useState();
const [Newprice_rent,setPr] =useState();
const [Newtype , setType] = useState();
const [Newdetail,setDetail] = useState();
const [Newlocation , setLocat] = useState();
const [NewID_room ,setIDroom] =useState();
const [Newfloor , setFloor] = useState();


async function PostBtn(e){
  e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.getAll("img_post");
        const pathfile_postImg = "/postImg:" + user_id + ".jpg";
        if (postes == "yes"){
          const { data, error } = await supabase.storage
          .from("postImage")
          .update(pathfile_postImg, formData);
        }
        if(postes == "none"){
          const { data, error } = await supabase.storage
          .from("postImage")
          .upload(pathfile_postImg, formData);
        }
        let Newpost= 'yes';
        let Newimg ="https://kmaderbohtpzmtunqlbx.supabase.co/storage/v1/object/public/postImage"+pathfile_postImg;
        const res = await fetch(`/api/PostAPI/CreatePost/${user_id}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            Newimg,
            Newdorm_name,
            Newprice_m,
            Newprice_rent,
            Newtype,
            Newdetail,
            Newlocation,
            NewID_room,
            Newfloor,
            Newpost
          }),
        });
        router.push("/Homepage");
}
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.container}>
        {authentic == "none" ? (
          <div className={styles.AuthenticBox}>
            <form className={styles.Form} onSubmit={AuthenticBtn}>
              <div className={styles.topic}>ยืนยันตัวตน</div>
              <div className={styles.FormBox}>
                <div className={styles.line1}>
                  <div></div>
                  <span>
                    <label className={styles.label}>ชื่อ-นามสกุล:</label>
                    <input
                      className={styles.inputLine1}
                      type="text"
                      defaultValue={name_user}
                    />
                  </span>
                  <span>
                    <label className={styles.label}>บัตรประชาชน:</label>
                    <input
                      className={styles.inputLine1}
                      maxLength={13}
                      type="text"
                      placeholder="เลขบัตรประชาชน"
                      onChange={(e) => setAID(e.target.value)}
                      value={authenID}
                    />
                  </span>
                </div>
                <div className={styles.line2}>
                  <span>
                    <label className={styles.label}>เบอร์ติดต่อ:</label>
                    <input
                      className={styles.inputLine1}
                      type="text"
                      defaultValue={phone_user}
                    />
                  </span>
                  <span>
                    <input
                      className={styles.file_ID}
                      type="file"
                      name="passport"
                    />
                    <div className={styles.tagfile_ID}>
                      ***กรุณาแนบหลับฐานสำเนาบัตรประชาชน***
                    </div>
                  </span>
                </div>
                <div className={styles.line3}>
                  <div></div>
                  <label className={styles.label}>ที่อยู่:</label>
                  <textarea
                    className={styles.addressArea}
                    rows={3}
                    onChange={(e) => setAAdress(e.target.value)}
                    value={authenAddress}
                  />
                </div>
                <hr className={styles.line} />
                <div className={styles.rule}>
                  <div className={styles.topicRule}>
                    *** ข้อตกลงการใช้งานร่วมกันละหว่างผู้ใช้ ***
                  </div>
                  <div className={styles.contentRule}>
                    1.ยินยอมให้เข้าถึงข้อมูลส่วนตัวของผู้ใช้ที่บันทึกไว้ในระบบเพื่อความจำเป็นต่อการใช้งาน
                    <br />
                    2.ให้ข้อมูลที่ถูกต้องตรงความเป็นจริง
                    เพื่อความปลอดภัยระหว่างผู้ใช้และการยืนยันตัวตนรวม
                    <br />
                    &nbsp;&nbsp;
                    ไปถึงป้องกันการทุจริตที่เกิดขึ้นต่อผู้ใช้ร่วมกัน
                    <br />
                    3.บันทึกข้อมูลชำระเงินของคุณที่เกิดขึ้นในระบบ
                    เพื่อบริการและความต่อเนื่องของการใช้งาน
                    <br />
                    4.ยินยอมให้จัดเก็บข้อมูลการเข้าสู่ระบบและข้อมูลการติดต่อของคุณสำหรับการเข้าสู่ระบบและ
                    <br />
                    &nbsp;&nbsp;
                    การสำรองข้อมูลของผู้ใช้เมื่อมีการสูญหายหรือการลบบัญชีผู้ใช้
                    <br />
                    5.ไม่ร่วมกันหรือโพสขายหลอกลวงเพื่อให้ข้อมูลที่ไม่เป็นความจริงต่อผู็ใช้ให้เกิดความเสียหาย
                  </div>
                </div>
                <div className={styles.agree}>
                  <div></div>
                  <span>
                    <input type="radio" name="status" value="yes" />
                    <label className={styles.label}>ยินยอม</label>
                  </span>
                  <span>
                    <input type="radio" name="status" value="no" />
                    <label className={styles.label}>ไม่ยินยอม</label>
                  </span>
                  <div></div>
                </div>
                <div className={styles.btnArea}>
                  <button type="submit" className={styles.authenticBtn}>
                    ยืนยัน
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : authentic == "yes" ? (
          <form className={styles.PostBox} onSubmit={PostBtn}>
            <div className={styles.topicPost}>
              ประกาศขายห้องของคุณ
            </div>
            <div className={styles.PostForm}>
              <div className={styles.imgPostBox}>
                  <input className={styles.imgPost} type="file" id="file" name="img_post"
                  accept="image/*"/>
                  <label for="file" className={styles.imgFake}>
                    <div></div>
                    <img src="/add.png" width={40} height={40}/>
                    เพิ่มรูปภาพ</label>
              </div>
              <div>
                <div className={styles.line4}>
                  <div></div>
                  <span>
                    <label className={styles.label}>ชื่อหอพัก :</label>
                  <input className={styles.post_dormname} type="text" placeholder="ชื่อหอพัก"
                  onChange={(e)=>setDorm(e.target.value)} value={Newdorm_name}/>
                  </span>
                  <span>
                    <label className={styles.label}>เลขห้อง:</label>
                    <input className={styles.post_roomID} type="text"
                     onChange={(e)=>setIDroom(e.target.value)} value={NewID_room}/>
                  </span>
                  <span>
                    <label className={styles.label}>ชั้น:</label>
                    <input className={styles.post_floor} min={0} max={7} type="number"
                    onChange={(e)=>setFloor(e.target.value)} value={Newfloor} />
                  </span>
                </div>
                <div className={styles.line5}>
                  <div></div>
                  <span>
                    <label className={styles.label}>ราคาต่อเดือน :</label>
                    <input className={styles.post_price} type="text" placeholder="..."
                    onChange={(e)=>setPm(e.target.value)} value={Newprice_m}/> 
                  </span>
                  <span>
                    <label className={styles.label}>ค่าสัญญาหอ :</label>
                    <input className={styles.post_price}  type="text" placeholder="..."
                    onChange={(e)=>setPr(e.target.value)} value={Newprice_rent}/>
                  </span>
                </div>
                <div className={styles.line6}>
                  <div></div>
                  <span>
                    <label className={styles.label}>ประเภทห้อง : </label>
                    <input className={styles.post_dormname} type="text" placeholder="type"
                    onChange={(e)=>setType(e.target.value)} value={Newtype}/>
                  </span>
                </div>
                <div className={styles.line7}>
                  <div></div>
                  <div></div>
                  <label className={styles.label}>ที่อยู่:</label>
                  <textarea placeholder="..."
                    className={styles.Post_addressArea} rows={3}
                    onChange={(e)=>setLocat(e.target.value)} value={Newlocation}
                  />
                </div>
                <div className={styles.line8}>
                  <div></div>
                  <label className={styles.label}>ข้อมูลหอพัก:</label>
                  <textarea placeholder="..."
                    className={styles.Post_addressArea} rows={4}
                    onChange={(e)=>setDetail(e.target.value)} value={Newdetail}
                  />
                </div>
              </div>
            </div>
            <div className={styles.btnArea_post}>
                   <button className={styles.PostBtn} type="submit">Post</button>
            </div>
          </form>
        ) : (
          <div>
            <h1>Loading</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
