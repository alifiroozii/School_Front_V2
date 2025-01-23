import React from "react";

const LoginForm = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title></title>

      {/* <!-- Favicon --> */}
      <link
        rel="icon"
        href="/assets/images/favicon-32x32.png"
        type="image/png"
      />

      {/* <!-- Loader CSS --> */}
      <link href="/assets/css/pace.min.css" rel="stylesheet" />

      {/* <!-- Plugins CSS --> */}
      <link
        href="/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="/assets/plugins/metismenu/metisMenu.min.css"
      />
      <link rel="stylesheet" href="/assets/plugins/metismenu/mm-vertical.css" />

      {/* <!-- Bootstrap CSS --> */}
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />

      {/* <!-- Google Fonts --> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
        rel="stylesheet"
      />

      {/* <!-- Main Custom CSS --> */}
      <link href="/assets/css/bootstrap-extended.css" rel="stylesheet" />
      <link href="/sass/main.css" rel="stylesheet" />
      <link href="/sass/dark-theme.css" rel="stylesheet" />
      <link href="/sass/blue-theme.css" rel="stylesheet" />
      <link href="/sass/responsive.css" rel="stylesheet" />

      {/*authentication*/}
      <div
        className="auth-basic-wrapper d-flex align-items-center justify-content-center "
        dir="rtl"
      >
        <div className="container-fluid my-5 my-lg-0">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
              <div className="card  rounded-4 mb-0 border-top border-4 border-primary ">
                <div className="card-body p-5">
                  <img
                    //لوگو گنج درون
                    // src="/assets/images/logo1.png"
                    className="mb-4"
                    width={145}
                    alt=""
                  />
                  <h4 className="fw-bold">ادمین گنج درون</h4>
                  <p className="mb-0">
                    برای ورود به حساب خود اطلاعات را وارد کنید
                  </p>
                  <div className="form-body my-5">
                    <form className="row g-3">
                      <div className="col-12">
                        <label
                          htmlFor="inputEmailAddress"
                          className="form-label"
                        >
                          کد ملی
                        </label>
                        <input
                          className="form-control"
                          id="inputEmailAddress"
                          placeholder="**********"
                        />
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputChoosePassword"
                          className="form-label"
                        >
                          رمز عبور
                        </label>
                        <div className="input-group" id="show_hide_password">
                          <input
                            type="password"
                            className="form-control "
                            id="inputChoosePassword"
                            placeholder="رمز عبور را وارد کنید"
                          />
                          {/* <a
                        href="javascript:;"
                        className="input-group-text bg-transparent"
                      >
                        <i className="bi bi-eye-slash-fill" />
                      </a> */}
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
                      <div className="col-md-6 text-end">
                        <a href="forgot-password">
                          رمز عبور را فراموش کرده‌اید؟
                        </a>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="text-white btn btn-grd-primary"
                          >
                            ورود
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* پایان ردیف */}
        </div>
      </div>
      {/*authentication*/}
      {/*plugins*/}
    </>
  );
};

export default LoginForm;
