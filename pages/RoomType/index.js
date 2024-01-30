import style from "./roomtype.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";


export default function RoomType(){
    return(
     <div className={style.body}>
          <Navbar/>
          <div className={style.container}>
               <div className={style.boxgrid}>
                    <div className={style.box}>
                         <div className={style.boxbackgroundNon}>
                              NON AIRCONDITIONER ROOM
                         </div>
                         <div className={style.boximg}>
                            <img className={style.img1} src="https://i.pinimg.com/564x/61/11/00/611100f92e606fb39547c66f80e827fd.jpg" width={280} height ={260}/>
                            <img className={style.img2} src="https://i.pinimg.com/564x/53/01/2d/53012d4eef03168de29eaf4ce376f1a9.jpg" width={280} height ={260}/>
                            <img className={style.img3} src="https://i.pinimg.com/564x/6b/8d/66/6b8d6606dbf23f5ec6eed11bc005d9f9.jpg" width={280} height ={260}/>
                            <a href="/fan">
                              <img className={style.img4} src="/add.png" width={60} height={60}></img>
                            </a>
                         </div>
                    </div>
                    <div className={style.slide}>
                         <img className={style.iconslideleft} src="/arrow-left.png" width={50} height={50}></img>
                         <img className={style.iconslideright} src="/arrow-right.png" width={50} height={50}></img>
                        <figure className={style.figure}>
                            <img src="https://i.pinimg.com/564x/61/11/00/611100f92e606fb39547c66f80e827fd.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/53/01/2d/53012d4eef03168de29eaf4ce376f1a9.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/6b/8d/66/6b8d6606dbf23f5ec6eed11bc005d9f9.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/736x/d3/c0/85/d3c0857dc009024e6260285e4cb1b125.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/736x/79/d8/aa/79d8aa6263ffc42f3f9ff2f5285b2c7b.jpg" width={100} height ={100}/>
                        </figure>  
                    </div>
                    <div className={style.box}>
                         <div className={style.boxbackgroundair}>
                               AIR CONDITION ROOM
                         </div>
                         <div className={style.boximg}>
                            <img className={style.img1} src="https://i.pinimg.com/564x/91/d4/00/91d4003624a0477504184e5d1ef84151.jpg" width={280} height ={260}/>
                            <img className={style.img2} src="https://i.pinimg.com/564x/45/0f/32/450f322dc4e20b5251f44f4378285270.jpg" width={280} height ={260}/>
                            <img className={style.img3} src="https://i.pinimg.com/564x/52/6c/05/526c05661946e5b5e08721bedf37b0b6.jpg" width={280} height ={260}/>
                            <a href="/air">
                              <img className={style.img4} src="/add.png" width={60} height={60}></img>
                            </a>
                         </div>
                    </div>
                    <div className={style.slide}>
                         <img className={style.iconslideleft} src="/arrow-left.png" width={50} height={50}></img>
                         <img className={style.iconslideright} src="/arrow-right.png" width={50} height={50}></img>
                        <figure className={style.figure}>
                            <img src="https://i.pinimg.com/564x/91/d4/00/91d4003624a0477504184e5d1ef84151.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/45/0f/32/450f322dc4e20b5251f44f4378285270.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/57/e3/68/57e368a6175b2820ed03fb835bea8da0.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/736x/79/d8/aa/79d8aa6263ffc42f3f9ff2f5285b2c7b.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/3f/d2/15/3fd21514983a5de07f9cb7da1c3dc8a0.jpg" width={100} height ={100}/>
                        </figure>  
                    </div>
                    <div className={style.box}>
                         <div className={style.boxbackground}>
                              SUITE ROOM
                         </div>
                         <div className={style.boximg}>
                            <img className={style.img1} src="https://i.pinimg.com/564x/b7/34/89/b73489fcc01624968175be477deb592c.jpg" width={280} height ={260}/>
                            <img className={style.img2} src="https://i.pinimg.com/564x/f0/d9/16/f0d91635c038af37c84de1ecb5b7b2b3.jpg" width={280} height ={260}/>
                            <img className={style.img3} src="https://i.pinimg.com/564x/25/1b/ea/251bea5cb2a7a01fc477a3731a59ef14.jpg" width={280} height ={260}/>
                            <a href="/suite">
                              <img className={style.img4} src="/add.png" width={60} height={60}></img>
                            </a>
                         </div>
                    </div>
                    <div className={style.slide}>
                         <img className={style.iconslideleft} src="/arrow-left.png" width={50} height={50}></img>
                         <img className={style.iconslideright} src="/arrow-right.png" width={50} height={50}></img>
                        <figure className={style.figure}>
                            <img src="https://i.pinimg.com/564x/e9/78/b3/e978b3eb63b417218653d563d6f74d30.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/25/1b/ea/251bea5cb2a7a01fc477a3731a59ef14.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/f0/d9/16/f0d91635c038af37c84de1ecb5b7b2b3.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/d2/ad/e5/d2ade5e8f524c7bc3c72f286f78b547b.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/b7/34/89/b73489fcc01624968175be477deb592c.jpg" width={100} height ={100}/>
                        </figure>  
                    </div>
                    <div className={style.box}>
                         <div className={style.boxbackground}>
                              DAILY ROOM
                         </div>
                         <div className={style.boximg}>
                            <img className={style.img1} src="https://i.pinimg.com/564x/61/11/00/611100f92e606fb39547c66f80e827fd.jpg" width={280} height ={260}/>
                            <img className={style.img2} src="https://i.pinimg.com/564x/53/01/2d/53012d4eef03168de29eaf4ce376f1a9.jpg" width={280} height ={260}/>
                            <img className={style.img3} src="https://i.pinimg.com/564x/6b/8d/66/6b8d6606dbf23f5ec6eed11bc005d9f9.jpg" width={280} height ={260}/>
                            <a href="/daily">
                              <img className={style.img4} src="/add.png" width={60} height={60}></img>
                            </a>
                         </div>
                    </div>
                    <div className={style.slide}>
                         <img className={style.iconslideleft} src="/arrow-left.png" width={50} height={50}></img>
                         <img className={style.iconslideright} src="/arrow-right.png" width={50} height={50}></img>
                        <figure className={style.figure}>
                            <img src="https://i.pinimg.com/564x/61/11/00/611100f92e606fb39547c66f80e827fd.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/53/01/2d/53012d4eef03168de29eaf4ce376f1a9.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/6b/8d/66/6b8d6606dbf23f5ec6eed11bc005d9f9.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/736x/d3/c0/85/d3c0857dc009024e6260285e4cb1b125.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/736x/79/d8/aa/79d8aa6263ffc42f3f9ff2f5285b2c7b.jpg" width={100} height ={100}/>
                        </figure>  
                    </div>

               </div>
          </div>
          <Footer/>
     </div>
    )
}