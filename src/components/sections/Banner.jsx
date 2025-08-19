import '../../styles/Banner.css'
import { useEffect, useMemo, useRef, useState } from 'react'

function Banner() {
    const carouselImages = useMemo(
        () => [
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1600&auto=format&fit=crop',
        ],
        []
    )

    const [currentIndex, setCurrentIndex] = useState(0)
    const isPausedRef = useRef(false)
    const intervalRef = useRef(null)

    const goToNext = () => setCurrentIndex((idx) => (idx + 1) % carouselImages.length)
    const goToPrev = () => setCurrentIndex((idx) => (idx - 1 + carouselImages.length) % carouselImages.length)

    useEffect(() => {
        function startAutoPlay() {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                if (!isPausedRef.current) {
                    setCurrentIndex((idx) => (idx + 1) % carouselImages.length)
                }
            }, 5000)
        }
        startAutoPlay()
        return () => intervalRef.current && clearInterval(intervalRef.current)
    }, [carouselImages.length])

    return (
        <div className="hero-section">
            <section
                className="hero-img"
                onMouseEnter={() => (isPausedRef.current = true)}
                onMouseLeave={() => (isPausedRef.current = false)}
            >
                <div className="carousel" aria-roledescription="carousel" aria-label="Featured Photography">
                    {carouselImages.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${imageUrl}')`,
                            }}
                            role="group"
                            aria-label={`${index + 1} of ${carouselImages.length}`}
                        />
                    ))}

                    <button className="arrow prev" aria-label="Previous slide" onClick={goToPrev}>
                        ‹
                    </button>
                    <button className="arrow next" aria-label="Next slide" onClick={goToNext}>
                        ›
                    </button>

                    <div className="dots" role="tablist" aria-label="Choose slide">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                role="tab"
                                aria-selected={index === currentIndex}
                            />
                        ))}
                    </div>
                </div>

                <div className="hero-text">
                    <h1 className="hero-heading">Timeless Stories, Beautifully Told</h1>
                    <br />
                    <p className="hero-paragraph">
                        Elegant, artful photography for weddings, portraits, and events. We capture genuine emotion
                        and atmosphere—images that feel as meaningful as the moment itself.
                    </p>
                  
                </div>
            </section>
        </div>
    )
}

export default Banner