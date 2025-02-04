"use client";

import Header from '../components/header/landingHeader';

import Footer from '../components/Footer';

export default function RootLayout({ children }) {




  return (
    <html lang="fa" >
  
      <body>
      <Header />

          {children}
  
      <Footer />
    
      </body>
    </html>
  );
}
