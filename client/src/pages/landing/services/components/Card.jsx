import useReveal from "@/hooks/useReveal"

export default function Card({ titre, content, image }) {
    useReveal("horizontal")
    useReveal("vertical")

    return (
        <article className="reveal-horizontal-right group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
            {/* Image Container */}
            <div className=" overflow-hidden bg-gray-100" style={{ position: "relative" }}>
                <div className=" w-full">
                    <img
                        alt={titre || "Service image"}
                        src={image}
                        className="max-h-72 w-full object-cover  transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-2xl max-sm:xl capitalize  font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {titre}
                </h3>

                <p className="text-gray-600 text-lg max-sm:text-sm leading-relaxed flex-1 line-clamp-4">{content}</p>

                {/* Optional: Add a "Learn More" indicator */}
                {/* <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more →
                    </span>
                </div> */}
            </div>
        </article>
    )
}
