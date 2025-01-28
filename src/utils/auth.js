// // src/services/auth.js
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = process.env.JWT_SECRET;  // کلید سری در فایل .env

// // تابع برای صدور توکن JWT
// const generateToken = (user) => {
//   return jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
// };

// // میان‌افزار برای تأیید توکن JWT
// const authenticate = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).json({ error: 'Authorization header missing' });
//   }

//   const token = authHeader.split(' ')[1];  // ساختار "Bearer <token>"
//   if (!token) {
//     return res.status(401).json({ error: 'Token missing' });
//   }

//   jwt.verify(token, SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ error: 'Invalid token' });
//     }
//     req.user = decoded; // ذخیره اطلاعات کاربر در درخواست
//     next();  // ادامه به روت بعدی
//   });
// };

// module.exports = { generateToken, authenticate };
