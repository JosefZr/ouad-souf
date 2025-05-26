import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSectionInView } from '@/hooks/useSelectInView';
import useReveal from '@/hooks/useReveal';
import Card from './components/Card';
import { useServices } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HashLink as Link } from 'react-router-hash-link';

export default function Services() {
    const servicesData = useServices()
    const tenuServices = servicesData?.tenu || []
    const sacServices = servicesData?.sac || []
    const plusServices = servicesData?.plus || []
    const { t: r } = useTranslation()
    const { ref: refView } = useSectionInView(r("navbar.services.name"), 0.1)
    const ref = useRef(null)
    const { t: s } = useTranslation()

    useReveal("vertical")
    useReveal("horizontal")
    const { t } = useTranslation()

    return (
        <div ref={ref} id="services" style={{ position: "relative" }} className=" w-full py-20 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                {/* Animated Background Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>

                {/* Floating Geometric Shapes */}
                <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/3 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            <div style={{ position: "relative" }} className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Header with Enhanced Styling */}
                <div ref={refView} className="text-center mb-20">
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 backdrop-blur-sm mb-6">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
                    </div>
                    <h1 className="reveal-vertical text-5xl max-md:text-2xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 text-wrap max-w-[90%] mx-auto leading-tight">
                        {t("Services.title")}
                    </h1>
                    <p className="reveal-vertical text-xl max-sm:text-[15px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t("Services.description")}
                    </p>
                </div>

                {/* Services Categories with Enhanced Design */}
                <div className="space-y-16">
                    <ServiceCarousel
                        services={tenuServices}
                        title={`${t("Services.tenu.title")}`}
                        gradient="from-blue-500 to-cyan-500"
                        accentColor="blue"
                    />

                    <ServiceCarousel
                        services={sacServices}
                        title={`${t("Services.sac.title")}`}
                        gradient="from-purple-500 to-pink-500"
                        accentColor="purple"
                    />
                </div>

                {/* Enhanced Call to Action */}
                <div className="text-center mt-20">
                    <div style={{ position: "relative" }} className=" inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                        <Button
                            style={{ position: "relative" }}
                            size="lg"
                            className=" bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
                        >
                            <Link to="#Contact" scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                                Fait votre commande
                                <span className="ml-2">✨</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ServiceCarousel({
    services = [],
    title,
    description,
    gradient = "from-blue-500 to-purple-500",
    accentColor = "blue",
}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(1)
    const maxIndex = Math.max(0, services.length - itemsPerView)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1)
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2)
            } else {
                setItemsPerView(3)
            }
            setCurrentIndex(0)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [services.length])

    const goToPrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    }

    useReveal("horizontal")
    useReveal("vertical")

    const accentColors = {
        blue: {
            primary: "blue-500",
            secondary: "blue-600",
            light: "blue-100",
            text: "blue-700",
        },
        purple: {
            primary: "purple-500",
            secondary: "purple-600",
            light: "purple-100",
            text: "purple-700",
        },
    }

    const colors = accentColors[accentColor] || accentColors.blue

    return (
        <div className="" style={{ position: "relative" }}>
            {/* Background Card with Glassmorphism */}
            <div style={{ position: "relative" }} className=" backdrop-blur-xl bg-white/40 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                {/* Gradient Overlay */}
                <div style={{ position: "absolute" }} className={` inset-0 bg-gradient-to-r ${gradient} opacity-5`}></div>

                {/* Decorative Elements */}
                <div style={{ position: "absolute" }} className=" top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                <div style={{ position: "absolute" }} className=" bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-lg"></div>

                <div style={{ position: "relative" }} className=" z-10 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start p-8 lg:p-12">
                    {/* Enhanced Category Info */}
                    <div className="lg:col-span-1">
                        <div
                            className={`inline-block px-4 py-2 bg-white/10 rounded-full border border-black/20 mb-4`}
                        >
                            <span className={`text-my-black font-semibold text-sm uppercase tracking-wider`}>
                                {services.length} Service{services.length !== 1 ? "s" : ""}
                            </span>
                        </div>
                        <h2 className="reveal-vertical text-xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{description}</p>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${gradient} transition-all duration-300 rounded-full`}
                                    style={{ width: `${((currentIndex + itemsPerView) / services.length) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-sm text-gray-500 font-medium">
                                {Math.min(currentIndex + itemsPerView, services.length)} / {services.length}
                            </span>
                        </div>
                    </div>

                    {/* Enhanced Services Carousel */}
                    <div className="lg:col-span-3 " style={{ position: "relative" }}>
                        {/* Enhanced Navigation Arrows */}
                        {services.length > itemsPerView && (
                            <>
                                <button
                                    onClick={goToPrevious}
                                    disabled={currentIndex === 0}
                                    className={cn(
                                        "absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg",
                                        currentIndex === 0
                                            ? "opacity-50 cursor-not-allowed bg-gray-100/50"
                                            : `bg-white/80 hover:bg-white hover:shadow-xl hover:scale-110 hover:border-black/30`,
                                    )}
                                >
                                    <ChevronLeft className={`h-6 w-6 mx-auto text-black`} />
                                </button>

                                <button
                                    onClick={goToNext}
                                    disabled={currentIndex >= maxIndex}
                                    className={cn(
                                        "absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg",
                                        currentIndex >= maxIndex
                                            ? "opacity-50 cursor-not-allowed bg-gray-100/50"
                                            : `bg-white/80 hover:bg-white hover:shadow-xl hover:scale-110 hover:border-black/30`,
                                    )}
                                >
                                    <ChevronRight className={`h-6 w-6 mx-auto text-black`} />
                                </button>
                            </>
                        )}

                        {/* Services Grid with Enhanced Animation */}
                        <div className="overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-all duration-500 ease-out gap-3"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                }}
                            >
                                {services.map((service, index) => (
                                    <div
                                        key={service.id}
                                        className="flex-shrink-0 transform transition-all duration-300 hover:scale-105"
                                        style={{ width: `${100 / itemsPerView}%` }}
                                    >
                                        <div className="h-full backdrop-blur-sm bg-white/60 rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80">
                                            <Card titre={service.titre} content={service.content} image={service.image} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Dots Indicator */}
                        {services.length > itemsPerView && (
                            <div className="flex justify-center mt-8 space-x-3">
                                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={cn(
                                            "h-3 w-3 rounded-full transition-all duration-300 border border-white/30",
                                            index === currentIndex
                                                ? `bg-gradient-to-r ${gradient} w-8 shadow-lg`
                                                : "bg-white/50 hover:bg-white/80 hover:scale-125",
                                        )}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
