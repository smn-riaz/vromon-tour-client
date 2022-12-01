import React from "react";
import BookingButton from "../../../Components/BookingButton/BookingButton";
import "./AdditionalServiceSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import extra2 from "../../../Assets/extra2.jpg";
import extra3 from "../../../Assets/extra3.jpg";
import extra4 from "../../../Assets/extra4.jpg";
import extra5 from "../../../Assets/extra5.jpg";
import extra6 from "../../../Assets/extra6.jpg";
import extra7 from "../../../Assets/extra7.jpg";
import extra9 from "../../../Assets/extra9.jpg";
import {MdOutlineAirportShuttle} from 'react-icons/md'
import {FaBath, FaSwimmingPool} from 'react-icons/fa'
import {GiSlicedBread, GiBeerBottle} from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'

function AdditionalServiceSection() {
  const extras = [extra2, extra3, extra4, extra5,extra6, extra7, extra9];

  return (
    <main className="p-5 my-5 ">
      <div className="additionalServiceSection d-flex row justify-content-center align-items-center">
        <div className="col-lg-4 col-md-4 col-sm-10 d-flex justify-content-center align-items-center">
          <div>
            <h6 className="text-center text-secondary">LUXURY HOTEL</h6>
            <h1 className="py-2 text-center">Extra Services</h1>
            <ul className="list-unstyled fs-5">
              <div className="d-flex justify-content-between extra-service">
                <li>Airport pickup</li>
                <li><MdOutlineAirportShuttle size={25}/></li>
              </div>
              <div className="d-flex justify-content-between extra-service">
                <li>Bathtub</li>
                <li><FaBath size={23}/></li>
              </div>
              <div className="d-flex justify-content-between extra-service">
                <li>Breakfast</li>
                <li><GiSlicedBread size={23}/></li>
              </div>
              <div className="d-flex justify-content-between extra-service">
                <li>Gym</li>
                <li><CgGym size={23}/></li>
              </div>
              <div className="d-flex justify-content-between extra-service">
                <li>Mini Bar</li>
                <li><GiBeerBottle size={23}/></li>
              </div>
              <div className="d-flex justify-content-between extra-service">
                <li>Swimming Pool</li>
                <li><FaSwimmingPool size={23}/></li>
              </div>
             
            </ul>
            <BookingButton goLink="/booking" />
          </div>
        </div>

        <div className="col-lg-7 col-md-7 col-sm-10">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
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
    </main>
  );
}

export default AdditionalServiceSection;
