"use client";
import { useEffect } from 'react';

const page = () => {
  return (
    <div>پنل اصلی ادمین مدیر مدرسه </div>
  )
}
const Dashboard = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     window.location.href = '/auth/teacher/login';
  //   }
  // }, []);

  return <div>داشبورد معلم</div>;
};

export default Dashboard;
