

export default function Custom404() {
    return (
 
   <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>  صفحه پیدا نشد  </title>
    {/*Styles*/}
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/css/bootstrap-extended.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Roboto:wght@400;500&display=swap"
    rel="stylesheet"
  />
  {/*favicon*/}
  <link rel="icon" href="assets/images/favicon-32x32.png" type="image/png" />
  {/* loader*/}
  <script src="assets/js/pace.min.js"></script>
  <link href="assets/css/pace.min.css" rel="stylesheet" />
  

  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
  <link href="sass/main.css" rel="stylesheet" />
  <link href="sass/blue-theme.css" rel="stylesheet" />
  {/* Start wrapper*/}
  <div className="pt-5">
    <div className="container pt-5">
      <div className="row pt-5">
        <div className="col-lg-12">
          <div className="text-center error-pages">
            <h1 className="error-title text-blak mb-3">404</h1>
            <h2 className="error-sub-title text-blak">404 - یافت نشد</h2>
            <p className="error-message text-blak text-uppercase">
              متاسفیم، خطایی رخ داده است؛ صفحه درخواستی یافت نشد!
            </p>
            <div className=" text-white mt-4 d-flex align-items-center justify-content-center gap-3">
              <a
                href="/"
                className="btn btn-grd-danger rounded-5 text-white px-4"
              >
                <i className="bi  bi-house-fill  text-white" />
                بازگشت به خانه
              </a>
              <a
                href="javascript:void();"
                className="btn btn-light rounded-5 px-4"
              >
                <i className="bi bi-arrow-right me-2" />
                صفحه قبلی
              </a>
            </div>
            <div className="mt-4  text-blak">
              <p className="  text-blak ">
                کپی‌رایت © 2024 | تمامی حقوق محفوظ است.
              </p >
            </div>
            <hr className="border-light border-2" />
            <div className="list-inline contacts-social mt-4">
      
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*wrapper*/}
 
</>


    );
  }  