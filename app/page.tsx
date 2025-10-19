'use client'

import { useState, useEffect } from 'react'

export default function Home() {
    const [mounted, setMounted] = useState(false)
    const [currentScene, setCurrentScene] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [showTypewriter, setShowTypewriter] = useState(false)

    const scenes = [
        {
            id: 0,
            title: "Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10! 🌸",
            content: "Hoàng Minh chúc you một ngày 20/10 thật ý nghĩa và hạnh phúc!",
            type: "hero"
        },
        {
            id: 1,
            title: "Bó Hoa Từ Hoàng Minh 💐",
            content: "Hoàng Minh gửi tặng những bó hoa tươi thắm nhất đến you !",
            type: "bouquet"
        },
        {
            id: 2,
            title: "Lời Chúc Đặc Biệt 💖",
            content: "Hoàng Minh chúc you luôn xinh đẹp, khỏe mạnh và thành công!",
            type: "message"
        },

        {
            id: 33,
            title: "Tình Yêu Vô Bờ 💝",
            content: "Hoàng Minh cảm ơn you đã mang tình yêu đến thế giới này!",
            type: "love"
        },
        {
            id: 4,
            title: "Vẻ Đẹp Rạng Ngời ✨",
            content: "Hoàng Minh chúc you luôn tỏa sáng với vẻ đẹp tự nhiên!",
            type: "beauty"
        }
    ]

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScene((prev) => (prev + 1) % scenes.length)
        }, 4000) // Chuyển scene mỗi 4 giây

        return () => clearInterval(interval)
    }, [scenes.length])

    useEffect(() => {
        if (currentScene === 2) {
            const timer = setTimeout(() => setShowTypewriter(true), 1000)
            return () => clearTimeout(timer)
        } else {
            setShowTypewriter(false)
        }
    }, [currentScene])

    // Auto-play only, no manual controls

    if (!mounted) {
        return null
    }

    const renderScene = (scene: any) => {
        switch (scene.type) {
            case 'hero':
                return (
                    <div className="hero-content animate-zoom-in">
                        <h1 className="animate-glow">{scene.title}</h1>
                        <p className="animate-slide-left">{scene.content}</p>
                        <button
                            className="cta-button animate-bounce-in"
                            onClick={() => {
                                alert('Hoàng Minh chúc bạn ngày 20/10 thật tuyệt vời! 💖✨')
                            }}
                        >
                            Gửi lời chúc 💌
                        </button>
                    </div>
                )

            case 'bouquet':
                return (
                    <div className="bouquet-container">
                        <div className="bouquet animate-wiggle">💐</div>
                        <h2 className="animate-float-up" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '2rem', color: '#1f2937' }}>
                            {scene.title}
                        </h2>
                        <p className="animate-slide-right" style={{ fontSize: '1.5rem', color: '#6b7280', maxWidth: '600px' }}>
                            {scene.content}
                        </p>
                        {/* Floating flowers with enhanced animation */}
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="flower animate-bounce-in" style={{ animationDelay: `${i * 0.2}s` }}>
                                {['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌿', '🍀', '🌱'][i]}
                            </div>
                        ))}
                    </div>
                )

            case 'message':
                return (
                    <div className="message-card animate-fade-scale">
                        <h2 className="animate-glow" style={{
                            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                            marginBottom: '2rem',
                            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #f9a8d4 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {scene.title}
                        </h2>
                        <div className="animate-slide-left" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4b5563' }}>
                            {showTypewriter ? (
                                <div className="typewriter">
                                    {scene.content}
                                </div>
                            ) : (
                                scene.content
                            )}
                        </div>
                        <div style={{ marginTop: '2rem', fontSize: '1.5rem', color: '#ec4899' }}>
                            <span className="animate-sparkle">💖</span>
                            <span className="animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</span>
                            <span className="animate-sparkle" style={{ animationDelay: '1s' }}>🌸</span>
                            <span className="animate-sparkle" style={{ animationDelay: '1.5s' }}>💕</span>
                            <span className="animate-sparkle" style={{ animationDelay: '2s' }}>🌟</span>
                        </div>
                    </div>
                )

            case 'strength':
                return (
                    <div className="message-card animate-zoom-in">
                        <div className="animate-bounce-in" style={{ fontSize: '6rem', marginBottom: '2rem' }}>💪</div>
                        <h2 className="animate-float-up" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '2rem', color: '#1f2937' }}>
                            {scene.title}
                        </h2>
                        <p className="animate-slide-right" style={{ fontSize: '1.5rem', color: '#6b7280', maxWidth: '600px' }}>
                            {scene.content}
                        </p>
                    </div>
                )

            case 'love':
                return (
                    <div className="message-card animate-fade-scale">
                        <div className="animate-wiggle" style={{ fontSize: '6rem', marginBottom: '2rem' }}>💝</div>
                        <h2 className="animate-glow" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '2rem', color: '#1f2937' }}>
                            {scene.title}
                        </h2>
                        <p className="animate-slide-left" style={{ fontSize: '1.5rem', color: '#6b7280', maxWidth: '600px' }}>
                            {scene.content}
                        </p>
                    </div>
                )

            case 'beauty':
                return (
                    <div className="message-card animate-zoom-in">
                        <div className="animate-bounce-in" style={{ fontSize: '6rem', marginBottom: '2rem' }}>✨</div>
                        <h2 className="animate-float-up" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '2rem', color: '#1f2937' }}>
                            {scene.title}
                        </h2>
                        <p className="animate-slide-right" style={{ fontSize: '1.5rem', color: '#6b7280', maxWidth: '600px' }}>
                            {scene.content}
                        </p>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <main className="min-h-screen">
            {/* Progress Bar */}
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }}
                />
            </div>

            {/* Video Container with Split Transition */}
            <div className="video-container">
                {scenes.map((scene, index) => (
                    <div
                        key={scene.id}
                        className={`scene ${index === currentScene ? 'active' : index < currentScene ? 'prev' : ''}`}
                    >
                        {renderScene(scene)}
                    </div>
                ))}
            </div>

            {/* Enhanced Floating Elements */}
            <div className="floating-hearts">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="floating-heart animate-bounce-in" style={{ animationDelay: `${i * 0.3}s` }}>
                        {['💖', '💕', '💗', '💓', '💝', '💘', '💞', '💟', '❤️', '🧡', '💛', '💚'][i]}
                    </div>
                ))}
            </div>

            {/* Enhanced Sparkles */}
            <div className="sparkles">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="sparkle animate-sparkle" style={{ animationDelay: `${i * 0.2}s` }}>
                        {['✨', '⭐', '🌟', '💫', '⭐', '✨', '🌟', '💫', '⭐', '✨', '🌟', '💫', '⭐', '✨', '🌟'][i]}
                    </div>
                ))}
            </div>

            {/* Additional floating elements for movie effect */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: '1.5rem',
                            animation: `float 6s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 6}s`,
                            opacity: 0.7
                        }}
                    >
                        {['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌿', '🍀', '🌱', '🌾', '🌵', '🌲', '🌳', '🌴', '🌰', '🌰', '🌰', '🌰', '🌰', '🌰'][i]}
                    </div>
                ))}
            </div>
        </main>
    )
}
