'use client';
import React from "react";
import Script from "next/script";

import { useState, useEffect } from 'react';
const page = () => {

   
  return (
    <>
    
    
     
    
   
      <meta charSet="utf-8" dir="rtl" lang="fa" data-bs-theme="blue-theme" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>مدریت و داشبورد گنج درون</title>
      //{/* Favicon */}
      <link
        rel="icon"
        href="/assets/image/favicon-32x32.png"
        type="image/png"
      />
      {/* Bootstrap CSS */}
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets/css/bootstrap-extended.css" rel="stylesheet" />
      {/* Loader CSS */}
      <link href="/assets/style/css/pace.min.css" rel="stylesheet" />
      <script src="/assets/js/pace.min.js" defer></script>
      {/* Plugins CSS */}
      <link
        href="/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css"
        rel="stylesheet"
      />
      <link
        href="/assets/plugins/metismenu/metisMenu.min.css"
        rel="stylesheet"
      />
      <link
        href="/assets/plugins/simplebar/css/simplebar.css"
        rel="stylesheet"
      />
      {/* Fonts and Icons */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      {/* Custom CSS */}
      <link href="/sass/main.css" rel="stylesheet" />
      <link href="/sass/dark-theme.css" rel="stylesheet" />
      <link href="/sass/blue-theme.css" rel="stylesheet" />
      <link href="/sass/semi-dark.css" rel="stylesheet" />
      <link href="/sass/bordered-theme.css" rel="stylesheet" />
      <link href="/sass/responsive.css" rel="stylesheet" />
      {/*start header*/}
      <header dir="rtl" lang="fa" data-bs-theme="blue-theme" className="top-header">
        <nav className="navbar navbar-expand align-items-center gap-4">
          <div className="btn-toggle">
            <a href="javascript:;">
              <i className="material-icons-outlined">menu</i>
            </a>
          </div>
          <div className="search-bar flex-grow-1">
            <div className="position-relative">
              <input
                className="form-control rounded-5 px-5 search-control d-lg-block d-none"
                type="text"
                placeholder="جستجو"
              />
              <span className="material-icons-outlined position-absolute d-lg-block d-none ms-3 translate-middle-y start-0 top-50">
                search
              </span>
              <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 search-close">
                close
              </span>
              <div className="search-popup p-3">
                <div className="card rounded-4 overflow-hidden">
                  <div className="card-header d-lg-none">
                    <div className="position-relative">
                      <input
                        className="form-control rounded-5 px-5 mobile-search-control"
                        type="text"
                        placeholder="جستجو"
                      />
                      <span className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50">
                        search
                      </span>
                      <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 mobile-search-close">
                        close
                      </span>
                    </div>
                  </div>
                  <div className="card-body search-content">
                    <p className="search-title">جستجوهای اخیر</p>
                    <div className="d-flex align-items-start flex-wrap gap-2 kewords-wrapper">
                      <a href="javascript:;" className="kewords">
                        <span>قالب Angular</span>
                        <i className="material-icons-outlined fs-6">search</i>
                      </a>
                      <a href="javascript:;" className="kewords">
                        <span>داشبورد</span>
                        <i className="material-icons-outlined fs-6">search</i>
                      </a>
                      <a href="javascript:;" className="kewords">
                        <span>قالب ادمین</span>
                        <i className="material-icons-outlined fs-6">search</i>
                      </a>
                      <a href="javascript:;" className="kewords">
                        <span>ادمین Bootstrap 5</span>
                        <i className="material-icons-outlined fs-6">search</i>
                      </a>
                      <a href="javascript:;" className="kewords">
                        <span>تجارت الکترونیک HTML</span>
                        <i className="material-icons-outlined fs-6">search</i>
                      </a>
                      <a href="javascript:;" className="kewords">
                        <span>Sass</span>
                        <i className="material-icons-outlined fs-6">search</i>
                      </a>
                      <a href="javascript:;" className="kewords">
                        <span>Laravel 9</span>
                        <i className="material-icons-outlined fs-6">search</i>
                      </a>
                    </div>
                    <hr />
                    <p className="search-title">آموزش‌ها</p>
                    <div className="search-list d-flex flex-column gap-2">
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="list-icon">
                          <i className="material-icons-outlined fs-5">
                            play_circle
                          </i>
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">
                            آموزش‌های وردپرس
                          </h5>
                        </div>
                      </div>
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="list-icon">
                          <i className="material-icons-outlined fs-5">
                            shopping_basket
                          </i>
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">
                            آموزش‌های وب‌سایت تجارت الکترونیک
                          </h5>
                        </div>
                      </div>
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="list-icon">
                          <i className="material-icons-outlined fs-5">laptop</i>
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">
                            طراحی واکنش‌گرا
                          </h5>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <p className="search-title">اعضا</p>
                    <div className="search-list d-flex flex-column gap-2">
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="memmber-img">
                          <img
                            src="assets/images/avatars/01.png"
                            width={32}
                            height={32}
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">
                            اندرو استارک
                          </h5>
                        </div>
                      </div>
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="memmber-img">
                          <img
                            src="assets/images/avatars/02.png"
                            width={32}
                            height={32}
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">
                            سنترو جهنیا
                          </h5>
                        </div>
                      </div>
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="memmber-img">
                          <img
                            src="assets/images/avatars/03.png"
                            width={32}
                            height={32}
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">میشل کلارک</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center bg-transparent">
                    <a href="javascript:;" className="btn w-100">
                      مشاهده تمام نتایج جستجو
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="navbar-nav gap-1 nav-right-links align-items-center">
            <li className="nav-item d-lg-none mobile-search-btn">
              <a className="nav-link" href="javascript:;">
                <i className="material-icons-outlined">search</i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                href="javascript:;"
                data-bs-toggle="dropdown"
              >
                <img src="assets/images/county/02.png" width={22} alt="" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="javascript:;"
                  >
                    <img src="assets/images/county/01.png" width={20} alt="" />
                    <span className="ms-2">انگلیسی</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="javascript:;"
                  >
                    <img src="assets/images/county/02.png" width={20} alt="" />
                    <span className="ms-2">کاتالان</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="javascript:;"
                  >
                    <img src="assets/images/county/03.png" width={20} alt="" />
                    <span className="ms-2">فرانسوی</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="javascript:;"
                  >
                    <img src="assets/images/county/04.png" width={20} alt="" />
                    <span className="ms-2">بلیز</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="javascript:;"
                  >
                    <img src="assets/images/county/05.png" width={20} alt="" />
                    <span className="ms-2">کلمبیا</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="javascript:;"
                  >
                    <img src="assets/images/county/06.png" width={20} alt="" />
                    <span className="ms-2">اسپانیایی</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="javascript:;"
                  >
                    <img src="assets/images/county/07.png" width={20} alt="" />
                    <span className="ms-2">گرجی</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="javascript:;"
                  >
                    <img src="assets/images/county/08.png" width={20} alt="" />
                    <span className="ms-2">هندی</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown position-static d-md-flex d-none">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
                href="javascript:;"
              >
                <i className="material-icons-outlined">done_all</i>
              </a>
              <div className="dropdown-menu dropdown-menu-end mega-menu shadow-lg p-4 p-lg-5">
                <div className="mega-menu-widgets">
                  <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4 g-lg-5">
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <div className="mega-menu-icon flex-shrink-0 bg-danger">
                              <i className="material-icons-outlined">
                                question_answer
                              </i>
                            </div>
                            <div className="mega-menu-content">
                              <h5>بازاریابی</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src="assets/images/megaIcons/02.png"
                              width={40}
                              alt=""
                            />
                            <div className="mega-menu-content">
                              <h5>وب‌سایت</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src="assets/images/megaIcons/03.png"
                              width={40}
                              alt=""
                            />
                            <div className="mega-menu-content">
                              <h5>مشترکین</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src="assets/images/megaIcons/01.png"
                              width={40}
                              alt=""
                            />
                            <div className="mega-menu-content">
                              <h5>هاب‌اسپات</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src="assets/images/megaIcons/11.png"
                              width={40}
                              alt=""
                            />
                            <div className="mega-menu-content">
                              <h5>قالب‌ها</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src="assets/images/megaIcons/13.png"
                              width={40}
                              alt=""
                            />
                            <div className="mega-menu-content">
                              <h5>کتاب‌های الکترونیکی</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src="assets/images/megaIcons/12.png"
                              width={40}
                              alt=""
                            />
                            <div className="mega-menu-content">
                              <h5>فروش</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src="assets/images/megaIcons/08.png"
                              width={40}
                              alt=""
                            />
                            <div className="mega-menu-content">
                              <h5>ابزارها</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card rounded-4 shadow-none border mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-start gap-3">
                            <img
                              src="assets/images/megaIcons/09.png"
                              width={40}
                              alt=""
                            />
                            <div className="mega-menu-content">
                              <h5>آکادمی</h5>
                              <p className="mb-0 f-14">
                                در صنعت چاپ و طراحی گرافیک، Lorem ipsum یک متن
                                آزمایشی است که معمولاً برای نمایش فرم ظاهری سند
                                استفاده می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
                href="javascript:;"
              >
                <i className="material-icons-outlined">apps</i>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-apps shadow-lg p-3">
                <div className="border rounded-4 overflow-hidden">
                  <div className="row row-cols-3 g-0 border-bottom">
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/01.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">جیمیل</p>
                        </div>
                      </div>
                    </div>
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/02.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">اسکایپ</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/03.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">اسلک</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                  <div className="row row-cols-3 g-0 border-bottom">
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/04.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">یوتیوب</p>
                        </div>
                      </div>
                    </div>
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/05.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">گوگل</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/06.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">اینستاگرام</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                  <div className="row row-cols-3 g-0 border-bottom">
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/07.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">اسپاتیفای</p>
                        </div>
                      </div>
                    </div>
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/08.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">یاهو</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/09.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">فیسبوک</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                  <div className="row row-cols-3 g-0">
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/10.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">فیگما</p>
                        </div>
                      </div>
                    </div>
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/11.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">پی‌پال</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img
                            src="assets/images/apps/12.png"
                            width={36}
                            alt=""
                          />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">عکس</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
                href="javascript:;"
              >
                <i className="material-icons-outlined">notifications</i>
                <span className="badge-notify">۵</span>
              </a>
              <div className="dropdown-menu dropdown-notify dropdown-menu-end shadow">
                <div className="px-3 py-1 d-flex align-items-center justify-content-between border-bottom">
                  <h5 className="notiy-title mb-0">اطلاعیه‌ها</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret option"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="material-icons-outlined">more_vert</span>
                    </button>
                    <div className="dropdown-menu dropdown-option dropdown-menu-end shadow">
                      <div>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2 py-2"
                          href="javascript:;"
                        >
                          <i className="material-icons-outlined fs-6">
                            inventory_2
                          </i>
                          بایگانی همه
                        </a>
                      </div>
                      <div>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2 py-2"
                          href="javascript:;"
                        >
                          <i className="material-icons-outlined fs-6">
                            done_all
                          </i>
                          علامت‌گذاری همه به عنوان خوانده‌شده
                        </a>
                      </div>
                      <div>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2 py-2"
                          href="javascript:;"
                        >
                          <i className="material-icons-outlined fs-6">
                            mic_off
                          </i>
                          غیرفعال‌سازی اطلاعیه‌ها
                        </a>
                      </div>
                      <div>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2 py-2"
                          href="javascript:;"
                        >
                          <i className="material-icons-outlined fs-6">grade</i>
                          چه خبر است؟
                        </a>
                      </div>
                      <div>
                        <hr className="dropdown-divider" />
                      </div>
                      <div>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2 py-2"
                          href="javascript:;"
                        >
                          <i className="material-icons-outlined fs-6">
                            leaderboard
                          </i>
                          گزارش‌ها
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notify-list">
                  <div>
                    <a
                      className="dropdown-item border-bottom py-2"
                      href="javascript:;"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="">
                          <img
                            src="assets/images/avatars/01.png"
                            className="rounded-circle"
                            width={45}
                            height={45}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h5 className="notify-title">تبریک می‌گویم جان</h5>
                          <p className="mb-0 notify-desc">
                            تبریک‌های بسیار جان. شما جوایز را برنده شدید.
                          </p>
                          <p className="mb-0 notify-time">امروز</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      className="dropdown-item border-bottom py-2"
                      href="javascript:;"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="user-wrapper bg-primary text-primary bg-opacity-10">
                          <span>RS</span>
                        </div>
                        <div className="">
                          <h5 className="notify-title">حساب جدید ایجاد شد</h5>
                          <p className="mb-0 notify-desc">
                            از ایالات متحده یک کاربر ثبت‌نام کرده است.
                          </p>
                          <p className="mb-0 notify-time">دیروز</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      className="dropdown-item border-bottom py-2"
                      href="javascript:;"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="">
                          <img
                            src="assets/images/apps/13.png"
                            className="rounded-circle"
                            width={45}
                            height={45}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h5 className="notify-title">پرداخت دریافت شد</h5>
                          <p className="mb-0 notify-desc">
                            پرداخت جدید به‌طور موفقیت‌آمیز دریافت شد
                          </p>
                          <p className="mb-0 notify-time">۱ روز پیش</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      className="dropdown-item border-bottom py-2"
                      href="javascript:;"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="">
                          <img
                            src="assets/images/apps/14.png"
                            className="rounded-circle"
                            width={45}
                            height={45}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h5 className="notify-title">سفارش جدید دریافت شد</h5>
                          <p className="mb-0 notify-desc">
                            سفارش جدید از میشل دریافت شد
                          </p>
                          <p className="mb-0 notify-time">۲:۱۵ ب.ظ</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      className="dropdown-item border-bottom py-2"
                      href="javascript:;"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="">
                          <img
                            src="assets/images/avatars/06.png"
                            className="rounded-circle"
                            width={45}
                            height={45}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h5 className="notify-title">تبریک می‌گویم جان</h5>
                          <p className="mb-0 notify-desc">
                            تبریک‌های بسیار جان. شما جوایز را برنده شدید.
                          </p>
                          <p className="mb-0 notify-time">امروز</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item py-2" href="javascript:;">
                      <div className="d-flex align-items-center gap-3">
                        <div className="user-wrapper bg-danger text-danger bg-opacity-10">
                          <span>PK</span>
                        </div>
                        <div className="">
                          <h5 className="notify-title">حساب جدید ایجاد شد</h5>
                          <p className="mb-0 notify-desc">
                            از ایالات متحده یک کاربر ثبت‌نام کرده است.
                          </p>
                          <p className="mb-0 notify-time">دیروز</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item d-md-flex d-none">
              <a
                className="nav-link position-relative"
                data-bs-toggle="offcanvas"
                href="#offcanvasCart"
              >
                <i className="material-icons-outlined">shopping_cart</i>
                <span className="badge-notify">۸</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="javascrpt:;"
                className="dropdown-toggle dropdown-toggle-nocaret"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/images/avatars/01.png"
                  className="rounded-circle p-1 border"
                  width={45}
                  height={45}
                  alt=""
                />
              </a>
              <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
                <a className="dropdown-item gap-2 py-2" href="javascript:;">
                  <div className="text-center">
                    <img
                      src="assets/images/avatars/01.png"
                      className="rounded-circle p-1 shadow mb-3"
                      width={90}
                      height={90}
                      alt=""
                    />
                    <h5 className="user-name mb-0 fw-bold">سلام، جان</h5>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined">person_outline</i>
                  پروفایل
                </a>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  {/* <i className="material-icons-outlined">local_bar</i>تنظیمات */}
                </a>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined">dashboard</i>داشبورد
                </a>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined">account_balance</i>
                  درآمد
                </a>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined">cloud_download</i>
                  دانلودها
                </a>
                <hr className="dropdown-divider" />
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined">power_settings_new</i>
                  خروج
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <script src="/assets/js/pace.min.js" defer></script>
      {/*end top header*/} {/*start sidebar*/}
      <aside className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          {/* <div className="logo-icon">
            <img
              src="assets/images/logo-icon.png"
              className="logo-img"
              alt=""
            />
          </div> */}
          <div className="logo-name flex-grow-1">
            <h5 className="mb-0 d-flex justify-content-center align-items-center" >گنج درون</h5>
          </div>
          <div className="sidebar-close">
            <span className="material-icons-outlined">close</span>
          </div>
        </div>
        <div className="sidebar-nav">
          {/*navigation*/}
          <ul className="metismenu" id="sidenav">
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="material-icons-outlined">home</i>
                </div>
                <div className="menu-title">داشبورد</div>
              </a>
              <ul>
                <li>
                  <a href="index.html">
                    <i className="material-icons-outlined">arrow_left</i>تحلیل
                  </a>
                </li>
                <li>
                  <a href="index2.html">
                    <i className="material-icons-outlined">arrow_left</i>تجارت
                    الکترونیک
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="material-icons-outlined">widgets</i>
                </div>
                <div className="menu-title">ویجت‌ها</div>
              </a>
              <ul>
                <li>
                  <a href="widgets-data.html">
                    <i className="material-icons-outlined">arrow_left</i>داده‌ها
                  </a>
                </li>
                <li>
                  <a href="widgets-static.html">
                    <i className="material-icons-outlined">arrow_left</i>استاتیک
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">apps</i>
                </div>
                <div className="menu-title">برنامه‌ها</div>
              </a>
              <ul>
                <li>
                  <a href="app-emailbox.html">
                    <i className="material-icons-outlined">arrow_left</i>جعبه
                    ایمیل
                  </a>
                </li>
                <li>
                  <a href="app-emailread.html">
                    <i className="material-icons-outlined">arrow_left</i>ایمیل
                    خوانده‌شده
                  </a>
                </li>
                <li>
                  <a href="app-chat-box.html">
                    <i className="material-icons-outlined">arrow_left</i>چت
                  </a>
                </li>
                <li>
                  <a href="app-fullcalender.html">
                    <i className="material-icons-outlined">arrow_left</i>تقویم
                  </a>
                </li>
                <li>
                  <a href="app-to-do.html">
                    <i className="material-icons-outlined">arrow_left</i>لیست
                    کارها
                  </a>
                </li>
                <li>
                  <a href="app-invoice.html">
                    <i className="material-icons-outlined">arrow_left</i>فاکتور
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">عناصر UI</li>
            <li>
              <a href="cards.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">inventory_2</i>
                </div>
                <div className="menu-title">کارت‌ها</div>
              </a>
            </li>
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="material-icons-outlined">shopping_bag</i>
                </div>
                <div className="menu-title">تجارت الکترونیک</div>
              </a>
              <ul>
                <li>
                  <a href="ecommerce-add-product.html">
                    <i className="material-icons-outlined">arrow_left</i>افزودن
                    محصول
                  </a>
                </li>
                <li>
                  <a href="ecommerce-products.html">
                    <i className="material-icons-outlined">arrow_left</i>محصولات
                  </a>
                </li>
                <li>
                  <a href="ecommerce-customers.html">
                    <i className="material-icons-outlined">arrow_left</i>مشتریان
                  </a>
                </li>
                <li>
                  <a href="ecommerce-customer-details.html">
                    <i className="material-icons-outlined">arrow_left</i>جزئیات
                    مشتری
                  </a>
                </li>
                <li>
                  <a href="ecommerce-orders.html">
                    <i className="material-icons-outlined">arrow_left</i>سفارشات
                  </a>
                </li>
                <li>
                  <a href="ecommerce-order-details.html">
                    <i className="material-icons-outlined">arrow_left</i>جزئیات
                    سفارش
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">card_giftcard</i>
                </div>
                <div className="menu-title">کامپوننت‌ها</div>
              </a>
              <ul>
                <li>
                  <a href="component-alerts.html">
                    <i className="material-icons-outlined">arrow_left</i>هشدارها
                  </a>
                </li>
                <li>
                  <a href="component-accordions.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    اکاردیون‌ها
                  </a>
                </li>
                <li>
                  <a href="component-badges.html">
                    <i className="material-icons-outlined">arrow_left</i>نشان‌ها
                  </a>
                </li>
                <li>
                  <a href="component-buttons.html">
                    <i className="material-icons-outlined">arrow_left</i>دکمه‌ها
                  </a>
                </li>
                <li>
                  <a href="component-carousels.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    کاروسل‌ها
                  </a>
                </li>
                <li>
                  <a href="component-media-object.html">
                    <i className="material-icons-outlined">arrow_left</i>شیء
                    رسانه‌ای
                  </a>
                </li>
                <li>
                  <a href="component-modals.html">
                    <i className="material-icons-outlined">arrow_left</i>مدال‌ها
                  </a>
                </li>
                <li>
                  <a href="component-navs-tabs.html">
                    <i className="material-icons-outlined">arrow_left</i>ناوبری
                    و تب‌ها
                  </a>
                </li>
                <li>
                  <a href="component-navbar.html">
                    <i className="material-icons-outlined">arrow_left</i>نوار
                    ناوبری
                  </a>
                </li>
                <li>
                  <a href="component-paginations.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    صفحه‌بندی
                  </a>
                </li>
                <li>
                  <a href="component-popovers-tooltips.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    پاپ‌اورها و ابزارها
                  </a>
                </li>
                <li>
                  <a href="component-progress-bars.html">
                    <i className="material-icons-outlined">arrow_left</i>پیشرفت
                  </a>
                </li>
                <li>
                  <a href="component-spinners.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    چرخاننده‌ها
                  </a>
                </li>
                <li>
                  <a href="component-notifications.html">
                    <i className="material-icons-outlined">arrow_left</i>اعلانات
                  </a>
                </li>
                <li>
                  <a href="component-avtars-chips.html">
                    <i className="material-icons-outlined">arrow_left</i>نماد
                    های آواتار
                  </a>
                </li>
                <li>
                  <a href="component-typography.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    تایپوگرافی
                  </a>
                </li>
                <li>
                  <a href="component-text-utilities.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    ابزارهای متنی
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">view_agenda</i>
                </div>
                <div className="menu-title">آیکون‌ها</div>
              </a>
              <ul>
                <li>
                  <a href="icons-line-icons.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    آیکون‌های خطی
                  </a>
                </li>
                <li>
                  <a href="icons-boxicons.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    باکس‌آیکن‌ها
                  </a>
                </li>
                <li>
                  <a href="icons-feather-icons.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    آیکون‌های پر
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">فرم‌ها و جداول</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">toc</i>
                </div>
                <div className="menu-title">فرم‌ها</div>
              </a>
              <ul>
                <li>
                  <a href="form-elements.html">
                    <i className="material-icons-outlined">arrow_left</i>عناصر
                    فرم
                  </a>
                </li>
                <li>
                  <a href="form-input-group.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    گروه‌های ورودی
                  </a>
                </li>
                <li>
                  <a href="form-radios-and-checkboxes.html">
                    <i className="material-icons-outlined">arrow_left</i>رادیوها
                    و چک‌باکس‌ها
                  </a>
                </li>
                <li>
                  <a href="form-layouts.html">
                    <i className="material-icons-outlined">arrow_left</i>چیدمان
                    فرم‌ها
                  </a>
                </li>
                <li>
                  <a href="form-validations.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    اعتبارسنجی فرم
                  </a>
                </li>
                <li>
                  <a href="form-wizard.html">
                    <i className="material-icons-outlined">arrow_left</i>جادوگر
                    فرم
                  </a>
                </li>
                <li>
                  <a href="form-file-upload.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    بارگذاری فایل
                  </a>
                </li>
                <li>
                  <a href="form-date-time-pickes.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    انتخابگرهای تاریخ و زمان
                  </a>
                </li>
                <li>
                  <a href="form-select2.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    انتخابگر2
                  </a>
                </li>
                <li>
                  <a href="form-repeater.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    تکرارکننده فرم
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">api</i>
                </div>
                <div className="menu-title">جداول</div>
              </a>
              <ul>
                <li>
                  <a href="table-basic-table.html">
                    <i className="material-icons-outlined">arrow_left</i>جدول
                    پایه
                  </a>
                </li>
                <li>
                  <a href="table-datatable.html">
                    <i className="material-icons-outlined">arrow_left</i>جدول
                    داده
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">صفحات</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">lock</i>
                </div>
                <div className="menu-title">احراز هویت</div>
              </a>
              <ul>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="material-icons-outlined">arrow_left</i>پایه‌ای
                  </a>
                  <ul>
                    <li>
                      <a href="auth-basic-login.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        ورود
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-register.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        ثبت‌نام
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-forgot-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        فراموشی رمز عبور
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-reset-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        تنظیم مجدد رمز عبور
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="material-icons-outlined">arrow_left</i>پوشش
                  </a>
                  <ul>
                    <li>
                      <a href="auth-cover-login.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        ورود
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-register.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        ثبت‌نام
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-forgot-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        فراموشی رمز عبور
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-reset-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        تنظیم مجدد رمز عبور
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="material-icons-outlined">arrow_left</i>
                    باکس‌دار
                  </a>
                  <ul>
                    <li>
                      <a href="auth-boxed-login.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        ورود
                      </a>
                    </li>
                    <li>
                      <a href="auth-boxed-register.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        ثبت‌نام
                      </a>
                    </li>
                    <li>
                      <a href="auth-boxed-forgot-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        فراموشی رمز عبور
                      </a>
                    </li>
                    <li>
                      <a href="auth-boxed-reset-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_left</i>
                        تنظیم مجدد رمز عبور
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="user-profile.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">person</i>
                </div>
                <div className="menu-title">پروفایل کاربر</div>
              </a>
            </li>
            <li>
              <a href="timeline.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">join_right</i>
                </div>
                <div className="menu-title">خط زمانی</div>
              </a>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">report_problem</i>
                </div>
                <div className="menu-title">صفحات</div>
              </a>
              <ul>
                <li>
                  <a href="pages-error-404.html" target="_blank">
                    <i className="material-icons-outlined">arrow_left</i>خطای
                    404
                  </a>
                </li>
                <li>
                  <a href="pages-error-505.html" target="_blank">
                    <i className="material-icons-outlined">arrow_left</i>خطای
                    505
                  </a>
                </li>
                <li>
                  <a href="pages-coming-soon.html" target="_blank">
                    <i className="material-icons-outlined">arrow_left</i>به زودی
                  </a>
                </li>
                <li>
                  <a href="pages-starter-page.html" target="_blank">
                    <i className="material-icons-outlined">arrow_left</i>صفحه
                    خالی
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="faq.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">help_outline</i>
                </div>
                <div className="menu-title">سؤالات متداول</div>
              </a>
            </li>
            <li>
              <a href="pricing-table.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">sports_football</i>
                </div>
                <div className="menu-title">قیمت گذاری</div>
              </a>
            </li>
            <li className="menu-label">نمودارها و نقشه‌ها</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">fitbit</i>
                </div>
                <div className="menu-title">نمودارها</div>
              </a>
              <ul>
                <li>
                  <a href="charts-apex-chart.html">
                    <i className="material-icons-outlined">arrow_left</i>Apex
                    Chart
                  </a>
                </li>
                <li>
                  <a href="charts-chartjs.html">
                    <i className="material-icons-outlined">arrow_left</i>Chart
                    JS
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">sports_football</i>
                </div>
                <div className="menu-title">نقشه‌ها</div>
              </a>
              <ul>
                <li>
                  <a href="map-google-maps.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    نقشه‌های گوگل
                  </a>
                </li>
                <li>
                  <a href="map-vector-maps.html">
                    <i className="material-icons-outlined">arrow_left</i>
                    نقشه‌های برداری
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">سایر</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">face_5</i>
                </div>
                <div className="menu-title">سطوح منو</div>
              </a>
              <ul>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="material-icons-outlined">arrow_left</i>سطح یک
                  </a>
                  <ul>
                    <li>
                      <a className="has-arrow" href="javascript:;">
                        <i className="material-icons-outlined">arrow_left</i>سطح
                        دو
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:;">
                            <i className="material-icons-outlined">
                              arrow_left
                            </i>
                            سطح سه
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">description</i>
                </div>
                <div className="menu-title">مستندات</div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">support</i>
                </div>
                <div className="menu-title">پشتیبانی</div>
              </a>
            </li>
          </ul>
          {/*end navigation*/}
        </div>
      </aside>
      {/*end sidebar*/}
      <main className="main-wrapper">
        <div className="main-content">
          <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3" dir="rtl" >
            <div className="breadcrumb-title pe-3" >داشبورد</div>
            <div className="ps-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="javascript:;" />
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    فروشگاهی
                  </li>
                </ol>
              </nav>
            </div>
            <div className="ms-auto">
              <div className="btn-group">
{/*                 */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 col-xxl-4 d-flex">
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0">
                        تبریک <span className="fw-600">جان</span>
                      </h5>
                      <img
                        src="assets/images/apps/party-popper.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <p className="mb-4">شما بهترین فروشنده این ماه هستید</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="">
                        <h3 className="mb-0 text-indigo">168,000 تومان</h3>
                        <p className="mb-3">۵۸٪ از هدف فروش</p>
                        <button className="btn btn-grd btn-grd-primary rounded-5 border-0 px-4">
                          مشاهده جزئیات
                        </button>
                      </div>
                      <img
                        src="assets/images/apps/gift-box-3.png"
                        width={100}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xxl-2 d-flex">
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
                      <span className="material-icons-outlined fs-5">
                        shopping_cart
                      </span>
                    </div>
                    <div>
                      <span className="text-success d-flex align-items-center">
                        +۲۴٪
                        <i className="material-icons-outlined">expand_less</i>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-0">۲۴۸K</h4>
                    <p className="mb-3">تعداد کل سفارشات</p>
                    <div id="chart1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xxl-2 d-flex">
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success">
                      <span className="material-icons-outlined fs-5">
                        attach_money
                      </span>
                    </div>
                    <div>
                      <span className="text-success d-flex align-items-center">
                        +۱۴٪
                        <i className="material-icons-outlined">expand_less</i>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-0">47,000 تومان</h4>
                    <p className="mb-3">کل فروش</p>
                    <div id="chart2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-2 d-flex">
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info">
                      <span className="material-icons-outlined fs-5">
                        visibility
                      </span>
                    </div>
                    <div>
                      <span className="text-danger d-flex align-items-center">
                        -۳۵٪
                        <i className="material-icons-outlined">expand_less</i>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-0">۱۸۹K</h4>
                    <p className="mb-3">تعداد کل بازدیدها</p>
                    <div id="chart3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-2 d-flex">
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-10 text-warning">
                      <span className="material-icons-outlined fs-5">
                        leaderboard
                      </span>
                    </div>
                    <div>
                      <span className="text-success d-flex align-items-center">
                        +۱۸٪
                        <i className="material-icons-outlined">expand_less</i>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-0">۲۴.۶٪</h4>
                    <p className="mb-3">نرخ پرش</p>
                    <div id="chart4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-12 col-xl-4">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="">
                        <h5 className="mb-0">وضعیت سفارش</h5>
                      </div>
                      <div className="dropdown">
                        <a
                          href="javascript:;"
                          className="dropdown-toggle-nocaret options dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="material-icons-outlined fs-5">
                            more_vert
                          </span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="javascript:;">
                              عملیات
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:;">
                              عملیات دیگر
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:;">
                              چیز دیگری اینجا
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="position-relative">
                      <div className="piechart-legend">
                        <h2 className="mb-1">۶۸٪</h2>
                        <h6 className="mb-0">کل فروش</h6>
                      </div>
                      <div id="chart6" />
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0 d-flex align-items-center gap-2 w-25">
                          <span className="material-icons-outlined fs-6 text-primary">
                            fiber_manual_record
                          </span>
                          فروش
                        </p>
                        <div className="">
                          <p className="mb-0">۶۸٪</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0 d-flex align-items-center gap-2 w-25">
                          <span className="material-icons-outlined fs-6 text-danger">
                            fiber_manual_record
                          </span>
                          محصول
                        </p>
                        <div className="">
                          <p className="mb-0">۲۵٪</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0 d-flex align-items-center gap-2 w-25">
                          <span className="material-icons-outlined fs-6 text-success">
                            fiber_manual_record
                          </span>
                          درآمد
                        </p>
                        <div className="">
                          <p className="mb-0">۱۴٪</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="">
                      <h5 className="mb-0">فروش و بازدیدها</h5>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات دیگر
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            چیز دیگری اینجا
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="chart5" />
                  <div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
                    <div className="d-flex align-items-center gap-4">
                      <div className="">
                        <p className="mb-0 data-attributes">
                          <span data-peity='{ "fill": ["#2196f3", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
                            5/7
                          </span>
                        </p>
                      </div>
                      <div className="">
                        <p className="mb-1 fs-6 fw-bold">ماهانه</p>
                        <h2 className="mb-0">۶۵,۱۲۷</h2>
                        <p className="mb-0">
                          <span className="text-success me-2 fw-medium">
                            ۱۶.۵٪
                          </span>
                          <span>۵۵.۲۱ دلار</span>
                        </p>
                      </div>
                    </div>
                    <div className="vr" />
                    <div className="d-flex align-items-center gap-4">
                      <div className="">
                        <p className="mb-0 data-attributes">
                          <span data-peity='{ "fill": ["#ffd200", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
                            5/7
                          </span>
                        </p>
                      </div>
                      <div className="">
                        <p className="mb-1 fs-6 fw-bold">سالانه</p>
                        <h2 className="mb-0">۹۸۴,۲۴۶</h2>
                        <p className="mb-0">
                          <span className="text-success me-2 fw-medium">
                            ۲۴.۹٪
                          </span>
                          <span>۲۶۷.۳۵ دلار</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-12 col-lg-6 col-xxl-4 d-flex">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="">
                      <h5 className="mb-0">درآمد اجتماعی</h5>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات دیگر
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            چیز دیگری اینجا
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <h3 className="mb-0">48,569</h3>
                      <p className="mb-0 text-success gap-3">
                        27%
                        <span className="material-icons-outlined fs-6">
                          arrow_upward
                        </span>
                      </p>
                    </div>
                    <p className="mb-0 font-13">درآمد سال گذشته</p>
                  </div>
                  <div className="table-responsive">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                          <img
                            src="assets/images/apps/17.png"
                            width={40}
                            alt=""
                          />
                          <div>
                            <h6 className="mb-0">فیسبوک</h6>
                            <p className="mb-0">رسانه‌های اجتماعی</p>
                          </div>
                        </div>
                        <h5 className="mb-0">45,689</h5>
                        <div className="card-lable bg-success text-success bg-opacity-10">
                          <p className="text-success mb-0">+28.5%</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                          <img
                            src="assets/images/apps/twitter-circle.png"
                            width={40}
                            alt=""
                          />
                          <div>
                            <h6 className="mb-0">توییتر</h6>
                            <p className="mb-0">رسانه‌های اجتماعی</p>
                          </div>
                        </div>
                        <h5 className="mb-0">34,248</h5>
                        <div className="card-lable bg-danger text-danger bg-opacity-10">
                          <p className="text-red mb-0">-14.5%</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                          <img
                            src="assets/images/apps/03.png"
                            width={40}
                            alt=""
                          />
                          <div>
                            <h6 className="mb-0">تیک تاک</h6>
                            <p className="mb-0">سرگرمی</p>
                          </div>
                        </div>
                        <h5 className="mb-0">45,689</h5>
                        <div className="card-lable bg-success text-success bg-opacity-10">
                          <p className="text-green mb-0">+28.5%</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                          <img
                            src="assets/images/apps/19.png"
                            width={40}
                            alt=""
                          />
                          <div>
                            <h6 className="mb-0">اینستاگرام</h6>
                            <p className="mb-0">رسانه‌های اجتماعی</p>
                          </div>
                        </div>
                        <h5 className="mb-0">67,249</h5>
                        <div className="card-lable bg-danger text-danger bg-opacity-10">
                          <p className="text-red mb-0">-43.5%</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                          <img
                            src="assets/images/apps/20.png"
                            width={40}
                            alt=""
                          />
                          <div>
                            <h6 className="mb-0">اسنپ چت</h6>
                            <p className="mb-0">مکالمه</p>
                          </div>
                        </div>
                        <h5 className="mb-0">89,178</h5>
                        <div className="card-lable bg-success text-success bg-opacity-10">
                          <p className="text-green mb-0">+24.7%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-4 d-flex">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="">
                      <h5 className="mb-0">محصولات محبوب</h5>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات دیگر
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            چیز دیگری اینجا
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/top-products/01.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">ساعت مچی اپل</h6>
                        <p className="mb-0">فروش: 258</p>
                      </div>
                      <div className="text-center">
                        <h6 className="mb-1">$199</h6>
                        <p className="mb-0 text-success font-13">+12%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/top-products/02.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">ست تلفن همراه</h6>
                        <p className="mb-0">فروش: 169</p>
                      </div>
                      <div className="text-center">
                        <h6 className="mb-1">$159</h6>
                        <p className="mb-0 text-success font-13">+14%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/top-products/04.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">جفت کفش خاکستری</h6>
                        <p className="mb-0">فروش: 859</p>
                      </div>
                      <div className="">
                        <div className="text-center">
                          <h6 className="mb-1">$279</h6>
                          <p className="mb-0 text-danger font-13">-12%</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/top-products/05.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">تشک یوگا آبی</h6>
                        <p className="mb-0">فروش: 328</p>
                      </div>
                      <div className="text-center">
                        <h6 className="mb-1">$389</h6>
                        <p className="mb-0 text-success font-13">+25%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/top-products/06.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">بسته لوازم آرایشی</h6>
                        <p className="mb-0">فروش: 221</p>
                      </div>
                      <div className="text-center">
                        <h6 className="mb-1">$99</h6>
                        <p className="mb-0 text-danger font-13">-20%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-4 d-flex">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="">
                      <h5 className="mb-0">فروشندگان برتر</h5>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات دیگر
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            چیز دیگری اینجا
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/avatars/01.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">آجی سیدهو</h6>
                        <p className="mb-0">فروش: 879</p>
                      </div>
                      <div className="ratings">
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/avatars/02.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">آجی سیدهو</h6>
                        <p className="mb-0">فروش: 879</p>
                      </div>
                      <div className="ratings">
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/avatars/03.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">آجی سیدهو</h6>
                        <p className="mb-0">فروش: 879</p>
                      </div>
                      <div className="ratings">
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/avatars/04.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">آجی سیدهو</h6>
                        <p className="mb-0">فروش: 879</p>
                      </div>
                      <div className="ratings">
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/avatars/08.png"
                        width={55}
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0">آجی سیدهو</h6>
                        <p className="mb-0">فروش: 879</p>
                      </div>
                      <div className="ratings">
                        <span className="material-icons-outlined text-warning fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                        <span className="material-icons-outlined fs-5">
                          star
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xxl-6 d-flex">
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="">
                      <h5 className="mb-0">تراکنش‌ها</h5>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات دیگر
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            چیز دیگری اینجا
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-middle mb-0 table-striped">
                      <thead>
                        <tr>
                          <th>تاریخ</th>
                          <th>نام منبع</th>
                          <th>وضعیت</th>
                          <th>مقدار</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="">
                              <h6 className="mb-0">10 شهریور 1403</h6>
                              <p className="mb-0">8:20 شب</p>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center flex-row gap-3">
                              <div className="">
                                <img
                                  src="assets/images/apps/paypal.png"
                                  width={35}
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <h6 className="mb-0">پی‌پال</h6>
                                <p className="mb-0">طرح تجاری</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="card-lable bg-success text-success bg-opacity-10">
                              <p className="text-success mb-0">پرداخت شده</p>
                            </div>
                          </td>
                          <td>
                            <h5 className="mb-0">$5897</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="">
                              <h6 className="mb-0">10 شهریور 1403</h6>
                              <p className="mb-0">8:20 شب</p>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center flex-row gap-3">
                              <div className="">
                                <img
                                  src="assets/images/apps/13.png"
                                  width={35}
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <h6 className="mb-0">ویزا</h6>
                                <p className="mb-0">طرح تجاری</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="card-lable bg-danger text-danger bg-opacity-10">
                              <p className="text-danger mb-0">پرداخت نشده</p>
                            </div>
                          </td>
                          <td>
                            <h5 className="mb-0">$9638</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="">
                              <h6 className="mb-0">10 شهریور 1403</h6>
                              <p className="mb-0">8:20 شب</p>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center flex-row gap-3">
                              <div className="">
                                <img
                                  src="assets/images/apps/behance.png"
                                  width={35}
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <h6 className="mb-0">بهنس</h6>
                                <p className="mb-0">طرح تجاری</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="card-lable bg-success text-success bg-opacity-10">
                              <p className="text-success mb-0">پرداخت شده</p>
                            </div>
                          </td>
                          <td>
                            <h5 className="mb-0">$9638</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="">
                              <h6 className="mb-0">10 شهریور 1403</h6>
                              <p className="mb-0">8:20 شب</p>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center flex-row gap-3">
                              <div className="">
                                <img
                                  src="assets/images/apps/07.png"
                                  width={35}
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <h6 className="mb-0">اسپاتیفای</h6>
                                <p className="mb-0">طرح تجاری</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="card-lable bg-success text-success bg-opacity-10">
                              <p className="text-success mb-0">پرداخت شده</p>
                            </div>
                          </td>
                          <td>
                            <h5 className="mb-0">$9638</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="">
                              <h6 className="mb-0">10 شهریور 1403</h6>
                              <p className="mb-0">8:20 شب</p>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center flex-row gap-3">
                              <div className="">
                                <img
                                  src="assets/images/apps/05.png"
                                  width={35}
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <h6 className="mb-0">گوگل</h6>
                                <p className="mb-0">طرح تجاری</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="card-lable bg-danger text-danger bg-opacity-10">
                              <p className="text-danger mb-0">پرداخت نشده</p>
                            </div>
                          </td>
                          <td>
                            <h5 className="mb-0">$9638</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="">
                              <h6 className="mb-0">10 شهریور 1403</h6>
                              <p className="mb-0">8:20 شب</p>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center flex-row gap-3">
                              <div className="">
                                <img
                                  src="assets/images/apps/apple.png"
                                  width={35}
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <h6 className="mb-0">اپل</h6>
                                <p className="mb-0">طرح تجاری</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="card-lable bg-success text-success bg-opacity-10">
                              <p className="text-success mb-0">پرداخت شده</p>
                            </div>
                          </td>
                          <td>
                            <h5 className="mb-0">$9638</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-3 d-flex flex-column">
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1">پیام‌ها</p>
                      <h3 className="mb-0">986</h3>
                    </div>
                    <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-danger">
                      <span className="material-icons-outlined fs-5 text-white">
                        shopping_cart
                      </span>
                    </div>
                  </div>
                  <div className="progress mb-0" style={{ height: 6 }}>
                    <div
                      className="progress-bar bg-grd-danger"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-3 gap-2">
                    <div className="card-lable bg-success bg-opacity-10">
                      <p className="text-success mb-0">+34.7%</p>
                    </div>
                    <p className="mb-0 font-13">از ماه گذشته</p>
                  </div>
                </div>
              </div>
              <div className="card rounded-4 w-100 d-none">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="">
                      <div className="">
                        <p className="mb-2">سود کل</p>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <h4 className="mb-0">$75,365</h4>
                        <div className="card-lable bg-danger bg-opacity-10">
                          <p className="text-danger mb-0">-26.9%</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات دیگر
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            چیز دیگری اینجا
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="chart7" />
                </div>
              </div>
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="">
                      <h5 className="mb-0">$15.7K</h5>
                      <p className="mb-0">سود کل</p>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات دیگر
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            چیز دیگری اینجا
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <div id="chart9" />
                  </div>
                  <div className="text-center mt-3">
                    <p className="mb-0">
                      <span className="text-success me-1">12.5%</span> از ماه
                      گذشته
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-3 d-flex">
              <div className="card rounded-4 w-100">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="">
                      <h5 className="mb-0">بودجه ماهانه</h5>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            عملیات دیگر
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            چیز دیگری اینجا
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chart-container mb-2">
                    <div id="chart8" />
                  </div>
                  <div className="text-center">
                    <h3>$84,256</h3>
                    <p className="mb-3">
                      فرمنتوم وستیبولوم نیسل اید نولا اولتریس کنوالیس.
                    </p>
                    <button className="btn btn-grd btn-grd-info rounded-5 px-4">
                      افزایش بودجه
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </main>
      {/*start overlay*/}
      <div className="overlay btn-toggle" />
      {/*end overlay*/}
      {/*start cart*/}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasCart">
        <div className="offcanvas-header border-bottom h-70">
          <h5 className="mb-0" id="offcanvasRightLabel">
            ۸ سفارش جدید
          </h5>
          <a
            href="javascript:;"
            className="primaery-menu-close"
            data-bs-dismiss="offcanvas"
          >
            <i className="material-icons-outlined">close</i>
          </a>
        </div>
        <div className="offcanvas-body p-0">
          <div className="order-list">
            <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
              <div className="order-img">
                <img
                  src="assets/images/orders/01.png"
                  className="img-fluid rounded-3"
                  width={75}
                  alt=""
                />
              </div>
              <div className="order-info flex-grow-1">
                <h5 className="mb-1 order-title">کفش مردانه سفید</h5>
                <p className="mb-0 order-price">۲۸۹ دلار</p>
              </div>
              <div className="d-flex">
                <a className="order-delete">
                  <span className="material-icons-outlined">delete</span>
                </a>
                <a className="order-delete">
                  <span className="material-icons-outlined">visibility</span>
                </a>
              </div>
            </div>
            <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
              <div className="order-img">
                <img
                  src="assets/images/orders/02.png"
                  className="img-fluid rounded-3"
                  width={75}
                  alt=""
                />
              </div>
              <div className="order-info flex-grow-1">
                <h5 className="mb-1 order-title">ایرپاد قرمز</h5>
                <p className="mb-0 order-price">۱۴۹ دلار</p>
              </div>
              <div className="d-flex">
                <a className="order-delete">
                  <span className="material-icons-outlined">delete</span>
                </a>
                <a className="order-delete">
                  <span className="material-icons-outlined">visibility</span>
                </a>
              </div>
            </div>
            <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
              <div className="order-img">
                <img
                  src="assets/images/orders/03.png"
                  className="img-fluid rounded-3"
                  width={75}
                  alt=""
                />
              </div>
              <div className="order-info flex-grow-1">
                <h5 className="mb-1 order-title">تی‌شرت مردانه</h5>
                <p className="mb-0 order-price">۱۳۹ دلار</p>
              </div>
              <div className="d-flex">
                <a className="order-delete">
                  <span className="material-icons-outlined">delete</span>
                </a>
                <a className="order-delete">
                  <span className="material-icons-outlined">visibility</span>
                </a>
              </div>
            </div>
            <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
              <div className="order-img">
                <img
                  src="assets/images/orders/04.png"
                  className="img-fluid rounded-3"
                  width={75}
                  alt=""
                />
              </div>
              <div className="order-info flex-grow-1">
                <h5 className="mb-1 order-title">جین آبی کژوال</h5>
                <p className="mb-0 order-price">۴۸۵ دلار</p>
              </div>
              <div className="d-flex">
                <a className="order-delete">
                  <span className="material-icons-outlined">delete</span>
                </a>
                <a className="order-delete">
                  <span className="material-icons-outlined">visibility</span>
                </a>
              </div>
            </div>
            <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
              <div className="order-img">
                <img
                  src="assets/images/orders/05.png"
                  className="img-fluid rounded-3"
                  width={75}
                  alt=""
                />
              </div>
              <div className="order-info flex-grow-1">
                <h5 className="mb-1 order-title">پیراهن‌های شیک</h5>
                <p className="mb-0 order-price">۷۵۸ دلار</p>
              </div>
              <div className="d-flex">
                <a className="order-delete">
                  <span className="material-icons-outlined">delete</span>
                </a>
                <a className="order-delete">
                  <span className="material-icons-outlined">visibility</span>
                </a>
              </div>
            </div>
            <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
              <div className="order-img">
                <img
                  src="assets/images/orders/06.png"
                  className="img-fluid rounded-3"
                  width={75}
                  alt=""
                />
              </div>
              <div className="order-info flex-grow-1">
                <h5 className="mb-1 order-title">ست مبل خانگی</h5>
                <p className="mb-0 order-price">۵۴۶ دلار</p>
              </div>
              <div className="d-flex">
                <a className="order-delete">
                  <span className="material-icons-outlined">delete</span>
                </a>
                <a className="order-delete">
                  <span className="material-icons-outlined">visibility</span>
                </a>
              </div>
            </div>
            <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
              <div className="order-img">
                <img
                  src="assets/images/orders/07.png"
                  className="img-fluid rounded-3"
                  width={75}
                  alt=""
                />
              </div>
              <div className="order-info flex-grow-1">
                <h5 className="mb-1 order-title">آیفون مشکی</h5>
                <p className="mb-0 order-price">۱۰۴۹ دلار</p>
              </div>
              <div className="d-flex">
                <a className="order-delete">
                  <span className="material-icons-outlined">delete</span>
                </a>
                <a className="order-delete">
                  <span className="material-icons-outlined">visibility</span>
                </a>
              </div>
            </div>
            <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
              <div className="order-img">
                <img
                  src="assets/images/orders/08.png"
                  className="img-fluid rounded-3"
                  width={75}
                  alt=""
                />
              </div>
              <div className="order-info flex-grow-1">
                <h5 className="mb-1 order-title">ساعت طلایی</h5>
                <p className="mb-0 order-price">۶۸۹ دلار</p>
              </div>
              <div className="d-flex">
                <a className="order-delete">
                  <span className="material-icons-outlined">delete</span>
                </a>
                <a className="order-delete">
                  <span className="material-icons-outlined">visibility</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer h-70 p-3 border-top">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-grd btn-grd-primary"
              data-bs-dismiss="offcanvas"
            >
              مشاهده محصولات
            </button>
          </div>
        </div>
      </div>
      {/*end cart*/}
      {/*شروع سوئیچ*/}
      {/* <button
        className="btn btn-grd btn-grd-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
      >
        <i className="material-icons-outlined">tune</i>سفارشی‌سازی
      </button> */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="staticBackdrop"
      >
        <div className="offcanvas-header border-bottom h-70">
          <div className="">
            <h5 className="mb-0">تنظیم‌کننده تم</h5>
            <p className="mb-0">تم خود را سفارشی کنید</p>
          </div>
          <a
            href="javascript:;"
            className="primaery-menu-close"
            data-bs-dismiss="offcanvas"
          >
            <i className="material-icons-outlined">close</i>
          </a>
        </div>
        <div className="offcanvas-body">
          <div>
            <p>تنوع تم</p>
            <div className="row g-3">
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="BlueTheme"
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="BlueTheme"
                >
                  <span className="material-icons-outlined">contactless</span>
                  <span>آبی</span>
                </label>
              </div>
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="LightTheme"
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="LightTheme"
                >
                  <span className="material-icons-outlined">light_mode</span>
                  <span>نورانی</span>
                </label>
              </div>
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="DarkTheme"
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="DarkTheme"
                >
                  <span className="material-icons-outlined">dark_mode</span>
                  <span>تاریک</span>
                </label>
              </div>
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="SemiDarkTheme"
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="SemiDarkTheme"
                >
                  <span className="material-icons-outlined">contrast</span>
                  <span>نیمه تاریک</span>
                </label>
              </div>
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="BoderedTheme"
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="BoderedTheme"
                >
                  <span className="material-icons-outlined">border_style</span>
                  <span>حاشیه‌دار</span>
                </label>
              </div>
            </div>
            {/*پایان ردیف*/}
            {/* <!--plugins--> */}

            <Script
              src="/assets/js/jquery.min.js"
              strategy="beforeInteractive"
            />
            <Script src="/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js" />
            <Script src="/assets/plugins/metismenu/metisMenu.min.js" />
            <Script src="/assets/plugins/simplebar/js/simplebar.min.js" />
            <Script src="/assets/plugins/bs-stepper/js/bs-stepper.min.js" />
            <Script src="/assets/js/main.js" />
            <Script src="/assets/js/bootstrap.bundle.min.js" />
            <Script src="/assets/plugins/apexchart/apexcharts.min.js" />
            <Script src="/assets/plugins/peity/jquery.peity.min.js" />
            <Script>{`$(".data-attributes span").peity("donut")`}</Script>
            <Script src="/assets/js/dashboard2.js" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
