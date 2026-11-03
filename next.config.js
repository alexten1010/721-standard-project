/**@type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["gateway.pinata.cloud"],
    formats: ["image/webp"],
  },
  // Next.js 12.2.x only reads `unoptimized` from `experimental.images`
  // (top-level `images.unoptimized` became stable in 12.3). This makes
  // <Image> serve files directly instead of through the image optimizer.
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
