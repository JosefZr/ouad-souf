"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import useReveal from "@/hooks/useReveal"
import { useTranslation } from "react-i18next"
import { useSectionInView } from "@/hooks/useSelectInView"
import { CheckCircle, Award, Users, Target } from "lucide-react"

function About() {
    const { t } = useTranslation()
    const { t: r } = useTranslation()
    const { ref: refView } = useSectionInView(r("navbar.us.name"), 0.3)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scalProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    useReveal("horizontal")
    useReveal("vertical")

    return (
        <motion.div
            className="scroll-mt-28 mb-28 max-w-7xl mx-auto mt-20"
            id="nous"
            ref={ref}
        >
            <section
                ref={refView}
                className=" overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl"
                style={{ position: "relative" }}
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full -translate-x-16 -translate-y-16 opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-400 rounded-full translate-x-24 translate-y-24 opacity-15"></div>
                <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-10"></div>

                <div
                    className="flex xl:flex-row flex-col justify-center items-center gap-16 p-6 lg:p-16">
                    {/* Image Section */}
                    <div className=" flex items-center justify-center" style={{ position: "relative" }}>
                        {/* Background circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full w-80 h-80 opacity-10"></div>

                        {/* Main image */}
                        <div className=" z-10" style={{ position: "relative" }}>
                            <img
                                src="/images/nous.jpg"
                                alt="Notre équipe"
                                className="max-h-[600px] object-cover  border-8 border-white shadow-2xl reveal-horizontal-left"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col max-xl:text-center text-start gap-2 max-xl:w-full xl:w-1/2">
                        {/* Header */}
                        <div >
                            <p className="text-blue-600 font-semibold text-xl reveal-horizontal-right">{t("About.who")}</p>
                            <h1 className="reveal-horizontal-right font-bold text-4xl max-sm:text-2xl lg:text-4xl text-gray-800 leading-tight">
                                {t("About.title")}
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="reveal-horizontal-right text-sm text-gray-600 leading-relaxed">{t("About.description")}</p>

                        {/* Features List
                        <div className="space-y-4 reveal-horizontal-right">
                            <motion.div
                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                                    <Award className="w-5 h-5" />
                                </div>
                                <span className="text-gray-700 font-medium">Excellence dans la qualité de nos produits</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="text-gray-700 font-medium">Service client personnalisé et professionnel</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                                    <Target className="w-5 h-5" />
                                </div>
                                <span className="text-gray-700 font-medium">Solutions adaptées à vos besoins spécifiques</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <span className="text-gray-700 font-medium">Engagement envers l'innovation et la durabilité</span>
                            </motion.div>
                        </div> */}

                        {/* CTA Button */}
                        <motion.button
                            className="self-start max-xl:self-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            En Savoir Plus
                        </motion.button>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default About
