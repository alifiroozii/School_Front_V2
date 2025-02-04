"use client";
import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      nationalCode: "",
      password: "",
    },
    validationSchema: Yup.object({
      nationalCode: Yup.string()
        .matches(/^[0-9]{10}$/, "کد ملی باید ۱۰ رقم و فقط شامل اعداد انگلیسی باشد.")
        .required("کد ملی الزامی است."),
      password: Yup.string()
        .matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/, "رمز عبور باید حداقل ۶ کاراکتر و شامل عدد و حروف انگلیسی باشد.")
        .required("رمز عبور الزامی است."),
    }),
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in localStorage.");
        }

        const response = await axios.get("/api/getDatabase", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          const users = response.data;
          const user = users.find(
            (u) => u.nationalCode === values.nationalCode && u.password === values.password
          );

          if (user) {
            setSuccess(true);
            setError("");
            window.location.href = "/teacher/dashboard";
          } else {
            setSuccess(false);
            setError("کد ملی یا رمز عبور اشتباه است.");
          }
        } else {
          setError("دریافت اطلاعات از سرور با مشکل مواجه شد.");
          setSuccess(false);
        }
      } catch (error) {
        setError("خطا در دریافت اطلاعات از سرور.");
        setSuccess(false);
      }
    },
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
      dir="rtl"
    >
      <title>صفحه ورود معلم</title>
      <link rel="icon" href="/assets/images/favicon.jpg" type="image/png" />
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets/css/bootstrap-extended.css" rel="stylesheet" />
      <link
        href="/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css"
        rel="stylesheet"
      />
      <link href="/sass/main.css" rel="stylesheet" />
      <link href="/sass/responsive.css" rel="stylesheet" />

      <div className="card col-xl-9 col-xxl-8 mx-auto rounded-4 overflow-hidden p-4">
        <div className="row g-4">
          <div className="col-12 d-lg-none">
            <div className="p-3 rounded-4 w-100 d-flex align-items-center justify-content-center bg-grd-primary">
              <img
                src="/assets/images/auth/teacher.svg"
                className="img-fluid"
                alt="Login Illustration"
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <img
                  src="/assets/images/favicon.jpg"
                  className="me-3"
                  width={37}
                  alt="favicon"
                />
                <h4 className="fw-bold mb-0">ورود معلم</h4>
              </div>
              <p className="mb-0">اطلاعات کاربری خود را وارد کنید تا وارد حساب کاربری شوید</p>
              <div className="form-body mt-4">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">
                    خوش آمدید! شما با موفقیت وارد شدید.
                  </div>
                )}
                <form className="row g-3" onSubmit={formik.handleSubmit}>
                  <div className="col-12">
                    <label className="form-label">کد ملی</label>
                    <input
                      className="form-control"
                      name="nationalCode"
                      placeholder="کد ملی خود را وارد کنید"
                      value={formik.values.nationalCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.nationalCode && formik.errors.nationalCode && (
                      <div className="text-danger">{formik.errors.nationalCode}</div>
                    )}
                  </div>
                  <div className="col-12">
                    <label className="form-label">رمز عبور</label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control border-end-0"
                        placeholder="رمز عبور را وارد کنید"
                        {...formik.getFieldProps("password")}
                      />
                      <span
                        className="input-group-text bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash-fill"}`} />
                      </span>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <small className="text-danger">{formik.errors.password}</small>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        مرا به خاطر بسپارید
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-grd-primary text-white">
                      ورود
                    </button>
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
  );
};

export default LoginForm;

