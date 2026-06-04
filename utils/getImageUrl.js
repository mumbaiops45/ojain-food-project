// utils/getImageUrl.js
const getImageUrl = (imagePath) => {
  if (!imagePath) return "/category1.jpg";
  if (imagePath.startsWith("http") || imagePath.startsWith("blob:")) return imagePath;
  let p = imagePath.replace(/\\/g, "/");
  if (p.startsWith("/")) p = p.slice(1);
  const BASE = process.env.NEXT_PUBLIC_API_URL || "https://ojain-backend-2.onrender.com";
  return `${BASE}/${p}`;
};

export default getImageUrl;
