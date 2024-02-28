
import styles  from "./input.module.css"
import { useState } from "react";
import CreatePDF from "@/components/CreatePDF";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function InputBox(){

  const [firstName,setFname] = useState('');
  const [lastName,setLname] =  useState(""); 
  const [born , setBorn] = useState("");
  const [ U_ID,setU_ID] = useState("");
  const [sub , setSub ] = useState('');
  const [Age , setAge] = useState("");
  const [homeID ,setHome] =useState("");
  const [sectionHome,setSecHome] = useState("")
  const [sol,setSol] = useState("")
  const [road,setRoad] = useState("")
  const [city,setCity] = useState("")
  const [town,setTown] = useState("")
  const [state, setState] = useState("")
  const [postID ,setPostID] = useState("")
  const [faculty,setFac] = useState("")
  const [department,setDepart] = useState("")
  const [grad,setGrad] = useState("")
  const [student_ID ,setSID] = useState("")
  const [parentPhone,setParphone] = useState("");
  const [phone , setPhone] = useState('');

  const [room_ID,setRoom] = useState("");
  const [dormitory] = useState("JAIJAI-Place");
  const [dateBegin, setDateBegin] = useState("");
  const [dateEnd,  setDateEnd] = useState('');
  const [amount1 , setAmount1] =useState('6,500');
  const [priceWord1 , setPW1] =useState("หกพันห้าร้อยบาทถ้วน");
  const [amount2, setAmount2] =useState("13,000");
  const [priceWord2, setPW2] = useState("หนึ่งหมื่นสามพันบาทถ้วน")
  
  function Submit(){
    if(firstName || lastName || born || U_ID){
      setSub(true);
      let birthday = document.getElementById("birth").value;
      let day = birthday.slice(8,10);
      let year =  birthday.slice(0,4);
      let month = birthday.slice(5,7);
      let birth = day+"/"+month+"/"+year
      setBorn(born => born = birth);

      let BDay  = document.getElementById("beginDay").value;
      let B_day = BDay.slice(8,10);
      let B_month = BDay.slice(5,7);
      let B_year = BDay.slice(0,4);
      let BeginDay  = B_day+"/"+B_month+"/"+B_year
      setDateBegin(dateBegin=>dateBegin = BeginDay)
      
      let EDay  = document.getElementById("endDay").value;
      let E_day = EDay.slice(8,10);
      let E_month = EDay.slice(5,7);
      let E_year = EDay.slice(0,4);
      let Endday  = E_day+"/"+E_month+"/"+E_year
      setDateEnd(dateEnd => dateEnd = Endday);
      
    }
     else{alert("empty")}
  }
  return(
    <>
     
      {sub==false?  
      
      <div><Navbar/><div className={styles.body}>
        <div className={styles.head}>
          สัญญาออนไลน์
        </div>
        

      <form className={styles.form} >
        <div className={styles.formBox}>
          <div className={styles.topic}>ข้อมูลส่วนตัว</div>
          <div className={styles.line1}>
            <div></div>
            <span>
          <label className={styles.label}>ชื่อ:</label>
          <input className={styles.inputBox} type="text" placeholder="Firstname"
          onChange={ (e) => setFname(e.target.value)} value={firstName} maxLength={15}/>
          </span>
            <span>
              <label className={styles.label}>นามสกุล:</label>
              <input className={styles.inputBox} type="text" placeholder="Lastname"
              onChange={(e) => setLname(e.target.value)} value={lastName} maxLength={15}/>
            </span>
          </div>

        
          <div className={styles.line2}>
            <span>
              <label className={styles.label}>บัตรประชาชน</label>
              <input className={styles.inputBox} type="text" placeholder="บัตรประจำตัวประชาชน"
                onChange={(e) => setU_ID(e.target.value)}  value={U_ID} maxLength={13}/>
            </span>
           

          <span>
            <label className={styles.label}>วันเกิด</label>
            <input className={styles.inputBox} type="date" placeholder="born"id= "birth"/>
          </span>
          
          </div>
          
      
            <div className={styles.line3}>
              <div></div>
              <span>
                <label className={styles.label}>อายุ</label>
                <input className={styles.age} type="text" maxLength={2} placeholder="อายุ"
                onChange={(e) => setAge(e.target.value)} value={Age} />
                <label className={styles.label}>ปี</label>
              </span>
               <span>
                <label className={styles.label}>ชั้นปีที่ศึกษา</label>
              <input className={styles.grad} type="text" maxLength={1} 
              onChange={(e) => setGrad(e.target.value)} value={grad}
              placeholder="ปี" />
               </span>
               <span>
                <label className={styles.label}>ID</label>
                <input className={styles.inputBox} maxLength={8} type="text" placeholder="รหัสนักศึกษา"
                onChange={(e) => setSID(e.target.value)} value={student_ID} />
              </span>
            </div>

            <div className={styles.line4}>
            <div></div>
              <span>
              <label className={styles.label}>คณะ</label>
                <input className={styles.inputBox} type="text" placeholder="คณะ"
                onChange={(e) => setFac(e.target.value)} value={faculty} />
              </span>
              <span>
              <label className={styles.label}>ภาควิชา</label>
                <input className={styles.inputBox} type="text" placeholder="ภาควิชา"
                onChange={(e) => setDepart(e.target.value)} value={department} />
              </span>
  
            </div>

            <div className={styles.line5}>
              <div></div>
              <span>
              <label className={styles.label}>เบอร์โทร</label>
                <input className={styles.tel} maxLength={10} type="text" placeholder="tel."
                onChange={(e) => setPhone(e.target.value)} value={phone} />
              </span>
              <span>
              <label className={styles.label}>เบอร์ผู้ปกครอง</label>
                <input className={styles.tel} maxLength={10} type="text" placeholder="tel." 
                onChange={(e) => setParphone(e.target.value)} value={parentPhone}/>
              </span>
            </div>
        </div>


        <div className={styles.formBox}>

        <div className={styles.topic}>ที่อยู่ตามทะเบียนบ้าน</div>
          
        <div className={styles.line6}>
          <div></div>
          <span>
          <label className={styles.label}>บ้านเลขที่</label>
            <input className={styles.grad} maxLength={6} type="text" placeholder="/" 
            onChange={(e) => setHome(e.target.value)} value={homeID}/>
          </span>
          <span>
          <label className={styles.label}>หมู่ที่</label>
            <input className={styles.grad} maxLength={2} type="text" placeholder="หมู่" 
            onChange={(e) => setSecHome(e.target.value)} value={sectionHome}/>
          </span>
          <span>
          <label className={styles.label}>ซอย</label>
            <input className={styles.grad} maxLength={15} type="text" placeholder="ซอย" 
            onChange={(e) => setSol(e.target.value)} value={sol}/>
          </span>
        </div>
          
          <div className={styles.line7}>
            <div></div>
            <span>
            <label className={styles.label}>ถนน</label>
              <input className={styles.address} type="text" placeholder="......" 
              onChange={(e) => setRoad(e.target.value)} value={road}/>
            </span>
            <span>
            <label className={styles.label}>ตำบล/แขวง</label>
              <input className={styles.address} type="text" placeholder="......" 
              onChange={(e) => setTown(e.target.value)} value={town}/>
            </span>
          </div>

          <div className={styles.line8}> 
          <div></div>
            <span>
              <label className={styles.label}>อำเภอ/เขต</label>
              <input className={styles.address} type="text" placeholder="......"
              onChange={(e) => setCity(e.target.value)} value={city} />
            </span>
            <span>
            <label className={styles.label}>จังหวัด</label>
              <input className={styles.state} type="text" placeholder="......" 
              onChange={(e) => setState(e.target.value)} value={state}/> 
            </span>
          </div>
        
        <div className={styles.line9}>
          <div></div>
          <span>
            <label className={styles.label}>รหัสไปรษณีย์</label>
          <input className={styles.postid} type="text" placeholder="00000" 
          onChange={(e) => setPostID(e.target.value)} value={postID}/>
          </span>
          
        </div>
    
        </div>
        
        
        <div className={styles.formBox}>

          <div className={styles.topic}>หอพัก</div>
          <div className={styles.line10}>
            <div></div>
            <span>
            <label className={styles.label}>หอพัก:</label>
            <select className={styles.dorm} value={dormitory}
              onChange={e => setRoom(e.target.value)}>
              <option value="JAI-JAI Place">JAI-JAI Place</option>
            </select>
            </span>
            <span>
            <label className={styles.label}>เลขห้อง:</label>
            <select className={styles.room} value={room_ID}
              onChange={e => setRoom(e.target.value)}>
              <option value="1301">1301</option>
              <option value="1104">1104</option>
              <option value="1217">1217</option>
            </select>
            </span>
            <span>
              <label className={styles.label}>ชั้น:
              &nbsp;&nbsp;&nbsp;&nbsp;{room_ID[1]}</label>
            </span>
          </div>
          <div className={styles.line11}>
            <div></div>
              <span>
              <label className={styles.label}>วันเริ่มเช่า:</label>
                <input className={styles.dateBox} type="date" id="beginDay"/>
              </span>
              <span>
              <label className={styles.label}>วันสิ้นสุดการเช่า:</label>
                <input className={styles.dateBox} type="date" id="endDay"/>
              </span>
        
          </div>
        </div>

        <div className={styles.formBox}>
          <div className={styles.topic}>ข้อตกลงสัญญา</div>
          

          <div className={styles.line12}><div></div>
            <label className={styles.label}>ผู้เช่าได้อ่านข้อตกลงสัญญา
        ..............................................บลาๆๆๆ</label>
          </div>

          <div className={styles.line13}><div></div>
          <span>
            <label className={styles.label}>ค่าเช่าหอพักต่อเดือน:</label>
            <div className={styles.price} >{amount1}</div>
            
          </span>
          <span>
            <div className={styles.priceword}>
            {priceWord1}
            </div>
          </span>
          </div>

          <div className={styles.line14}><div></div>
          <span>
            <label className={styles.label}>ค่าประกันหอพัก:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <div className={styles.price} >{amount2}</div>
            
          </span>
          <span>
          <div className={styles.priceword}>
            {priceWord2}
            </div>
          </span>
          </div>

          <div className={styles.agree} >
            <div></div>
            <span>
              <input className={styles.rd}
            type="radio"  name="status"  value="yes"/>
            <label className={styles.label}>ยินยอม</label>
            </span>
          
          <span>
            <input className={styles.rd}
            type="radio" name="status" value="no"/>
            <label className={styles.label}>ไม่ยินยอม</label>
          </span>   
          </div>
      

        </div>
        
      
      <div className={styles.btnZone}>
         <button className={styles.btn} type="submit" onClick={Submit}>submit</button>
      </div>
      
      </form> 
      </div><Footer/></div>


      : <CreatePDF 
       firstName={firstName} lastName={lastName} born={born} U_ID={U_ID} Age={Age}
       homeID={homeID} sectionHome={sectionHome} sol={sol} road={road} city={city}
       town={town} state={state} postID={postID} faculty={faculty} department={department}
       grad={grad} student_ID={student_ID} parentPhone={parentPhone} room_ID={room_ID}
       dateBegin={dateBegin} dateEnd={dateEnd} dormitory={dormitory} amount1={amount1} amount2={amount2}
       priceWord1={priceWord1}  priceWord2={priceWord2}
       /> }
    </>
  )
}



      
