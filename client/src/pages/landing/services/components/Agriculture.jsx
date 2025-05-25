export default function Agriculture() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none mx-auto">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl text-center">
                                Fonctions principales de nos produits agricoles
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Nos produits offrent une protection très haute contre le froid et régulent les températures pour éviter
                                les différences importantes qui peuvent gêner le développement des cultures. Ils permettent d'accélérer
                                la germination des plantes et aident les végétaux à résister aux intempéries. Perméables à l'air et à
                                l'eau, ils évitent la déshydratation tout en formant une barrière physique contre les insectes et les
                                oiseaux.
                            </p>

                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    Protection très haute contre le froid
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    Régulation des températures pour un développement optimal
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    Accélération de la germination des plantes
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    Résistance mécanique et effet brise-vent
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/images/p3.jpg"
                            className="rounded maxh-[400px] max-w-[300px] mx-auto"
                            alt="Produits agricoles Bennour"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
