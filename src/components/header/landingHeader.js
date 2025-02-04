import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react"; // اضافه کردن useState
import Link from "next/link";
import LoginModal from "../LoginModal"; // فراخوانی کامپوننت Modal

export default function Header() {
  // مدیریت حالت نمایش Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // تابع برای باز کردن Modal
  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  // تابع برای بستن Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <header className="  py-2  ">
      <link rel="icon" href="/assets/images/favicon.jpg" type="image/png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link href="sass/main.css" rel="stylesheet" />
      <link href="sass/blue-theme.css" rel="stylesheet" />
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5 ">
        <nav className="navbar bg-body-tertiary fixed-top ">
          <div className="container-fluid d-flex justify-content-between flex-wrap">
            {/* بخش ورود */}
            <div className="col-md-2 text-end">
              {/* دکمه ورود که Modal را باز می‌کند */}
              <button className="btn btn-primary" onClick={handleLoginClick}>
                ورود
              </button>
            </div>

            {/* لوگو برای موبایل */}
            <div className="text-center d-block d-md-none">
              <Link
                href="/"
                className="navbar-brand d-flex align-items-center justify-content-center"
              >
                <h1
                  className="navbar-brand mb-0 me-2"
                  style={{ fontSize: "24px" }}
                >
                  گنج درون
                </h1>
                <img
                  src="/assets/images/favicon.jpg"
                  alt="لوگو"
                  style={{ height: "40px" }}
                />
              </Link>
            </div>

            {/* نمایش فقط در سایز موبایل */}
            <button
              className="navbar-toggler d-block d-sm-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* نمایش منوی کشویی فقط در سایز موبایل */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  منوی کشویی
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" href="/auth/parent/login">
                      ورود والدین
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/auth/student/login">
                      ورود دانش آموز
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/school-manager/Dashboard">
                      داشبورد مدیر
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      خانه
                    </Link>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="جستجو"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    جستجو
                  </button>
                </form>
              </div>
            </div>

            {/* نمایش منو در سایز بزرگتر */}
            <div className="col-12 col-md-8 text-center">
              {/* مخفی کردن در موبایل و نمایش در دسکتاپ */}
              <nav className="navbar navbar-expand-lg navbar-light d-none d-md-block">
                <div className="navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link className="nav-link" href="/auth/parent/login">
                        ورود والدین
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/auth/student/login">
                        ورود دانش آموز
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/school-manager/Dashboard">
                        داشبورد مدیر
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        خانه
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* لوگو برای تبلت و لپ‌تاپ (سمت راست) */}
            <div className="col-md-2 text-end d-none d-md-block">
              <Link
                href="/"
                className="navbar-brand d-flex align-items-center justify-content-end"
              >
                <h1
                  className="navbar-brand mb-0 me-2"
                  style={{ fontSize: "24px" }}
                >
                  گنج درون
                </h1>
                <img
                  src="/assets/images/favicon.jpg"
                  alt="لوگو"
                  style={{ height: "40px" }}
                />
              </Link>
            </div>
          </div>
        </nav>

        {/* نمایش Modal */}
        <LoginModal show={isModalOpen} onClose={handleCloseModal} />
      </div>
    </header>
  );
}