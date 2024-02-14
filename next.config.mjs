/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: 'https://c4-frame.vercel.app//api/openaudit',
          destination: 'https://code4rena.com/how-it-works/open-audit',
          permanent: false
        },
        {
          source: 'https://c4-frame.vercel.app//api/blue',
          destination: 'https://code4rena.com/how-it-works/blue',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;
