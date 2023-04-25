import React from "react";
import "./testimonial.css";
import me from "../../asset/me.png";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const data = [
    {
      avatar: me,
      name: "Olatunji Akande",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam possimus inventore tenetur praesentium. Sint nemo asperiores abreprehenderit neque!",
    },
    {
      avatar: me,
      name: "Olatunji Akande",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam possimus inventore tenetur praesentium. Sint nemo asperiores abreprehenderit neque!",
    },
    {
      avatar: me,
      name: "Olatunji Akande",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam possimus inventore tenetur praesentium. Sint nemo asperiores abreprehenderit neque!",
    },
    {
      avatar: me,
      name: "Olatunji Akande",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam possimus inventore tenetur praesentium. Sint nemo asperiores abreprehenderit neque!",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial_container"
        modules={{ Pagination, Navigation }}
        spaceBetween={40}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client_avatar">
              <img src={avatar} alt="testimonial" />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
