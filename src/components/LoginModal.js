// components/LoginModal.js
import React from "react";
import Link from "next/link"; // فراخوانی Link از Next.js
import { FaUserGraduate, FaChalkboardTeacher, FaUserTie, FaUserShield, FaUserFriends } from "react-icons/fa"; // آیکن‌ها

const LoginModal = ({ show, onClose }) => {
  if (!show) return null;

  const roles = [
    {
      title: "دانش‌آموز",
      link: "/auth/student/login",
      icon: <FaUserGraduate size={40} color="#ffffff" />,
      bgColor: "#231478", // بنفش تیره
    },
    {
      title: "معلم",
      link: "/auth/teacher/login",
      icon: <FaChalkboardTeacher size={40} color="#ffffff" />,
      bgColor: "#4b1e82", // بنفش میانی
    },
    {
      title: "مدیر مدرسه",
      link: "/auth/school-manager/login",
      icon: <FaUserTie size={40} color="#ffffff" />,
      bgColor: "#82198c", // بنفش روشن
    },
    {
      title: "ناظم",
      link: "/auth/admin/login",
      icon: <FaUserShield size={40} color="#ffffff" />,
      bgColor: "#d241aa", // صورتی فانتزی
    },
    {
      title: "والدین",
      link: "/auth/parent/login",
      icon: <FaUserFriends size={40} color="#ffffff" />,
      bgColor: "#6c757d", // خاکستری
    },
  ];

  return (
    <div
    dir="rtl"
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div   className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div   className="modal-header">
             <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
            <h5 className="modal-title">انتخاب نوع کاربر</h5>
           
          </div>
          <div className="modal-body">
            {/* گرید نقش‌ها */}
            <div className="role-grid">
              {roles.map((role, index) => (
                <Link key={index} href={role.link} className="text-decoration-none">
                  <div
                    className="role-card d-flex flex-column align-items-center justify-content-center rounded"
                    style={{
                      backgroundColor: role.bgColor,
                      width: "100px", // عرض ثابت
                      height: "100px", // ارتفاع ثابت
                    }}
                  >
                    {role.icon}
                    <span className="mt-2 text-white small">{role.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;