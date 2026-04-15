/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",   

  images: {
    unoptimized: true,  
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',  // 
      },
    ],
  },

  reactCompiler: true,
};

export default nextConfig;