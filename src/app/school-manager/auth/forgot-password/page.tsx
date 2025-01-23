import React from "react";

const forgotpassword = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>قالب مدیریت و داشبورد مکس‌تون</title>
      {/* Favicon */}
      <link
        rel="icon"
        href="/assets/images/favicon-32x32.png"
        type="image/png"
      />

      {/* Loader */}
      <link href="/assets/css/pace.min.css" rel="stylesheet" />

      {/* Plugins */}
      <link
        href="/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css"
        rel="stylesheet"
      />
      <link
        href="/assets/plugins/metismenu/metisMenu.min.css"
        rel="stylesheet"
      />
      <link href="/assets/plugins/metismenu/mm-vertical.css" rel="stylesheet" />

      {/* Bootstrap CSS */}
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
        rel="stylesheet"
      />

      {/* Main CSS */}
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
        <div className="container my-5 my-lg-0">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
              <div className="card rounded-4 mb-0 border-top border-4 border-primary ">
                <div className="card-body p-5">
                  {/* 
                //لوگو سایت
                
                <img
                  src="/assets/images/logo1.png"
                  className="mb-4"
                  width={145}
                  alt=""
                /> */}

                  <h5 className="fw-bold">فراموشی رمز عبور؟</h5>
                  <p className="mb-0">
                    ایمیل ثبت‌شده خود را وارد کنید تا رمز عبور را بازیابی کنید
                  </p>
                  <div className="form-body mt-4">
                    <form className="row g-4">
                      <div className="col-12">
                        <label className="form-label">ایمیل</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="example@user.com"
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-grid gap-2">
                          <button
                            type="button"
                            className="btn btn-grd-primary text-white"
                          >
                            ارسال
                          </button>
                          <a href="login" className="btn btn-light">
                            بازگشت به صفحه ورود
                          </a>
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

      <script src="assets/js/jquery.min.js"></script>
    </>
  );
};

export default forgotpassword;
