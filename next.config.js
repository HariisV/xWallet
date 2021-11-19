module.exports = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://jsonplaceholder.typicode.com/",
    URL_FRONTEND: "http://localhost:3000",
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
