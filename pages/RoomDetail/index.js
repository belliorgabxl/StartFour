// index.js
import React from 'react';
import Navbar from '@/components/Navbar';
import style from '../RoomDetail/roomdetial.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className={style.imageColumn}>
            <div className={style.textname}>SJ House</div>
            <div className={style.textlo}><Image src="/map.png" alt="Image 1" width={20} height={20} />ถนน ลาดกระบัง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520</div>
          <div className={style.imageWrapper}>
            <Image src="/AJ.jpg" alt="Image 1" width={500} height={350} />
          </div>
        </div>
        <div className={style.detailsColumn}>
          <div className={style.details}>
            <div className={style.textbar}>
                <div>
                    <Image src="/file.png" alt="Image 1" width={30} height={30} />
                </div>
              <div className={style.textbar1}>
              <div>Contract</div>
              <div>Long-term contract 1 year</div>
              </div>
           </div>
           <div className={style.textbar}>
                <div>
                    <Image src="/price-tag.png" alt="Image 1" width={30} height={30} />
                </div>
              <div className={style.textbar1}>
              <div> Price</div>
              <div>4500/month</div>
              </div>
           </div>
           <div className={style.textbar}>
                <div>
                    <Image src="/bed.png" alt="Image 1" width={30} height={30} />
                </div>
              <div className={style.textbar1}>
              <div>Room type</div>
              <div>Air Condition</div>
              </div>
           </div>
             <div className={style.textbar1}>
              <button className={style.button}>Booking</button></div>
              
            </div>
            <div className={style.dorm}>
                   <div className={style.imageColumn}>
                    <div className={style.textdorm1}>รายละเอียดของหอพัก</div>
                    <div className={style.textdorm}>
           SJ House Ladkrabang 52 ห้องพักพร้อมเข้าอยู่ บรรยากาศดี เงียบสงบ สะอาด ปลอดภัย ตั้งอยู่ใน ซอยลาดกระบัง 52 (ซอยจินดาฯ) เดินทางสะดวก ใกล้สนามบินสุวรรณภูมิ โรงพยาบาลลาดกระบัง และสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เหมาะสำหรับคนทำงานย่านสนามบินสุวรรณภูมิ-ลาดกระบัง ,นักศึกษา หรือนักศึกษาฝึกงานสิ่งอำนวยความสะดวกเฟอร์นิเจอร์ เตียงพร้อมที่นอนขนาด 5 ฟุต ตู้เสื้อผ้า โต๊ะเครื่องแป้ง ชั้นวางของเครื่องปรับอากาศ พัดลมเพดาน และเครื่องทำน้ำอุ่นCable TV บริการ อินเตอร์เน็ต WIFI FREE ระบบรักษาความปลอดภัยคีย์การ์ด และกล้องวงจรปิด การเดินทาง</div>
          </div>
          <div className={style.detailsColumn1}>
            <div className={style.price}>
                <div className={style.textprice}>
                    <div>รายเดือน :</div>
                    <div>เงินประกัน :</div>
                    <div>ค่าไฟ :</div>
                    <div>ค่าน้ำ :</div>
                    <div>ค่าส่วนกลาง :</div>
                    <div>อินเทอร์เน็ต :</div>
                    <div>ที่จอดรถ :</div>
                </div>
                <div className={style.textprice}>
                    <div>4,500/month</div>
                    <div>8,000</div>
                    <div>8/unit</div>
                    <div>18/unit</div>
                    <div>300/month</div>
                    <div>FREE</div>
                    <div>FREE</div>
                </div>
                <div>

                </div>
            </div>
          </div>
         </div>

            </div>
          </div>
        </div>
 
   
  );
};

export default Home;
