/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URI:
      "mongodb+srv://dev:wujLRz64Hij9N8K7@twitter.2musmpa.mongodb.net/?retryWrites=true&w=majority",
    MONGO_USERNAME: "dev",
    MONGO_PASSWORD: "wujLRz64Hij9N8K7",

    GITHUB_CLIENT_ID: "2aa67a1d5a5947172d37",
    GITHUB_CLIENT_SECRET: "2d1fccf033e5aadc6c051ede7f280daa15ecddf5",

    GOOGLE_CLIENT_ID:
      "970347510638-m9q0lmpm1sq5sduig5bou18c5j8cn1ro.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",

    JWT_SECRET: "secret11",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*" },
      { protocol: "http", hostname: "*" },
    ],
  },
};

export default nextConfig;
