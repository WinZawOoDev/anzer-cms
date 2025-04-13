/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.

    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Optional: specify the port
        pathname: "/**", // Optional: specify the path patterns
      },
      {
        protocol: "https",
        hostname: "cms.anzer.com",
        pathname: "/**", // Optional: specify the path patterns
      },
    ],
  },
};

export default nextConfig;
