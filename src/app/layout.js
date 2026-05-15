// // // "use client";

// // // import "./globals.css";

// // // import { Plus_Jakarta_Sans }
// // // from "next/font/google";

// // // import {
// // //   usePathname,
// // // } from "next/navigation";

// // // import Navbar from "./components/Navbar";

// // // import Footer from "./components/Footer";

// // // import {
// // //   Toaster,
// // // } from "react-hot-toast";

// // // const plusJakarta =
// // //   Plus_Jakarta_Sans({
// // //     subsets: ["latin"],

// // //     weight: [
// // //       "200",
// // //       "300",
// // //       "400",
// // //       "500",
// // //       "600",
// // //       "700",
// // //       "800",
// // //     ],

// // //     variable:
// // //       "--font-plus-jakarta",
// // //   });

// // // export default function RootLayout({
// // //   children,
// // // }) {

// // //   const pathname =
// // //     usePathname();

// // //   // HIDE WEBSITE NAVBAR + FOOTER
// // // const hideLayout =
// // //   pathname.startsWith("/dashboard") ||
// // //   (pathname.startsWith("/admin") && !pathname.startsWith("/adminlogin") && !pathname.startsWith("/admin/login")) ||
// // //   (pathname.startsWith("/vendor") && !pathname.startsWith("/vendor/login"));

// // //   return (
// // //     <html lang="en">

// // //       <body
// // //         className={
// // //           plusJakarta.variable
// // //         }
// // //       >

// // //         {/* TOASTER */}
// // //         <Toaster position="top-right" />

// // //         {/* NAVBAR */}
// // //         {!hideLayout && (
// // //           <Navbar />
// // //         )}

// // //         {/* MAIN */}
// // //         <main>
// // //           {children}
// // //         </main>

// // //         {/* FOOTER */}
// // //         {!hideLayout && (
// // //           <Footer />
// // //         )}

// // //       </body>

// // //     </html>
// // //   );
// // // }

// // // =============================================
// // // app/layout.jsx
// // // FIX NAVBAR + FOOTER HIDE
// // // =============================================

// // "use client";

// // import "./globals.css";

// // import {
// //   Plus_Jakarta_Sans,
// // } from "next/font/google";

// // import {
// //   usePathname,
// // } from "next/navigation";

// // import Navbar from "./components/Navbar";

// // import Footer from "./components/Footer";

// // import {
// //   Toaster,
// // } from "react-hot-toast";

// // const plusJakarta =
// //   Plus_Jakarta_Sans({
// //     subsets: ["latin"],

// //     weight: [
// //       "200",
// //       "300",
// //       "400",
// //       "500",
// //       "600",
// //       "700",
// //       "800",
// //     ],

// //     variable:
// //       "--font-plus-jakarta",
// //   });

// // export default function RootLayout({
// //   children,
// // }) {

// //   const pathname =
// //     usePathname();

// //   // HIDE NAVBAR + FOOTER
// //   const hideLayout =

// //     pathname.startsWith(
// //       "/dashboard"
// //     ) ||

// //     pathname.startsWith(
// //       "/vendor/dashboard"
// //     ) ||

// //     pathname.startsWith(
// //       "/admin/dashboard"
// //     );

// //   return (

// //     <html lang="en">

// //       <body
// //         className={
// //           plusJakarta.variable
// //         }
// //       >

// //         {/* TOASTER */}
// //         <Toaster
// //           position="top-right"
// //         />

// //         {/* NAVBAR */}
// //         {!hideLayout && (
// //           <Navbar />
// //         )}

// //         {/* MAIN */}
// //         <main>
// //           {children}
// //         </main>

// //         {/* FOOTER */}
// //         {!hideLayout && (
// //           <Footer />
// //         )}

// //       </body>

// //     </html>
// //   );
// // }


"use client";

import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Hide navbar & footer on:
  // 1. All dashboard routes
  // 2. All admin routes EXCEPT login pages
  // 3. All vendor routes EXCEPT login pages
  const hideLayout =
    pathname.startsWith("/dashboard") ||
    (pathname.startsWith("/admin") &&
      !pathname.startsWith("/admin/login") &&
      !pathname.startsWith("/adminlogin")) ||
    (pathname.startsWith("/vendor") && !pathname.startsWith("/vendor/login"));

  return (
    <html lang="en">
      <body className={plusJakarta.variable}>
        <Toaster position="top-right" />

        {!hideLayout && <Navbar />}

        <main>{children}</main>

        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import "./globals.css";
// import { Plus_Jakarta_Sans } from "next/font/google";
// import { usePathname } from "next/navigation";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { Toaster } from "react-hot-toast";

// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-plus-jakarta",
// });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Determine if navbar/footer should be hidden – only after mount to avoid mismatch
//   const shouldHideLayout =
//     mounted &&
//     (pathname?.startsWith("/dashboard") ||
//       (pathname?.startsWith("/admin") &&
//         !pathname?.startsWith("/admin/login") &&
//         !pathname?.startsWith("/adminlogin")) ||
//       (pathname?.startsWith("/vendor") && !pathname?.startsWith("/vendor/login")));

//   return (
//     <html lang="en">
//       {/* Add suppressHydrationWarning to handle extension-added attributes */}
//       <body className={plusJakarta.variable} suppressHydrationWarning>
//         <Toaster position="top-right" />

//         {!shouldHideLayout && <Navbar />}

//         <main>{children}</main>

//         {!shouldHideLayout && <Footer />}
//       </body>
//     </html>
//   );
// }