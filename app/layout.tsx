import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
})

export const metadata: Metadata = {
    title: 'Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 - HuangMing17',
    description: 'Trang web chúc mừng ngày 20/10 đặc biệt với hoạt ảnh đẹp và dấu ấn cá nhân của HuangMing17',
    keywords: ['20/10', 'Phụ nữ Việt Nam', 'Chúc mừng', 'HuangMing17', 'Ngày phụ nữ', 'Tribute'],
    authors: [{ name: 'HuangMing17' }],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    themeColor: '#ec4899',
    manifest: '/manifest.json',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 - HuangMing17',
        description: 'Trang web chúc mừng ngày 20/10 đặc biệt với hoạt ảnh đẹp và dấu ấn cá nhân của HuangMing17',
        type: 'website',
        locale: 'vi_VN',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 - HuangMing17',
        description: 'Trang web chúc mừng ngày 20/10 đặc biệt với hoạt ảnh đẹp và dấu ấn cá nhân của HuangMing17',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
