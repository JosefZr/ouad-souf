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
    const servicesData = useServices();
    // Add optional chaining
    const tenuServices = servicesData?.tenu || [];
    const sacServices = servicesData?.sac || [];
    const plusServices = servicesData?.plus || [];
    const { t: r } = useTranslation();
    const { ref: refView } = useSectionInView(r("navbar.services.name"), 0.1);
    const ref = useRef(null);

    const { t: s } = useTranslation();

    useReveal('vertical');
    useReveal('horizontal');
    const { t } = useTranslation();

    return (
        <div ref={ref} id="services" className="w-full py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Header */}
                <div ref={refView} className="text-center mb-16">
                    <h1 className="reveal-vertical text-5xl lg:text-6xl font-bold text-blue-500 mb-4 text-wrap max-w-[90%] mx-auto">{t("Services.title")}</h1>
                    <p className=" reveal-vertical text-xl text-gray-600 max-w-3xl mx-auto">
                        {t("Services.description")}
                    </p>
                </div>

                {/* Services Categories */}
                <div className="space-y-12">
                    {/* Preventive Care */}
                    <ServiceCarousel
                        services={tenuServices}
                        title={`${t("Services.tenu.title")}`}
                    // description="Keep your smile healthy with regular check-ups and cleanings"
                    />

                    {/* Restorative Care */}
                    <ServiceCarousel
                        services={sacServices}
                        title={`${t("Services.sac.title")}`}
                    // description="Repair and restore your teeth to full function and beauty"
                    />
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3" >
                        <Link to="#Contact" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                            Fait votre commande
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
function ServiceCarousel({ services = [], title, description }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(1) // Start with 1 for mobile
    const maxIndex = Math.max(0, services.length - itemsPerView)
    // Handle responsive items per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1) // Mobile: 1 item
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2) // Tablet: 2 items
            } else {
                setItemsPerView(3) // Desktop: 3 items
            }
            // Reset index if it's out of bounds
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
    return (
        <div className="bg-my-to rounded-3xl  border-gray-800 " style={{
        }}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start max-lg:max-w-3xl mx-auto">
                {/* Category Info - Left Side */}
                <div className="lg:col-span-1 px-8">
                    <h2 className="reveal-vertical text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <span className="text-xl text-gray-500">
                        {services.length} service{services.length !== 1 ? "s" : ""} available
                    </span>
                </div>

                {/* Services Carousel - Right Side */}
                <div className="lg:col-span-3 " style={{ position: "relative" }}>
                    {/* Navigation Arrows */}
                    {services.length > itemsPerView && (
                        <>
                            <button
                                onClick={goToPrevious}
                                disabled={currentIndex === 0}
                                className={cn(
                                    "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 transition-all",
                                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:shadow-xl",
                                )}
                            >
                                <ChevronLeft className="h-5 w-5 text-gray-600" />
                            </button>

                            <button
                                onClick={goToNext}
                                disabled={currentIndex >= maxIndex}
                                className={cn(
                                    "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 transition-all",
                                    currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:shadow-xl",
                                )}
                            >
                                <ChevronRight className="h-5 w-5 text-gray-600" />
                            </button>
                        </>
                    )}

                    {/* Services Grid */}
                    <div className="overflow-hidden ">
                        <div
                            className="flex transition-transform duration-300 ease-in-out gap-4"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            }}
                        >
                            {services.map((service, index) => (
                                <div key={service.id} className="flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                                    <Card
                                        titre={service.titre}
                                        content={service.content}
                                        image={service.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    {services.length > itemsPerView && (
                        <div className="flex justify-center mt-4 space-x-2">
                            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={cn(
                                        "h-2 w-2 rounded-full transition-all",
                                        index === currentIndex ? "bg-blue-500 w-4" : "bg-gray-300",
                                    )}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
