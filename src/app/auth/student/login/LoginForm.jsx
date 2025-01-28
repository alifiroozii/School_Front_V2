import React from "react";

const LoginForm = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>صفحه ورود دانش‌آموز</title>

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

      {/* والد اصلی برای وسط‌چین کردن */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }} // ارتفاع کل صفحه
        dir="rtl"
      >
        <div className="card col-xl-9 col-xxl-8 mx-auto rounded-4 overflow-hidden p-4">
          <div className="row g-4">
            {/* تصویر در حالت موبایل */}
            <div className="col-12 d-lg-none">
              <div className="p-3 rounded-4 w-100 d-flex align-items-center justify-content-center bg-grd-primary">
                <img
                  src="/assets/images/auth/student.svg"
                  className="img-fluid"
                  alt="Login Illustration"
                />
              </div>
            </div>

            {/* فرم لاگین */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src="/assets/images/favicon.jpg"
                    className="me-3"
                    width={37}
                    alt="favicon"
                  />
                  <h4 className="fw-bold mb-0"> ورود دانش آموز
                  </h4>
                </div>

                <p className="mb-0">
                  اطلاعات کاربری خود را وارد کنید تا وارد حساب کاربری شوید
                </p>

                <div className="form-body mt-4">
                  <form className="row g-3">
                    <div className="col-12">
                      <label htmlFor="inputEmailAddress" className="form-label">
                        کد ملی
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        placeholder="کد ملی خود را وارد کنید"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputChoosePassword" className="form-label">
                        رمز عبور
                      </label>
                      <div className="input-group" id="show_hide_password">
                        <input
                          type="password"
                          className="form-control border-end-0"
                          id="inputChoosePassword"
                          placeholder="رمز عبور را وارد کنید"
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
                          defaultChecked=""
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

            {/* تصویر در حالت دسکتاپ */}
            <div className="col-lg-6 d-none d-lg-flex">
              <div className="p-3 rounded-4 w-100 d-flex align-items-center justify-content-center bg-grd-primary">
                <img
                  src="/assets/images/auth/student.svg"
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
