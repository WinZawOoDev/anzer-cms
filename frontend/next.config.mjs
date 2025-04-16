/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.

    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tranquil-badge-60175d2313.media.strapiapp.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Optional: specify the port
        pathname: "/**", // Optional: specify the path patterns
      },
	  {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337", // Optional: specify the port
        pathname: "/**", // Optional: specify the path patterns
      },
      {
        protocol: "https",
        hostname: "tranquil-badge-60175d2313.strapiapp.com",
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
