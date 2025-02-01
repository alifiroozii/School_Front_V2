"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/sass/globals.css";
import Link from 'next/link';
import LoginModal from "../components/LoginModal"; // فراخوانی کامپوننت Modal
import { FaArrowLeft } from 'react-icons/fa'; // آیکون فلش

export default function Home() {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false); // مدیریت حالت نمایش Modal

  // تابع برای باز کردن Modal
  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  // تابع برای بستن Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => (counter < 10 ? counter + 1 : counter))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5">
      <Head>
        <title>پروژه Next.js</title>
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
                روشن‌تری برای خود و جامعه بسازند.
              </p>
              {/* بخش دکمه‌ها */}
              <div className="d-flex flex-md-row gap-3 justify-content-center">
                {/* دکمه "بیشتر بدانید" */}
                <Link href="/more-info" className="btn btn-home rounded-pill px-4 py-2">
                  بیشتر بدانید
                </Link>
                {/* دکمه "ورود" با فلش */}
                <button
                  className="btn btn-home rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                  onClick={handleLoginClick} // باز کردن Modal
                >
                  <span>ورود</span>
                  <span className="arrow-icon rounded-circle p-1">
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

      {/* نمایش Modal */}
      <LoginModal show={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}