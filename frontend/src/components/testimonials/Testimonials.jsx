//have to convert client review all things in array and render array.map this work is pending
import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Across The World</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        className="container testimonials__container"
      >
        {/* pagination={{ clickable: true }}  undo this line when i will do array.map for all reviews */}

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="" />
          </div>
          <h5 className="clent__name">Yolk Rench</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            minima, atque animi perferendis, error dolores quod distinctio alias
            laboriosam voluptatum odio. Molestias voluptas corporis doloremque
            recusandae, error cumque repellendus. Rem?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR2} alt="" />
          </div>
          <h5 className="clent__name">Yolk Rench</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            minima, atque animi perferendis, error dolores quod distinctio alias
            laboriosam voluptatum odio. Molestias voluptas corporis doloremque
            recusandae, error cumque repellendus. Rem?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR3} alt="" />
          </div>
          <h5 className="clent__name">Yolk Rench</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            minima, atque animi perferendis, error dolores quod distinctio alias
            laboriosam voluptatum odio. Molestias voluptas corporis doloremque
            recusandae, error cumque repellendus. Rem?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>
          <h5 className="clent__name">Yolk Rench</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            minima, atque animi perferendis, error dolores quod distinctio alias
            laboriosam voluptatum odio. Molestias voluptas corporis doloremque
            recusandae, error cumque repellendus. Rem?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
