module.exports = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://zwalet.herokuapp.com",
    URL_FRONTEND: "https://x-wallet.vercel.app",
  },
  async rewrites() {
    return [
      {
        source: "/profile", //Pengganti Path (Url Link)
        destination: "/main/profile", //Path Sebenarnya Di Folder
      },
    ];
  },
};
