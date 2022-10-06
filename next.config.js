/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // redirects: 이전 페이지 접속 시 새 페이지로 이동(유저가 URL이 바꼈는지 인지함)
  async redirects() {
    return [
      {
        // * : catch. 뒤에 뭐가 오든 모두 그대로
        // :path : 작성한 path만 이동
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },

  // rwrites: redirects와 역할은 동일하지만 유저가 URL을 변화하는걸 못봄
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
