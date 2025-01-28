"use client";
import React, { useState } from "react";
import axios from "axios";


const LoginForm = () => {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      const token = localStorage.getItem("token");
      console.log("Token from localStorage before request:", token);
  
      if (!token) {
        throw new Error("No token found in localStorage.");
      }
  
      

const response = await axios.get('/api/getDatabase', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

  
      console.log("Server response:", response.data); // بررسی پاسخ سرور
      if (response.status === 200) {
        // ادامه فرآیند در صورت موفقیت‌آمیز بودن درخواست
        const users = response.data;
        const user = users.find(
          (u) => u.nationalId === nationalId && u.password === password
        );
  
        if (user) {
          setSuccess(true);
          setError("");
          window.location.href = "/teacher/dashboard"; // هدایت به صفحه داشبورد
        } else {
          setSuccess(false);
          setError("کد ملی یا رمز عبور اشتباه است.");
        }
      } else {
        setError("دریافت اطلاعات از سرور با مشکل مواجه شد.");
        setSuccess(false);
      }
  
    } catch (error) {
      console.error("Error fetching data", error.response); // بررسی پاسخ سرور
      if (error.response) {
        console.log("Response data:", error.response.data); // داده‌های پاسخ
        console.log("Response status:", error.response.status); // وضعیت پاسخ
      }
      
      if (error.response && error.response.status === 403) {
        setError("دسترسی شما مجاز نیست. لطفاً توکن خود را بررسی کنید.");
      } else {
        setError("خطا در دریافت اطلاعات از سرور.");
      }
      
      setSuccess(false);
    }




    // try {
    //   const response = await axios.get('/api/getDatabase'); // درخواست به سرور
    //   const users = response.data; // فرض می‌کنیم داده‌ها یک آرایه از کاربران است

    //   // بررسی اینکه کاربر وجود دارد یا خیر
    //   const user = users.find(
    //     (u) => u.nationalId === nationalId && u.password === password
    //   );

    //   if (user) {
    //     setSuccess(true);
    //     setError('');
    //     console.log("ورود موفقیت‌آمیز");
    //     window.location.href = '/teacher/Dashboard';
    //   } else {
    //     setSuccess(false);
    //     setError("کد ملی یا رمز عبور اشتباه است.");
    //   }
    // } catch (error) {
    //   console.error("Error fetching data", error);
    //   setError("خطا در دریافت اطلاعات از سرور.");
    // }
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>صفحه ورود معلم</title>

      {/* فایل‌های CSS و پلاگین‌ها */}
      <link rel="icon" href="/assets/images/favicon.jpg" type="image/png" />
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets/css/bootstrap-extended.css" rel="stylesheet" />
      <link
        href="/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css"
        rel="stylesheet"
      />
      <link href="/sass/main.css" rel="stylesheet" />
      <link href="/sass/responsive.css" rel="stylesheet" />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
        dir="rtl"
      >
        <div className="card col-xl-9 col-xxl-8 mx-auto rounded-4 overflow-hidden p-4">
          <div className="row g-4">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src="/assets/images/favicon.jpg"
                    className="me-3"
                    width={37}
                    alt="favicon"
                  />
                  <h4 className="fw-bold mb-0"> ورود معلم</h4>
                </div>

                <p className="mb-0">
                  اطلاعات کاربری خود را وارد کنید تا وارد حساب کاربری شوید
                </p>

                <div className="form-body mt-4">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  {success && (
                    <div className="alert alert-success" role="alert">
                      خوش آمدید! شما با موفقیت وارد شدید.
                    </div>
                  )}

                  <form className="row g-3" onSubmit={handleLogin}>
                    <div className="col-12">
                      <label htmlFor="inputNationalId" className="form-label">
                        کد ملی
                      </label>
                      <input
                        className="form-control"
                        id="inputNationalId"
                        placeholder="کد ملی خود را وارد کنید"
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputPassword" className="form-label">
                        رمز عبور
                      </label>
                      <div className="input-group" id="show_hide_password">
                        <input
                          type="password"
                          className="form-control border-end-0"
                          id="inputPassword"
                          placeholder="رمز عبور را وارد کنید"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <a
                          href="javascript:;"
                          className="input-group-text bg-transparent"
                        >
                          <i className="bi bi-eye-slash-fill" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          مرا به خاطر بسپار
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-grd-primary text-white"
                        >
                          ورود
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex">
              <div className="p-3 rounded-4 w-100 d-flex align-items-center justify-content-center bg-grd-primary">
                <img
                  src="/assets/images/auth/teacher.svg"
                  className="img-fluid"
                  alt="Login Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
