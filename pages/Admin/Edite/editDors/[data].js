import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./edit.module.css"

const getData=async()=>{
  const res = await fetch(`/api/getDors`)
  return res.json()
}

export default function EditeDors(){
  const [dors , setDors] = useState([]);
  const [dorm_name ,setDormname] = useState();
  const [price , setPrice] =useState();
  useEffect(()=>{
    getData().then((d)=>{
      setDors(d);
    })
  },[])

  const router = useRouter();
  const id_data = router.query.data;

  const id_list = [];
  const dorm_name_list= [];
  const type_list =[];
  const price_list=[]
  const location_list=[]
  const img_list = [ ]
  const lat_list = []
  const long_list =[]
  const time_list =[]
  const detail_list=[]
  const create_by_list=[]
  const createdAt_list=[]
  const updatedAt_list =[]

  let dorm_name_let = '' , type_let = '' , price_let = ''  , location_let=''
  let img_let ='' , lat_let ='' ,long_let='',time_let = '' , detail_let =''
  let create_by_let = '' , create = '' ,update=''

  dors?.dormitory?.map((d)=>{
    id_list.push(d._id),dorm_name_list.push(d.dorm_name),type_list.push(d.type),price_list.push(d.price),
    location_list.push(d.location),img_list.push(d.img),lat_list.push(d.lat),long_list.push(d.long),
    time_list.push(d.time),detail_list.push(d.detail),create_by_list.push(d.create_by)
    ,createdAt_list.push(d.createdAt) , updatedAt_list.push(d.updatedAt)
  });
  for(let i  =0   ; i < id_list.length; i++){
    if(id_list[i] == id_data){
      dorm_name_let = dorm_name_list[i]
      type_let = type_list[i]
      price_let = price_list[i]
      location_let = location_list[i]
      img_let = img_list[i]
      lat_let = lat_list[i]
      long_let=long_list[i]
      time_let= time_list[i]
      detail_let = detail_list[i]
      create_by_let = create_by_list[i]
      create = createdAt_list[i]
      update= updatedAt_list[i]
    }
  }

  async function formSubmit(e){
    e.preventDefault();
  }

  return(
    <div className={styles.body}>
       <nav className={styles.nav}>
        <a href="/Admin/Database/Dormitory" className={styles.navBtn}>
          Back to Table
        </a>
        <div></div><div></div>
      </nav>
      <div className={styles.container}>
      <form className={styles.form}  onSubmit={formSubmit}>
        <div className={styles.topic}>
          Dormitory Configuration : {dorm_name}
        </div>
        <div className={styles.formArea}>
          <div className={styles.inputArea}>
                <label className={styles.label}>dormitory name: </label>
                <input className={styles.inputBox} type="text" placeholder={dorm_name_let}/>
                <label className={styles.label}>type: </label>
                <input className={styles.inputBox} type="text" placeholder={type_let}/>
                <label className={styles.label}>price: </label>
                <input className={styles.inputBox} type="text" placeholder={price_let}/>
                <label className={styles.label}>location: </label>
                <textarea rows={4} className={styles.textBox} type="text" placeholder={location_let}/>
                <label className={styles.label}>detail: </label>
                <textarea rows={4} className={styles.textBox} type="text" placeholder={detail_let}/>
                <label className={styles.label}>lat: </label>
                <input className={styles.inputBox} type="text" placeholder={lat_let}/>
                <label className={styles.label}>long: </label>
                <input className={styles.inputBox} type="text" placeholder={long_let}/>
                <label className={styles.label}>time: </label>
                <input className={styles.inputBox} type="text" placeholder={time_let}/>
                <label className={styles.label}>create by: </label>
                <input className={styles.inputBox} type="text" placeholder={create_by_let}/>



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