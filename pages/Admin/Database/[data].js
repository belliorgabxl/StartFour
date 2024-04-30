import { useRouter } from "next/router"
import styles from "./db.module.css"
import { useState , useEffect} from "react"
import Footer from "@/components/Footer"
import editeUser from "../Edite/editUser/[data]"


const getUser= async()=>{
  const res = await fetch("/api/getUser")
  return res.json()
}
const getPost = async()=>{
  const res = await fetch("/api/getPost")
  return res.json()
}
const getBook = async()=>{
  const res = await fetch("/api/getBooking")
  return res.json()
}
const getDors = async()=>{
  const res = await fetch("/api/getDors", {
    cache: "no-store",
  });
  return res.json()
}
const getDorsManage = async()=>{
  const res = await fetch("/api/getDorsManage")
  return res.json()
}

export default function DatabaseManage(){
  const router =  useRouter()
  const database = router.query.data
  const [user  , setUser] = useState([]);
  const [dors , setDors] = useState([]);
  const [dorsMNM , setDorsMNM ] = useState([]);
  const [post , setPost ] = useState([]);
  const [ book , setBook ] = useState([]);
  useEffect(()=>{
    getUser().then((u)=>{
      setUser(u)
    })
    getDors().then((u)=>{
      setDors(u)
    })
    getPost().then((d)=>{
      setPost(d)
    })
    getDorsManage().then((d)=>{
      setDorsMNM(d)
    })
    getBook().then((d)=>{
      setBook(d)
    })
  },[])
  let i = 0;
  const route = useRouter();
const deleteUser = async(e)=>{
  const confirmed = confirm("Are you sure?");
  if(confirmed){
    const res = await fetch(`/api/delete/deleteUser/${e.target.value}`, {
      method: "DELETE",
    }); 
    if(res.ok){
      route.reload();
    }
  }
}
const deleteDors = async(e)=>{
  const confirmed = confirm("Are you sure?");
  if(confirmed){
    const res = await fetch(`/api/delete/deleteDors/${e.target.value}`, {
      method: "DELETE",
    }); 
    if(res.ok){
      route.reload();
    }
  }
}
const deleteBook = async(e)=>{
  const confirmed = confirm("Are you sure?");
  if(confirmed){
    const res = await fetch(`/api/delete/deleteBook/${e.target.value}`, {
      method: "DELETE",
    }); 
    if(res.ok){
      route.reload();
    }
  }
}
const deletePost= async(e)=>{
  const confirmed = confirm("Are you sure?");
  if(confirmed){
    const res = await fetch(`/api/delete/deletePost/${e.target.value}`, {
      method: "DELETE",
    }); 
    if(res.ok){
      route.reload();
    }
  }
}
const deleteDorMNM= async(e)=>{
  const confirmed = confirm("Are you sure?");
  if(confirmed){
    const res = await fetch(`/api/delete/deleteDorMNM/${e.target.value}`, {
      method: "DELETE",
    }); 
    if(res.ok){
      route.reload();
    }
  }
}
const editUserBtn=async(e)=>{
  route.push("/Admin/Edite/editUser/"+e.target.value)
}
const editeDorBtn = async(e)=>{
  route.push("/Admin/Edite/editDors/"+e.target.value)
}
const addBtn = (e)=>{
  route.push("/Admin/Add/"+e.target.value)
}

const RefreshBtn =()=>{
  route.reload();
}
  return(
    <div className={styles.body}>
      <nav className={styles.nav}>
        <a href="/Admin" className={styles.navBtn}>
          Back to Admin
        </a>
        <div></div><div></div>
      </nav>
      <div className={styles.container}>
        <h1 className={styles.topic}>{database} Table</h1>
        { database == "User" ?(
          <div className={styles.Area}>
          <div className={styles.toolBtn}>
          <div>
            <button onClick={addBtn}
             value="addUser" className={styles.btnTools}>Add+</button>
          </div>
          <div>
            <button onClick={RefreshBtn} className={styles.btnTools}>Refresh</button>
          </div>
        </div>
          <div className={styles.Table}>
            <div className={styles.thead}>
              <div className={styles.th}>No.</div>
              <div className={styles.th}>Username</div>
              <div className={styles.th}>Password</div>
              <div className={styles.th}>email</div>
              <div className={styles.th}>Name</div>
              <div className={styles.th}>State</div>
              <div className={styles.th}>dormitory</div>
              <div className={styles.th}>CreateAt</div>
              <div className={styles.th}></div>
            </div>
            <div className={styles.TableBody}>
              {user?.map((d)=>(
                <div key={d._id} className={styles.tr}>
                  <div className={styles.td}><div className={styles.tdNum}>{i+=1}.</div></div>
                  <div className={styles.td}>{d.username}</div>
                  <div className={styles.td}>{d.password}</div>
                  <div className={styles.td}>{d.email}</div>
                  <div className={styles.td}>{d.name}</div>
                  <div className={styles.td}>{d.state}</div>
                  <div className={styles.td}>{d.dormitory}</div>
                  <div className={styles.td}>{d.createdAt.slice(8,10)}/
                  {d.createdAt.slice(5,7)}/{d.createdAt.slice(0,4)} +
                  {d.createdAt.slice(11,19)}</div>
                  <div className={styles.tdAction}><div></div>
                    <button onClick={editUserBtn}
                     className={styles.editeBtn}value={d._id}>
                      Edite
                    </button>
                    <button onClick={deleteUser}
                     value={d._id} className={styles.deleteBtn}>
                      Delete
                    </button><div></div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
          </div>
        ): database== "Dormitory" ?(
          <div className={styles.Area}>
            <div className={styles.toolBtn}>
            <div>
            <button onClick={addBtn}
            value="addDors" className={styles.btnTools}>Add+</button>
            </div>
            <div>
            <button onClick={RefreshBtn} className={styles.btnTools}>Refresh</button>
            </div>
            </div>
          <div className={styles.Table}>
            <div className={styles.thead2}>
              <div className={styles.th}>No.</div>
              <div className={styles.th}>Dorm_name</div>
              <div className={styles.th}>Type</div>
              <div className={styles.th}>Location</div>
              <div className={styles.th}>Image</div>
              <div className={styles.th}>Price</div>
              <div className={styles.th}>lat,long</div>
              <div className={styles.th}>Time</div>
              <div className={styles.th}>Detail</div>
              <div className={styles.th}>Create_by</div>
              <div className={styles.th}>Action</div>
            </div>
          <div className={styles.TableBody}>
            {dors?.dormitory?.map((d)=>(
              <div key={d._id} className={styles.tr2}>
                <div className={styles.td}>
                  <div className={styles.tdNum}>{i+=1}.</div>
                </div>
                <div className={styles.td}>{d.dorm_name}</div>
                <div className={styles.td}>{d.type}</div>
                <div className={styles.td}>{d.location.slice(0,12)}...</div>
                <div className={styles.td}>{d.img.slice(0,12)}...</div>
                <div className={styles.td}>{d.price}</div>
                <div className={styles.td}>{d.lat.slice(0,7)}:{d.long.slice(0,7)}</div>
                <div className={styles.td}>{d.time}</div>
                <div className={styles.td}>{d.detail.slice(0,22)}..</div>
                <div className={styles.td}>{d.create_by}</div>
                <div className={styles.tdAction}><div></div>
                    <button onClick={editeDorBtn}
                     className={styles.editeBtn}value={d._id}>
                      Edite
                    </button>
                    <button onClick={deleteDors}
                     value={d._id} className={styles.deleteBtn}>
                      Delete
                    </button><div></div>
                  </div>
              </div>
            ))}
          </div>
          </div>
          </div>
        ): database == "Book"?(
          <div className={styles.Area}>
        <div className={styles.toolBtn}>
          <div>
            <button onClick={addBtn}
             value="addBook" className={styles.btnTools}>Add+</button>
          </div>
          <div>
            <button onClick={RefreshBtn} className={styles.btnTools}>Refresh</button>
          </div>
        </div>
          <div className={styles.Table}>
            <div className={styles.thead3}>
              <div className={styles.th}>No.</div>
              <div className={styles.th}>User_Book</div>
              <div className={styles.th}>Own_dorm</div>
              <div className={styles.th}>Dorm_name</div>
              <div className={styles.th}>ID_ROOM</div>
              <div className={styles.th}>Price</div>
              <div className={styles.th}>Booking</div>
              <div className={styles.th}>access1</div>
              <div className={styles.th}>access2</div>
              <div className={styles.th}>Notice</div>
              <div className={styles.th}>Config</div>
            </div>
            <div className={styles.TableBody}>
              {book?.map((d)=>(
                <div key={d._id} className={styles.tr3}>
                  <div className={styles.td}>
                    <div className={styles.tdNum}>{i+=1}.</div>
                  </div>
                  <div className={styles.td}>{d.user_booking}</div>
                  <div className={styles.td}>{d.own_dormitory}</div>
                  <div className={styles.td}>{d.dorm_name}</div>
                  <div className={styles.td}>{d.id_room.slice(0,15)}...</div>
                  <div className={styles.td}>{d.price}</div>
                  <div className={styles.td}>{d.booking}</div>
                  <div className={styles.td}>{d.access1.slice(0,7)}</div>
                  <div className={styles.td}>{d.access2}</div>
                  <div className={styles.td}>{d.notic}</div>
                  <div className={styles.tdAction}><div></div>
                    <button className={styles.editeBtn}value={d._id}>
                      Edite
                    </button>
                    <button onClick={deleteBook}
                     value={d._id} className={styles.deleteBtn}>
                      Delete
                    </button><div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        )
        :database == "DorMNM"?(
          <div className={styles.Area}>
          <div className={styles.toolBtn}>
          <div>
            <button onClick={addBtn}
             value="addDorMNM" className={styles.btnTools}>Add+</button>
          </div>
          <div>
            <button onClick={RefreshBtn} className={styles.btnTools}>Refresh</button>
          </div>
        </div>
          <div className={styles.Table}>
            <div className={styles.thead4}>
              <div className={styles.th}>No.</div>
              <div className={styles.th}>Own_name</div>
              <div className={styles.th}>Dorm_name</div>
              <div className={styles.th}>Phone_dorm</div>
              <div className={styles.th}>PassportID</div>
              <div className={styles.th}>Booking_status</div>
              <div className={styles.th}>Config</div>
            </div>
            <div className={styles.TableBody}>
              {dorsMNM?.map((d)=>(
                <div key={d._id} className={styles.tr4}>
                  <div className={styles.td}>
                    <div className={styles.tdNum}>{i+=1}.</div>
                  </div>
                  <div className={styles.td}>{d.own_name}</div>
                  <div className={styles.td}>{d.dorm_name}</div>
                  <div className={styles.td}>{d.phone_dorm}</div>
                  <div className={styles.td}>{d.passportID}</div>
                  <div className={styles.td}>{d.booking_status}</div>
                  <div className={styles.tdAction}><div></div>
                    <button className={styles.editeBtn}value={d._id}>
                      Edite
                    </button>
                    <button value={d._id} className={styles.deleteBtn}
                    onClick={deleteDorMNM}>
                      Delete
                    </button><div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        ) : database == "Post" ?(  
          <div className={styles.Area}>
          <div className={styles.toolBtn}>
          <div>
            <button onClick={addBtn}
             value="addPost" className={styles.btnTools}>Add+</button>
          </div>
          <div>
            <button onClick={RefreshBtn} className={styles.btnTools}>Refresh</button>
          </div>
        </div>
          <div className={styles.Table}>
                 <div className={styles.thead4}>
              <div className={styles.th}>No.</div>
              <div className={styles.th}>User post</div>
              <div className={styles.th}>Dorm_name</div>
              <div className={styles.th}>Type</div>
              <div className={styles.th}>Authentic</div>
              <div className={styles.th}>Post</div>
              <div className={styles.th}>Config</div>
            </div>
            <div className={styles.TableBody}>
              {post?.map((d)=>(
                <div key={d._id} className={styles.tr4}>
                  <div className={styles.td}>
                    <div className={styles.tdNum}>{i+=1}.</div>
                  </div>
                  <div className={styles.td}>{d.user_post}</div>
                  <div className={styles.td}>{d.dorm_name}</div>
                  <div className={styles.td}>{d.type}</div>
                  <div className={styles.td}>{d.authentic}</div>
                  <div className={styles.td}>{d.post}</div>
                  <div className={styles.tdAction}><div></div>
                    <button className={styles.editeBtn}value={d._id}>
                      Edite
                    </button>
                    <button value={d._id} className={styles.deleteBtn}
                    onClick={deletePost}>
                      Delete
                    </button><div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        )
        : (
            <div>
              Loading ...
            </div>
          )
        }
      </div>
        <Footer/>
    </div>
  )
}