// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   /* config options here */
// //   reactCompiler: true,
// // };

// // export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "5000",          // ← your backend port
//         pathname: "/**",       // allow all paths under this host
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      // local backend
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },

      // production backend
      {
        protocol: "https",
        hostname: "ojain-backend-2.onrender.com",
        pathname: "/**",
      }, 
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;