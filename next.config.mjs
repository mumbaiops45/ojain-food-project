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

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",          // ← your backend port
        pathname: "/**",       // allow all paths under this host
      },
    ],
  },
};

export default nextConfig;