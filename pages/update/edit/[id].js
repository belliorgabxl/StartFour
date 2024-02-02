import EditForm from "@/components/editform";
import { useRouter } from "next/router"

const getData =  async (id) =>{
  const res = await fetch(`http://localhost:3000/api/Dors/getDors/${id}`, {
    cache: "no-store",
  });
}

export default async  function Edit(){
  const router = useRouter();
  const id = router.query.id
  const {dormitory} = await getData(id)
  const  {price , dorm_name} =   dormitory;
  return(<EditForm id={id} price={price} dorm_name={dorm_name} />)
}