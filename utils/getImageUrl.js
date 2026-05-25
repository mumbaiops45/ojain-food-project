// utils/getImageUrl.js
const getImageUrl = (imagePath) => {
  if (!imagePath) return "/fallback-category.jpg";
  if (imagePath.startsWith("http") || imagePath.startsWith("blob:")) return imagePath;
  let p = imagePath.replace(/\\/g, "/");
  if (p.startsWith("/")) p = p.slice(1);
  const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  return `${BASE}/${p}`;
};

export default getImageUrl;
