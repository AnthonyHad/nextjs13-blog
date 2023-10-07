/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "images.unsplash.com",
      protocol: "https"
    }, {
      hostname: "localhost",
      protocol: "http"
    }]
  }
}

module.exports = nextConfig
