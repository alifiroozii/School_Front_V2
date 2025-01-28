// import { NextResponse } from 'next/server';
// // برای مشخص کردن صفحات لازم به ورود سایت
// export function middleware(req) {
//   const token = req.cookies.get('token');

//   if (!token && req.nextUrl.pathname.startsWith('/')) {
//     return NextResponse.redirect(new URL('/auth/login', req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };
