/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/repository",
  assetPrefix: "/repository/",
  images: {
    unoptimized: true,
    domains: ["media1.madewithlovebridal.com"],
  },
};

module.exports = nextConfig;
