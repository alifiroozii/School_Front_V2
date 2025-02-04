
"use client";
import TestimonialCarousel from '../components/sidebar/carousel';
import { FaUserGraduate, FaChalkboardTeacher, FaUserTie, FaUserShield, FaUserFriends } from "react-icons/fa"; // آیکن‌ها

import Head from "next/head";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/sass/globals.css";
import Link from 'next/link';
import LoginModal from "../components/LoginModal"; // فراخوانی کامپوننت Modal
import { FaArrowLeft } from 'react-icons/fa'; // آیکون فلش

export default function Home() {
  
  const roles = [
    {
      title: "دانش‌آموز",
      link: "/auth/student/login",
      icon: <FaUserGraduate size={40} color="#ffffff" />,
      bgColor: "#231478", // بنفش تیره
    },
    
    {
      title: "مدیر مدرسه",
      link: "/auth/school-manager/login",
      icon: <FaUserTie size={40} color="#ffffff" />,
      bgColor: "#82198c", // بنفش روشن
    },
    {
      title: "معلم",
      link: "/auth/teacher/login",
      icon: <FaChalkboardTeacher size={40} color="#ffffff" />,
     
      bgColor: "#d241aa", // صورتی فانتزی
    },
    {
      title: "ناظم",
      link: "/auth/admin/login",
      icon: <FaUserShield size={40} color="#ffffff" />,
     bgColor: "#82198c", // بنفش روشن
    },
    {
      title: "والدین",
      link: "/auth/parent/login",
      icon: <FaUserFriends size={40} color="#ffffff" />,
      bgColor:"#231478", // بنفش تیره
    },
  ];

  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => (counter < 10 ? counter + 1 : counter))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  const [isModalOpen, setIsModalOpen] = useState(false); // مدیریت حالت نمایش Modal

  // تابع برای باز کردن Modal
  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  // تابع برای بستن Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="container mt-2">
      <Head>
        <title> سایت آموزشی گنج درون</title>
      </Head>

      {/* بخش اصلی با تصویر و متن */}
      <div className="card shadow-lg custom-card p-4 rounded-3">
        <div className="row g-0 align-items-center">
          {/* تصویر در سمت چپ */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="/assets/images/auth/student.svg"
              alt="تصویر دانشجو"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>
          {/* متن و شمارنده‌ها در سمت راست */}
          <div dir="rtl" className="col-md-6">
            <div className="p-4">
              <h1 className="text-primary fw-bold">
                آموزش برای همه، فرصت برای{" "}
                <span className="highlight">آینده</span>
              </h1>
              <p className="card-text ">
                ما در اینجا هستیم تا با ارائه آموزش‌های کیفیت بالا و منابع
                آموزشی رایگان، به دانش‌آموزان و خانواده‌ها کمک کنیم تا آینده
                 .روشن‌تری برای خود و جامعه بسازند.
              </p>
              {/* بخش دکمه‌ها */}
              <div className="d-flex flex-md-row gap-3 justify-content-center">
                {/* دکمه "بیشتر بدانید" */}
                <Link href="/more-info" className="btn btn-home  px-4 py-2">
                  بیشتر بدانید
                </Link>
                {/* دکمه "ورود" با فلش */}
                <button
                  className="btn btn-home rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                  onClick={handleLoginClick} // باز کردن Modal
                >
                  <span>ورود</span>
                  <span className="arrow-icon circle p-1">
                    <FaArrowLeft size={16} color="#fff" />
                  </span>
                </button>
              </div>
              {/* بخش آمار عددی */}
              <div className="stats-container d-flex flex-wrap justify-content-center justify-content-md-between">
                <div className="stat-item d-flex flex-column align-items-center">
                  <h2 className="fw-bold">۱۰۰۰+</h2>
                  <p className="text-muted small">دانش‌آموز فعال</p>
                </div>
                {/* جداکننده */}
                <div className="divider "></div>
                <div className="stat-item d-flex flex-column align-items-center">
                  <h2 className="fw-bold">۵۰+</h2>
                  <p className="text-muted small"> مدرسه</p>
                </div>
                {/* جداکننده */}
                <div className="divider "></div>
                <div className="stat-item d-flex flex-column align-items-center">
                  <h2 className="fw-bold">۹۰%</h2>
                  <p className="text-muted small">رضایت کاربران</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* بخش ورود کاربران */}
       <section dir="rtl" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">انتخاب نوع کاربر</h2>
    <div className="role-container d-flex justify-content-center gap-4 flex-wrap">
      {roles.map((role, index) => (
        <Link key={index} href={role.link} className="text-decoration-none">
          <div
            className="role-card d-flex flex-column align-items-center justify-content-center rounded"
            style={{
              backgroundColor: role.bgColor,
              width: "120px", // عرض بزرگ‌تر برای خوانایی بهتر
              height: "120px", // ارتفاع بزرگ‌تر برای خوانایی بهتر
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="icon-box">{role.icon}</div>
            <span className="mt-2 text-white small text-center">{role.title}</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
  
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">امکانات سامانه</h2>
    
    {/* ردیف اول */}
    <div className="row justify-content-center align-items-center g-4">
      {/* کارت اول (سمت راست در دسکتاپ - بالا در موبایل) */}
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card shadow-sm p-4 text-center h-100 w-100">
          <img
            src="/assets/images/gallery/102.svg"
            alt="آموزش"
            className="mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="fw-bold">تحلیل هوشمند</h5>
          <p className="text-muted small">تحلیل دقیق نمرات و عملکرد</p>
        </div>
      </div>

      {/* تصویر وسط (در دسکتاپ وسط - در موبایل کوچکتر) */}
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <img
          src="/assets/images/gallery/104.svg"
          alt="هوش مصنوعی"
          className="img-fluid rounded-circle shadow-lg"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* کارت دوم (سمت چپ در دسکتاپ - پایین در موبایل) */}
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card shadow-sm p-4 text-center h-100 w-100">
          <img
            src="/assets/images/gallery/101.svg"
            alt="پشتیبانی"
            className="mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="fw-bold">مدیریت کلاس</h5>
          <p className="text-muted small">مدیریت پیشرفته و دقیق کلاس‌ها</p>
        </div>
      </div>
    </div>

    {/* ردیف دوم */}
    <div className="row justify-content-center g-4 mt-4">
      {/* کارت 1 */}
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card shadow-sm p-4 text-center h-100 w-100">
          <img
            src="/assets/images/gallery/106.svg"
            alt="آزمون‌های تطبیقی"
            className="mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="fw-bold">آزمون‌های تطبیقی</h5>
          <p className="text-muted small">سوالات متناسب با سطح دانش‌آموز</p>
        </div>
      </div>

      {/* کارت 2 */}
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card shadow-sm p-4 text-center h-100 w-100">
          <img
            src="/assets/images/gallery/107.svg"
            alt="گزارش‌های گرافیکی"
            className="mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="fw-bold">گزارش‌های گرافیکی</h5>
          <p className="text-muted small">نمایش وضعیت با گراف‌های زنده</p>
        </div>
      </div>

      {/* کارت 3 */}
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card shadow-sm p-4 text-center h-100 w-100">
          <img
            src="/assets/images/gallery/105.svg"
            alt="پیشنهادات آموزشی"
            className="mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="fw-bold">پیشنهادات آموزشی</h5>
          <p className="text-muted small">ارائه منابع تقویتی هوشمند</p>
        </div>
      </div>
    </div>
  </div>
</section>


  {/* بخش ویژگی‌های کلیدی */}
<section className="py-5" dir="rtl">
  <div className="container">
    <h2 className="text-center mb-5">ویژگی‌های کلیدی</h2>
    <div className="row g-4">
      <div className="col-md-6">
        <div className="feature-item d-flex align-items-start gap-3">
          <div
            className="icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="bi bi-laptop"></i>
          </div>
          <div>
            <h5 className="fw-bold">پلتفرم آنلاین</h5>``
            <p className="text-muted small">
              دسترسی به تمامی منابع آموزشی از طریق پلتفرم آنلاین.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="feature-item d-flex align-items-start gap-3">
          <div
            className="icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="bi bi-people"></i>
          </div>
          <div>
            <h5 className="fw-bold">جامعه آموزشی</h5>
            <p className="text-muted small">
              ایجاد شبکه‌ای از دانش‌آموزان و معلمان برای یادگیری بهتر.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<div>
      {/* بخش نظرات کاربران */}
      <section className="py-5 bg-light" dir="rtl">
        <div className="container">
          <h2 className="text-center mb-5">نظرات کاربران</h2>
          {/* کاروسل حرفه‌ای */}
          <TestimonialCarousel />
        </div>
      </section>
    </div>
      {/* نمایش Modal */}
      <LoginModal show={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
