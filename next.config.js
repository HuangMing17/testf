/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    // Tối ưu hóa cho mobile và performance
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Compression và optimization
    compress: true,
    poweredByHeader: false,
    // PWA ready
    generateEtags: false,
}

module.exports = nextConfig
