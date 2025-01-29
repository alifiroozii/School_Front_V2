// // /pages/api/getDatabase.js
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       // مسیر به db.json
//       const filePath = path.resolve('db.json');
//       const fileData = fs.readFileSync(filePath, 'utf8');
//       const data = JSON.parse(fileData);
      
//       res.status(200).json(data.users); // ارسال اطلاعات کاربران
//     } catch (error) {
//       res.status(500).json({ error: 'خطای داخلی سرور' });
//     }
//   } else {
//     res.status(405).json({ error: 'متد درخواست نامعتبر است' });
//   }
// }
import fs from 'fs/promises'; // استفاده از نسخه promises
import path from 'path';
import { authenticate } from '../../utils/auth'; // وارد کردن میان‌افزار authenticate

export default async function handler(req, res) {
  // بررسی متد درخواست
  if (req.method === 'GET') {
    try {
      // ابتدا توکن با استفاده از میان‌افزار authenticate تأیید می‌شود
      await authenticate(req, res, async () => {
        // اگر توکن معتبر باشد، ادامه می‌دهیم
        const filePath = path.resolve('db.json');
        try {
          const fileData = await fs.readFile(filePath, 'utf8');
          const data = JSON.parse(fileData);

          res.status(200).json(data.users); // ارسال اطلاعات کاربران
        } catch (fileError) {
          console.error('Error reading file:', fileError);
          res.status(500).json({ error: 'خطا در خواندن فایل داده‌ها.' });
        }
      });
    } catch (error) {
      // در صورت وقوع خطای توکن نامعتبر، به کاربر پیام داده می‌شود
      console.error('Error decoding token:', error);
      res.status(403).json({ error: 'توکن نامعتبر است.' });
    }
  } else {
    res.status(405).json({ error: 'متد درخواست نامعتبر است.' });
  }
}



// import fs from 'fs';
// import jwt from 'jsonwebtoken';
// import path from 'path'; // اضافه کردن path برای resolve کردن مسیر فایل

// const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       console.log('Authorization header is missing');
//       return res.status(401).json({ error: 'دسترسی غیرمجاز. توکن ارسال نشده است.' });
//     }

//     const token = authHeader.split(' ')[1]; // ساختار "Bearer <token>"
//     console.log('Received Token:', token); // برای بررسی توکن دریافتی

//     if (!token) {
//       console.log('Token is missing after splitting');
//       return res.status(401).json({ error: 'دسترسی غیرمجاز. توکن ارسال نشده است.' });
//     }

//     try {
//       // تأیید توکن
//       const decoded = jwt.verify(token, SECRET_KEY);
//       console.log('Decoded Token:', decoded); // بررسی محتویات توکن

//       // اگر توکن معتبر بود، ادامه دهید
//       const filePath = path.resolve('db.json');
//       const fileData = fs.readFileSync(filePath, 'utf8');
//       const data = JSON.parse(fileData);

//       res.status(200).json(data.users); // ارسال اطلاعات کاربران
//     } catch (error) {
//       console.error('Error decoding token:', error); // لاگ ارور در صورت عدم اعتبار توکن
//       res.status(403).json({ error: 'توکن نامعتبر است.' });
//     }
//   } else {
//     res.status(405).json({ error: 'متد درخواست نامعتبر است.' });
//   }
// }
