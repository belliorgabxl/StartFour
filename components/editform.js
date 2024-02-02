

export default function EditForm({dorm_name , id ,price}){
  return(
    <form>
      <h1>{id}</h1>
      <h1>{dorm_name}</h1>
      <h1>{price}</h1>
      <input type="text" placeholder="word"/>
    </form>
  )
}