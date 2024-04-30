import { useEffect ,useState } from "react"


const getData= async()=>{
  const res = await fetch("http://localhost:5250/swagger/v1/swagger.json")
  return res.json()
}

export default function AddBook(){
  const [data , setData] = useState([]);
  useEffect(()=>{
    getData().then((d)=>{
      setData(d)
    })
  },[])
  console.log(data)
  return(
    <div>
      <h1>AddBook</h1>
    </div>
  )
}