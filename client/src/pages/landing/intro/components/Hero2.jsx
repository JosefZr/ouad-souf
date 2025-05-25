import { Button } from "@/components/ui/button";
import useReveal from "@/hooks/useReveal";
import { useSectionInView } from "@/hooks/useSelectInView";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from 'react-router-hash-link';

export default function Hero2() {
    const { t } = useTranslation();

    const { t: r } = useTranslation();
    const { ref } = useSectionInView(r("navbar.home.name"), 0.5);
    // Background images array - only images change
    const backgroundImages = ["/images/i3.jpg", "/images/i4.jpg", "/images/i5.jpg", "/images/i6.jpg", "/images/i11.jpg", "/images/i13.webp"]
    // const s = useTranslation('Services');
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    // Auto-rotation effect
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

    useReveal('vertical');
    useReveal('horizontal');
    return (
        <div ref={ref} className="relative w-full mt-16">
            <section
                ref={ref}
                className="relative min-h-screen w-full  flex items-center justify-center overflow-hidden "
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
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 lg:left-8"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 lg:right-8"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Content Container */}
                <div className="relative z-10 w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-40">
                    <div className="mx-auto ">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
                            {/* Text Content with Animations */}
                            <div className=" text-center md:text-left">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                    {t("hero.titre")}

                                </h1>

                                <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
                                    {t("hero.description")}
                                </p>

                                {/* Call to Action Buttons */}
                                <div className="mt-8 flex flex-col gap-4  sm:flex-row sm:justify-center md:justify-start">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r capitalize text-xl from-blue-600 to-purple-600 px-14 py-8 text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105"
                                    >
                                        <Link to="#Contact" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                                            {t("hero.button1")}
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-white/30 text-xl bg-white/10 px-14 py-8 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                                    >
                                        <Link to="#nous" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                                            {t("hero.button2")}
                                        </Link>
                                    </Button>
                                </div>

                                {/* Features List */}
                                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                                    <div className="flex items-center gap-2 text-xl text-gray-200">
                                        <div className="h-4 w-4 rounded-full bg-green-400" />
                                        {t("hero.1")}
                                    </div>
                                    <div className="flex items-center gap-2 text-xl text-gray-200">
                                        <div className="h-4 w-4 rounded-full bg-green-400" />
                                        {t("hero.2")}
                                    </div>
                                    <div className="flex items-center gap-2 text-xl text-gray-200">
                                        <div className="h-4 w-4 rounded-full bg-green-400" />
                                        {t("hero.3")}
                                    </div>
                                </div>
                            </div>

                            {/* Visual Element */}
                            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
                                <div className="relative mx-auto max-w-lg">
                                    {/* Dashboard Mockup */}


                                    {/* Floating Elements */}
                                    <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400/60 to-orange-500/60" />
                                    <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-gradient-to-br from-pink-400/60 to-red-500/60" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3" >
                    {
                        backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={cn(
                                    "h-3 w-3 rounded-full transition-all duration-300",
                                    index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75",
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))
                    }
                </div >

                {/* Progress Bar */}
                < div className="absolute bottom-0 left-0 h-1 w-full bg-white/20" >
                    <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-linear"
                        style={{
                            width: isAutoPlaying ? `${((currentSlide + 1) / backgroundImages.length) * 100}%` : "0%",
                        }}
                    />
                </div >

                {/* Decorative Elements */}
                < div className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none" >
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-600/10 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-green-400/10 to-blue-600/10 blur-3xl" />
                </div >
            </section >
        </div >
    )
}
