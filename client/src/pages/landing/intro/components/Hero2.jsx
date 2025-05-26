"use client"

import { Button } from "@/components/ui/button"
import useReveal from "@/hooks/useReveal"
import { useSectionInView } from "@/hooks/useSelectInView"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { HashLink as Link } from "react-router-hash-link"

export default function Hero2() {
    const { t } = useTranslation()
    const { t: r } = useTranslation()
    const { ref } = useSectionInView(r("navbar.home.name"), 0.5)

    const backgroundImages = [
        "/images/i3.jpg",
        "/images/i4.jpg",
        "/images/i5.jpg",
        "/images/i6.jpg",
        "/images/i11.jpg",
        "/images/i13.webp",
    ]
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }

    useReveal("vertical")
    useReveal("horizontal")

    return (
        <div id='accueil' ref={ref} style={{ position: "relative" }} className=" w-full mt-16">
            <section style={{ position: "relative" }} className="  w-full flex ">
                {/* Left Side - Content with Gradient Background */}
                <div className=" w-full lg:w-1/2 flex items-center justify-center ">
                    {/* Gradient Background with Geometric Elements */}
                    <div style={{ position: "absolute" }} className=" inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
                        {/* Geometric decorative elements */}
                        <div style={{ position: "absolute" }} className=" top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                        <div style={{ position: "absolute" }} className=" top-32 right-20 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>
                        <div style={{ position: "absolute" }} className=" bottom-20 left-16 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

                        {/* Diagonal lines */}
                        <div style={{ position: "absolute" }} className=" top-0 right-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent transform skew-x-12"></div>
                        <div style={{ position: "absolute" }} className=" top-0 right-8 w-16 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12"></div>

                        {/* Dot pattern */}
                        <div style={{ position: "absolute" }} className=" bottom-32 right-20 grid grid-cols-4 gap-2">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-white/30 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{ position: "relative" }} className=" z-10 px-8 lg:px-16 py-16 ">
                        <div className="text-white">
                            <p className="text-sm font-medium tracking-wider uppercase opacity-90 mb-4">
                                {t("hero.subtitle") || "LOREM IPSUM DOLOR"}
                            </p>

                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">{t("hero.titre")}</h1>

                            <p className="text-lg lg:text-xl leading-relaxed opacity-90 mb-8 max-w-lg">{t("hero.description")}</p>

                            {/* Call to Action Button */}
                            <div className="mb-8">
                                <Button
                                    size="lg"
                                    className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <Link to="#Contact" scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                                        {t("hero.button1") || "READ MORE"}
                                        <span className="ml-2 text-xl">+</span>
                                    </Link>
                                </Button>
                            </div>

                            {/* Features List */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-lg">{t("hero.1")}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-lg">{t("hero.2")}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-lg">{t("hero.3")}</span>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-12 pt-8 border-t border-white/20">
                                <div className="flex flex-wrap gap-6 text-sm text-white/80">
                                    <span>CONTACT US</span>
                                    <span>+123 456 789</span>
                                    <span>Your company © 2024. All rights reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Diagonal Cut */}
                    <div style={{ position: "absolute" }} className=" top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent transform skew-x-12 translate-x-16"></div>
                </div>

                {/* Right Side - Image Carousel */}
                <div
                    style={{ position: "relative" }}
                    className=" w-full lg:w-1/2 lg:block hidden"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Background Images with Transitions */}
                    {backgroundImages.map((image, index) => (
                        <div
                            key={index}
                            className={cn(
                                "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
                                index === currentSlide ? "opacity-100" : "opacity-0",
                            )}
                            style={{
                                backgroundImage: `url('${image}')`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        style={{ position: "absolute" }}
                        className=" left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={goToNext}
                        style={{ position: "absolute" }}
                        className=" right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Slide Indicators */}
                    <div style={{ position: "absolute" }} className=" bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
                        {backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={cn(
                                    "h-3 w-3 rounded-full transition-all duration-300",
                                    index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75",
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div style={{ position: "absolute" }} className=" bottom-0 left-0 h-1 w-full bg-white/20">
                        <div
                            className="h-full bg-white transition-all duration-300 ease-linear"
                            style={{
                                width: isAutoPlaying ? `${((currentSlide + 1) / backgroundImages.length) * 100}%` : "0%",
                            }}
                        />
                    </div>
                </div>

                {/* Mobile Image Carousel (shown on smaller screens) */}
                <div
                    style={{ position: "absolute" }}
                    className=" inset-0 lg:hidden"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {backgroundImages.map((image, index) => (
                        <div
                            key={index}
                            className={cn(
                                "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
                                index === currentSlide ? "opacity-100" : "opacity-0",
                            )}
                            style={{
                                backgroundImage: `url('${image}')`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
