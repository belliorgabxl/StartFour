
export default function QRcode({params,id,own_dormitory,dorm_name}){
  return(
    <div>
      <h1> this is QRcode</h1>
      <hr/>
      <p> your params : {params}</p>
      <h1> your dorm : {dorm_name}</h1>
      <h1>{own_dormitory}</h1>
      {id}
    </div>
  )
}