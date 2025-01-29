// pages/api/login.js
import { users } from '/api/db.json'; // فایل db.json در ریشه پروژه قرار دارد

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nationalId, password } = req.body;

    // جستجو در دیتابیس برای تطابق اطلاعات کاربر
    const user = users.find(u => u.nationalId === nationalId && u.password === password);
    
    if (user) {
      // اگر کاربر پیدا شد، پاسخ می‌دهیم
      res.status(200).json({ role: user.role });
    } else {
      // اگر کاربر پیدا نشد، خطا می‌دهیم
      res.status(400).json({ error: 'کد ملی یا رمز عبور اشتباه است' });
    }
  } else {
    // متدهای دیگر را پشتیبانی نمی‌کنیم
    res.status(405).json({ error: 'متد درخواست نامعتبر است' });
  }
}
