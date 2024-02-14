/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/openaudit',
          destination: 'https://code4rena.com/how-it-works/open-audit',
          permanent: false
        },
        {
          source: '/blue',
          destination: 'https://code4rena.com/how-it-works/blue',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;
