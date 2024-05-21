/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mep-agency/next-iubenda"],
  async redirects() {
    return [
      {
        source: "/servizi/web",
        destination: "/servizi/web-design",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
