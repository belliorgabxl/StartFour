import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./edit.module.css"

const getUser= async(id)=>{
  const res = await fetch(`/api/getUser`)
  return res.json()
}
export default function editeUser(){
  const route= useRouter();
  const id_data = route.query.data;
  const [user ,setUser]  =  useState(null);
  useEffect(()=>{
    getUser().then((d)=>{
      setUser(d);
    })
  },[])
  const id_list = [],username_list =[],password_list = [] ,email_list =[]
  const name_list  =[],state_list=[],phone_list=[] , dormitory_list =[]
  const update_list=[] ,create_list=[]
  user?.map((d)=>{
    id_list.push(d._id),
    username_list.push(d.username),
    password_list.push(d.password),
    name_list.push(d.name),
    email_list.push(d.email),
    dormitory_list.push(d.dormitory),
    state_list.push(d.state),
    phone_list.push(d.phone),create_list.push(d.createdAt),
    update_list.push(d.updatedAt)
  })
let username_let='' ,password_let='' , email_let = '',phone_let='', name_let=''
let state_let = ''  ,  dormitory_let=''  ,update='' , create=''
const [NewUsername ,setUsername] = useState();
const [NewPassword , setPassword] = useState();
const [NewEmail , setEmail ] = useState();
const [NewPhone , setPhone ] = useState();
const [NewState , setState ] = useState();
const [NewName , setName ] = useState();
const [NewDormitory , setDormitory ] = useState();
for(let i =0;i<id_list.length;i++){
  if(id_data==id_list[i]){
    username_let = username_list[i]
    password_let = password_list[i]
    email_let = email_list[i]
    phone_let= phone_list[i]
    state_let = state_list[i]
    name_let  = name_list[i]
    dormitory_let = dormitory_list[i]
    update = update_list[i]
    create=create_list[i]
    break
  }
}

async function formSubmit(e){
  e.preventDefault();
  let UpUsername = ''
  let UpName = ''
  let UpPassword=''
  let UpPhone = ''
  let UpEmail ='' 
  let UpState = '' 
  let UpDormitory = ''
  if(!NewUsername){
    UpUsername  = username_let
  }else{UpUsername=  NewUsername}
  if(!NewPassword){
    UpPassword = password_let
  }else{UpPassword=  NewPassword}
  if(!NewEmail){UpEmail = email_let}else{UpEmail = NewEmail}
  if(!NewPhone){UpPhone=phone_let}else{UpPhone = NewPhone}
  if(!NewState){UpState= state_let}else{UpState = NewState}
  if(!NewName){UpName = name_let}else{UpName = NewName}
  if(!NewDormitory){UpDormitory = dormitory_let}else{UpDormitory  =NewDormitory}
  alert("Confirm?")

  try {
    const res = await fetch(`/api/edite/editeUser/${id_data}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ UpUsername,
        UpPassword 
        ,UpEmail ,
         UpPhone ,
          UpDormitory
          ,UpName ,
           UpState
           }),
    });
    if (res.ok) {
     route.push("/Admin/Database/User")
    }
  } catch (error) {
    alert("don't success"+error)
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
      <form className={styles.form}  onSubmit={formSubmit}>
        <div className={styles.topic}>
          User Configuration
        </div>
        <div className={styles.formArea}>
          <div className={styles.inputArea}>
              <label className={styles.label}>Username:</label>
              <input className={styles.inputBox} type="text" onChange={(e)=>setUsername(e.target.value)}
              value={NewUsername}  placeholder={username_let}  />
              <label className={styles.label}>Password:</label>
              <input  className={styles.inputBox} type="text" onChange={(e)=>setPassword(e.target.value)}
              value={NewPassword}  placeholder={password_let}/>
              <label className={styles.label}>Email:</label>
              <input  className={styles.inputBox} type="text" onChange={(e)=>setEmail(e.target.value)}
              value={NewEmail}  placeholder={email_let}/>
              <label className={styles.label}>Name:</label>
              <input  className={styles.inputBox} type="text" onChange={(e)=>setName(e.target.value)}
              value={NewName}  placeholder={name_let}/>
              <label className={styles.label}>Phone:</label>
              <input  className={styles.inputBox} type="text" onChange={(e)=>setPhone(e.target.value)}
              value={NewPhone}  placeholder={phone_let}/>
              <label className={styles.label}>State:</label>
              <input  className={styles.inputBox} type="text" onChange={(e)=>setState(e.target.value)}
              value={NewState}  placeholder={state_let}/>
              <label className={styles.label}>Dormitory:</label>
              <input  className={styles.inputBox} type="text" onChange={(e)=>setDormitory(e.target.value)}
              value={NewDormitory}  placeholder={dormitory_let}/>
          </div>
          <div className={styles.rightArea}>
            <div></div>
            <div className={styles.btnArea}>
              <button type="submit" className={styles.btnEdite}>Edite</button>
            </div>
            <div className={styles.create}>
              <p>Create At : {create.slice(8,10)}/{create.slice(5,7)}/{create.slice(0,4)} time: 
              {create.slice(11,19)}</p>
              <p>Update At : {update.slice(8,10)}/{update.slice(5,7)}/{update.slice(0,4)} time: 
              {update.slice(11,19)}</p>
            </div>
            <div></div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}