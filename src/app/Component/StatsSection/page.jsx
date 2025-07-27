"use client"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
}

export default function StatsSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100" style={{ clipPath: "polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)" }} />
            <div className="relative z-10 container mx-auto px-4">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <motion.div variants={itemVariants} className="text-center group">
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-5xl font-bold text-amber-600 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                            1000+
                        </motion.div>
                        <div className="text-gray-700 text-lg font-medium">Events Created</div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-center group">
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="text-5xl font-bold text-orange-600 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                            50K+
                        </motion.div>
                        <div className="text-gray-700 text-lg font-medium">Happy Attendees</div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-center group">
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-5xl font-bold text-yellow-600 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                            25+
                        </motion.div>
                        <div className="text-gray-700 text-lg font-medium">Cities Covered</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
