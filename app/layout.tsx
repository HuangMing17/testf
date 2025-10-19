import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
})

export const metadata: Metadata = {
    title: 'Hello People - Next.js App',
    description: 'A simple and fast Next.js app optimized for mobile devices',
    keywords: ['Next.js', 'React', 'Mobile', 'Fast', 'Vercel'],
    authors: [{ name: 'Hello People Team' }],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    themeColor: '#3b82f6',
    manifest: '/manifest.json',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'Hello People - Next.js App',
        description: 'A simple and fast Next.js app optimized for mobile devices',
        type: 'website',
        locale: 'vi_VN',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hello People - Next.js App',
        description: 'A simple and fast Next.js app optimized for mobile devices',
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
