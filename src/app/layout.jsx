"use client";

import Header from '../components/header/landingHeader';


export default function RootLayout({ children }) {




  return (
    <html lang="fa" >
  
      <body>
      <Header />

          {children}

      </body>
    </html>
  );
}
