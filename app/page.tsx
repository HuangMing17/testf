'use client'

import { useState, useEffect } from 'react'

export default function Home() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content animate-fade-in-up">
                    <h1>Hello People! 👋</h1>
                    <p>
                        Chào mừng bạn đến với ứng dụng Next.js được tối ưu hóa cho mobile.
                        Trang web này được thiết kế để load nhanh và hoạt động mượt mà trên mọi thiết bị.
                    </p>
                    <button
                        className="cta-button"
                        onClick={() => {
                            alert('Xin chào! Đây là ứng dụng Next.js được tối ưu cho mobile! 🚀')
                        }}
                    >
                        Khám phá ngay
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: 'clamp(2rem, 6vw, 3rem)',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: '#1f2937'
                    }}>
                        Tại sao chọn chúng tôi?
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        color: '#6b7280',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Ứng dụng được tối ưu hóa với các tính năng hiện đại
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Tốc độ cao</h3>
                            <p>
                                Load nhanh chóng với Next.js 14, tối ưu hóa cho mobile và desktop
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile First</h3>
                            <p>
                                Thiết kế responsive hoàn hảo, tối ưu cho mọi kích thước màn hình
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3>Deploy dễ dàng</h3>
                            <p>
                                Tích hợp sẵn với Vercel, deploy chỉ với một click
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔧</div>
                            <h3>Dễ tùy chỉnh</h3>
                            <p>
                                Code sạch, cấu trúc rõ ràng, dễ dàng mở rộng và bảo trì
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎨</div>
                            <h3>Giao diện đẹp</h3>
                            <p>
                                UI/UX hiện đại với gradient và animation mượt mà
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⚙️</div>
                            <h3>SEO tối ưu</h3>
                            <p>
                                Meta tags, Open Graph, Twitter Cards được cấu hình sẵn
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>
                        © 2024 Hello People - Được xây dựng với Next.js và deploy trên Vercel
                    </p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        🚀 Sẵn sàng để deploy!
                    </p>
                </div>
            </footer>
        </main>
    )
}
