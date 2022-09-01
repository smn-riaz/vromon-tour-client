import React from "react";
import BookingButton from "../../../Components/BookingButton/BookingButton";
import "./AdditionalServiceSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import extra2 from '../../../Assets/extra2.jpg'
import extra3 from '../../../Assets/extra3.jpg'
import extra4 from '../../../Assets/extra4.jpg'
import extra5 from '../../../Assets/extra5.jpg'
import extra6 from '../../../Assets/extra6.jpg'
import extra7 from '../../../Assets/extra7.jpg'
import extra9 from '../../../Assets/extra9.jpg'

function AdditionalServiceSection() {
    

  const extras = [extra2, extra3, extra4, extra5]
  const extras2 = [extra6, extra7, extra9]
  return (
   <main className="p-2">
     <div className="additionalServiceSection d-flex row justify-content-center">
     <div className="col-lg-3 col-md-4 col-sm-10 d-flex justify-content-center align-items-start">
        <div>
          <p className="fw-bold">from $45</p>
          <h3>Sunny B&B</h3>
          <ul className="list-unstyled fs-5">
            <li>Airport pickup</li>
            <li>Bathtub</li>
            <li>Breakfast</li>
            <li>Gym</li>
            <li>Mini bar</li>
            <li>Swimming pool</li>
            <li>Rent a car</li>
          </ul>
          <BookingButton goLink="/booking"/>
        </div>
      </div>
      <div className="col-lg-8 col-md-7 col-sm-10">
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {extras.map((extra) => (
            <SwiperSlide>
            <img src={extra} className="w-100 h-100" alt="" />
        </SwiperSlide>
          ))}
      </Swiper>
      </div>
    </div>



    <div className="additionalServiceSection row d-flex justify-content-center">
      
      <div className="col-lg-8 col-md-7 col-sm-10">
      
      <Swiper
         slidesPerView={"auto"}
         autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
         spaceBetween={40}
         pagination={{
           clickable: true,
         }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {extras2.map((extra) => (
            <SwiperSlide>
            <img src={extra} className="w-100 h-75" alt="" />
        </SwiperSlide>
          ))}
      </Swiper>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-10 d-flex justify-content-center align-items-start">
        <div>
          <p className="fw-bold">from $60</p>
          <h3>Sunny B&B</h3>
          <ul className="list-unstyled fs-5">
            <li>Airport pickup</li>
            <li>Bathtub</li>
            <li>Breakfast</li>
            <li>Gym</li>
            <li>Mini bar</li>
            <li>Swimming pool</li>
            <li>Rent a car</li>
          </ul>
          <BookingButton goLink="/booking"/>
        </div>
      </div>
    </div>



   </main>
  );
}

export default AdditionalServiceSection;
