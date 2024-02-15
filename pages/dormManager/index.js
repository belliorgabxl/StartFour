import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Space from "@/components/SpaceTab";
import styles from "./dorm.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const getDormManager = async (id) => {
  const res = await fetch(`http://localhost:3000/api/FindManageDormID/${id}`, {
    cache:"no-store",
  });
  return res.json();
};

// ````````````````````````````````````
export default function IDroom() {
  const [user_id, setUserID] = useState("");
  const [id_booking_local , setIDBOOK] = useState('')
  const [manage, setManager] = useState(null);
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
      setIDBOOK(userList._id)
    } else {
      setUserID("none");
      setIDBOOK(userList._id)
    }
    getDormManager(userList.UserID).then((d) => {
      setManager(d);
    });
  }, []);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [NewpassportID, setID] = useState("");
  const [Newold, setOld] = useState("");
  const [Newphone_dorm, setPhone] = useState("");
  const [Newborn, setBorn] = useState("");
  const [Newaddress, setAddress] = useState("");
  const [Newdorm_name, setDormName] = useState("");
  const [Newfloor_amount, setFloor] = useState("");
  const [Newroom_amount, setRoom] = useState("");
  const [Newwater_unit, setWunit] = useState("");
  const [Newelec_unit, setEunit] = useState("");
  const [Newdorm_address, setDormAddress] = useState("");
  const find=  manage?._id;
  const booking_state = manage?.booking_status


const  sendDataCheck = async()=>{
    let Newname = fname+' '+lname;
    let birthday = document.getElementById("birth").value;
    let day = birthday.slice(8,10);
    let year =  birthday.slice(0,4);
    let month = birthday.slice(5,7);
    let birth = day+"/"+month+"/"+year
    let Newauthentical = "yes"
    setBorn(Newborn => Newborn = birth);
    const res = await fetch(`http://localhost:3000/api/FindManageDormID/${find}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({Newname,NewpassportID,Newold,Newphone_dorm,Newborn,Newaddress,Newdorm_name,Newfloor_amount,
        Newroom_amount,Newwater_unit,Newelec_unit,Newdorm_address,Newauthentical}),
    });
    if(res.ok)  {
      alert("ยืนยันตัวตนสำเร็จ")
      router.push("/");
    } else {
      alert("somthing wrong");
    }
  }
  const customer = "bell";
  return (
    <>
      {manage?.authentical == "yes" ? (
            <div className={styles.body}>
            <Navbar/>
            <div className={styles.container}>
            <div className={styles.Boxgrid}>
                    <Link href= "/dormManager/addRoom" className={styles.Box1}>
                        <img className={styles.icon} src="/addroom.png" width={100} height={100}></img>
                        <img className={styles.iconarrowbottom} src="/circle.png" width={20} height={20}></img>
                        <div className={styles.Text}>เพิ่มห้อง</div>
                    </Link>
                    <Link href= "/dormManager/check" className={styles.Box2}>
                        <img className={styles.icon} src="/checkview.png" width={100} height={100}></img>
                        <img className={styles.iconarrowbottom} src="/circle.png" width={20} height={20}></img>
                        <div className={styles.Text}>ตรวจสอบ</div>
                    </Link>
                </div>
                <div className={styles.Box}>
                    <Link href="/dormManager/manageRoom" className={styles.Box3}>
                        <img className={styles.iconarrowbottom1} src="/circle.png" width={20} height={20}></img>
                        <img className={styles.iconarrowbottom2} src="/edit.png" width={100} height={100}></img>
                        <div className={styles.Textbox}>แก้ไข</div>
                    </Link>
                </div>
            {booking_state == "alarm"? (
              <div className={styles.MailBox}>
                <Link href={"/dormManager/dormConfirm"} className={styles.alarmmail} >
                <div className={styles.mail}>
                        <img className={styles.mail_icon} src="/letter.png" width={150} height={120}></img>
                        <img className={styles.mailArrowbottom} src="/circle.png" width={20} height={20}></img>
                        <div className={styles.Textbox}>มีการจอง</div>
                </div>              
                </Link>
              </div>
            ):
            (
              <div className={styles.MailBox}>
                <div className={styles.mail}>
                        <img className={styles.mail_icon} src="/letter.png" width={150} height={120}></img>
                        <img className={styles.mailArrowbottom} src="/circle.png" width={20} height={20}></img>
                        <div className={styles.Textbox}>ยังไม่มีการจอง</div>
                </div>
              </div>
            )}
            </div>
            <Footer/>
        </div>
      ) : manage?.authentical == "none" ? (
        <div className={styles.body}>
          <Navbar></Navbar>
          <div className={styles.container}>
            <form className={styles.AuthenBox} onSubmit={sendDataCheck}>
              <h1 className={styles.Topic}>กรอกข้อมูลเพื่อยืนยันตัวตน</h1>
              <div className={styles.Form}>
                <div className={styles.line1}>
                  <div></div>
                  <span>
                    <label className={styles.label}>ชื่อจริง:</label>
                    <input
                      type="text"
                      placeholder="ชื่อจริง"
                      className={styles.inputBox}
                      onChange={(e) => setFname(e.target.value)}
                      value={fname}
                    />
                  </span>
                  <span>
                    <label className={styles.label}>นามสกุล:</label>
                    <input
                      type="text"
                      placeholder="นามสกุล"
                      className={styles.inputBox}
                      onChange={(e) => setLname(e.target.value)}
                      value={lname}
                    />
                  </span>
                </div>
                <div className={styles.line2}>
                  <div></div>
                  <span>
                    <label className={styles.label}>เลขบัตรประชาชน:</label>
                    <input
                      type="text"
                      className={styles.inputBox}
                      placeholder="13 หลัก"
                      maxLength={13}
                      onChange={(e) => setID(e.target.value)}
                      value={NewpassportID}
                    />
                  </span>
                  <span>
                    <label className={styles.label}>วันเกิด</label>
                    <input type="date" className={styles.date}
                    id="birth"/>
                  </span>
                  <span>
                    <label className={styles.label}>อายุ:</label>
                    <input
                      className={styles.old}
                      type="text"
                      placeholder="อายุ"
                      maxLength={2}
                      onChange={(e) => setOld(e.target.value)}
                      value={Newold}
                    />
                    <label>&nbsp;ปี</label>
                  </span>
                </div>
                <div className={styles.line3}>
                  <div></div>
                  <span>
                    <label className={styles.label}>เบอร์โทรศัพท์:</label>
                    <input
                      type="text"
                      placeholder="tel."
                      className={styles.inputBox}
                      onChange={(e) => setPhone(e.target.value)}
                      value={Newphone_dorm}
                    />
                  </span>
                </div>
                <div className={styles.line4}>
                  <div></div>
                  <label className={styles.label}>ที่อยู่:</label>
                  <textarea
                    type="text"
                    className={styles.AddressBox}
                    placeholder="กรอกข้อมูล..."
                    rows={3}
                    onChange={(e)=>setAddress(e.target.value)}
                    value={Newaddress}
                  />
                </div>
                <hr />
                <div className={styles.line5}>
                  <div></div>
                  <span>
                    <label className={styles.label}>ชื่ออาคารหอพัก : </label>
                    <input
                      className={styles.inputBox}
                      type="text"
                      placeholder="dormitory name"
                      onChange={(e)=>setDormName(e.target.value)}
                      value={Newdorm_name}
                    />
                  </span>
                </div>
                <div className={styles.line6}>
                  <div></div>
                  <span>
                    <label className={styles.label}>จำนวนห้อง : </label>
                    <input
                      className={styles.roomBox}
                      type="number"
                      placeholder="000"
                      min="0" max="200"
                      onChange={(e)=>setRoom(e.target.value)}
                      value={Newroom_amount}
                    />
                  </span>
                  <span>
                    <label className={styles.label}>จำนวนชั้น : </label>
                    <select className={styles.floor} onChange={(e)=>setFloor(e.target.value)}
                    value={Newfloor_amount}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </span>
                </div>
                <div className={styles.line7}>
                  <div></div>
                  <span>
                    <label className={styles.label}>ค่าน้ำต่อหน่วย</label>
                    <input
                      type="number"
                      className={styles.price_unit}
                      placeholder="฿"
                      min="0" max="20"
                      onChange={(e)=>setWunit(e.target.value)}
                      value={Newwater_unit}
                    />
                    <label className={styles.label}>
                      &nbsp;&nbsp;&nbsp;บาท
                    </label>
                  </span>
                </div>
                <div className={styles.line7}>
                  <div></div>
                  <span>
                    <label className={styles.label}>ค่าไฟต่อหน่วย</label>
                    <input
                      type="number"
                      className={styles.price_unit}
                      placeholder="฿"
                      min="0" max="20"
                      onChange={(e)=>setEunit(e.target.value)}
                      value={Newelec_unit}
                    />
                    <label className={styles.label}>
                      &nbsp;&nbsp;&nbsp;บาท
                    </label>
                  </span>
                </div>
                <div className={styles.line9}>
                  <div></div>
                  <label className={styles.label}>ที่อยู่หอ: </label>
                  <textarea
                    type="text"
                    className={styles.AddressBox}
                    placeholder="กรอกข้อมูล..."
                    rows={3}
                    onChange={(e)=>setDormAddress(e.target.value)}
                    value={Newdorm_address}
                  />
                </div>

              </div>
              <div>
                <button type="submit" className={styles.sendBtn}>ยืนยัน</button>
              </div>
            </form>
          </div>
          <Space />
          <Footer />
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}
