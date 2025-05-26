import { Award, CheckCircle, Target, Users } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
export default function Agriculture() {
    const features = [
        {
            icon: <Award className="w-5 h-5" />,
            text: "Protection très haute contre le froid",
        },
        {
            icon: <Users className="w-5 h-5" />,
            text: "Régulation des températures pour un développement optimal",
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Accélération de la germination des plantes",
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            text: "Résistance mécanique et effet brise-vent",
        },
    ]
    return (
        <section className="relative overflow-hidden">
            {/* Green background with leaf pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700">
                {/* Leaf pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="leafPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M10,2 Q15,10 10,18 Q5,10 10,2 Z" fill="currentColor" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#leafPattern)" />
                    </svg>
                </div>

                {/* Decorative curved shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full">
                    <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
                        <path d="M400,0 Q300,150 400,300 Q250,450 400,600 L400,0 Z" fill="rgba(255,255,255,0.05)" />
                        <path d="M400,50 Q320,200 400,350 Q280,500 400,600 L400,50 Z" fill="rgba(255,255,255,0.03)" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div style={{ position: "relative" }} className=" z-10 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
                    <div>
                        <div className="max-w-lg md:max-w-none mx-auto">
                            <h2 className="text-4xl max-sm:text-2xl font-semibold text-white sm:text-3xl text-center mb-2">
                                Fonctions principales de nos produits agricoles
                            </h2>

                            {/* Decorative line */}
                            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>

                            <p className="mt-4 text-white/90 leading-relaxed">
                                Nos produits offrent une protection très haute contre le froid et régulent les températures pour éviter
                                les différences importantes qui peuvent gêner le développement des cultures. Ils permettent d'accélérer
                                la germination des plantes et aident les végétaux à résister aux intempéries. Perméables à l'air et à
                                l'eau, ils évitent la déshydratation tout en formant une barrière physique contre les insectes et les
                                oiseaux.
                            </p>

                            <ul className="mt-8 space-y-4 text-white/90">
                                {/* Features List */}
                                <div className=" reveal-horizontal-right">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 cursor-pointer transition-colors duration-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white">
                                                {feature.icon}
                                            </div>
                                            <span className="text-white font-medium">{feature.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                            </ul>
                        </div>
                    </div>

                    <div className="relative w-full max-w-5xl mx-auto">
                        {/* For large screens: stacked layout */}
                        <div className="hidden md:flex flex-col items-center">
                            {/* Top image */}
                            <div className="mb-6">
                                <img
                                    src="/images/agri1.webp"
                                    className="rounded-lg w-72 h-auto object-cover shadow-xl border-4 border-white"
                                    alt="Plants with protective covering"
                                />
                            </div>

                            {/* Bottom two images side-by-side */}
                            <div className="flex gap-8">
                                <img
                                    src="/images/agri3.webp"
                                    className="rounded-lg w-72 h-auto object-cover shadow-xl border-4 border-white"
                                    alt="Seedlings growing in soil"
                                />
                                <img
                                    src="/images/agri2.webp"
                                    className="rounded-lg w-72 h-auto object-cover shadow-xl border-4 border-white"
                                    alt="Greenhouse tunnel with crops"
                                />
                            </div>
                        </div>

                        {/* For medium and smaller screens: row layout */}
                        <div className="md:hidden flex flex-wrap justify-center gap-4">
                            <img
                                src="/images/agri1.webp"
                                className="rounded-lg w-60 h-auto object-cover shadow-xl border-4 border-white"
                                alt="Plants with protective covering"
                            />
                            <img
                                src="/images/agri3.webp"
                                className="rounded-lg w-60 h-auto object-cover shadow-xl border-4 border-white"
                                alt="Seedlings growing in soil"
                            />
                            <img
                                src="/images/agri2.webp"
                                className="rounded-lg w-60 h-auto object-cover shadow-xl border-4 border-white"
                                alt="Greenhouse tunnel with crops"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full"></div>
                        <div className="absolute top-1/2 -right-8 w-6 h-6 bg-white/15 rounded-full"></div>
                        <div className="absolute top-1/4 -left-4 w-4 h-4 bg-white/25 rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
