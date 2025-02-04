
import styles from "../../../public/sass/TestimonialCarousel.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "این پلتفرم عالیه! من توانستم دروسم را به راحتی یاد بگیرم.",
    name: "علی رضایی",
    role: "دانش‌آموز",
    avatar: "/assets/images/avatars/07.png",
  },
  {
    text: "پشتیبانی عالی و منابع آموزشی کامل، تجربه‌ای بی‌نظیر بود.",
    name: "سارا محمدی",
    role: "معلم",
    avatar: "/assets/images/avatars/01.png",
  },
  {
    text: "منابع آموزشی بسیار متنوع و کاربردی بودند. ممنون!",
    name: "محمد حسینی",
    role: "والدین",
    avatar: "/assets/images/avatars/06.png",
  },
  {
    text: "یکی از بهترین پلتفرم‌های آموزشی که تا حالا استفاده کردم.",
    name: "فاطمه احمدی",
    role: "دانشجو",
    avatar: "/assets/images/avatars/08.png",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className={styles.carouselContainer} dir="rtl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={styles.testimonialCard}>
              <p>{testimonial.text}</p>
              <div className={styles.userInfo}>
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <h6 className={styles.userName}>{testimonial.name}</h6>
                  <p className={styles.userRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default TestimonialCarousel;
