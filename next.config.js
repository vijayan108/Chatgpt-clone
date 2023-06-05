/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // domains: ['mydomain.com'], // white list for domains where images can be loaded from
  },
  experimental: {
    appDir: true
  }
}
