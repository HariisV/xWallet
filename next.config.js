module.exports = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://jsonplaceholder.typicode.com/",
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
