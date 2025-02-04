// components/Footer.js
import React from "react";
import Link from "next/link";
import "../../public/sass/footer.css";
const Footer = () => {
  return (
    <footer className="footer  text-white py-5" dir="rtl">
      <div className="container">
        {/* بخش اول: لوگو و توضیحات */}
        <div className="row mb-4">
          <div className="col-md-4">
           
              <Link href="/" className="navbar-brand d-flex align-items-center justify-content-center">
                
                <img
                  src="/assets/images/favicon.jpg"
                  alt="لوگو"
                  style={{  height: "40px" }}
                /><h1 className="navbar-brand mb-0 me-2" style={{ fontSize: "24px" }}>
                  گنج درون
                </h1>
              </Link>
              
          
            <p className="small text-white mt-3">
              ما در اینجا هستیم تا با ارائه آموزش‌های کیفیت بالا و منابع آموزشی رایگان، به دانش‌آموزان و خانواده‌ها کمک کنیم تا آینده روشن‌تری برای خود و جامعه بسازند.
            </p>
          </div>

          {/* بخش دوم: لینک‌های مفید */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">لینک‌های مفید</h5>
            <ul className="list-unstyled small">
              <li>
                <Link href="/about" className="text-white text-decoration-none">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-decoration-none">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white text-decoration-none">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white text-decoration-none">
                  شرایط استفاده
                </Link>
              </li>
            </ul>
          </div>

          {/* بخش سوم: شبکه‌های اجتماعی */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">شبکه‌های اجتماعی</h5>
            <div className="d-flex gap-3 justify-content-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
            </div>
          </div>
        </div>

        {/* بخش آخر: حقوق مالکیت */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="small mb-0">
              © {new Date().getFullYear()} تمامی حقوق محفوظ است. | طراحی شده توسط{" "}
              <Link href="#" className="text-warning text-decoration-none fw-bold">
                نوآوران فناوری آینده زیبا
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;