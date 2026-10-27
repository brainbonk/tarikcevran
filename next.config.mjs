/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Geliştirici simgesini (sol alttaki N logosunu) kapatır
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
