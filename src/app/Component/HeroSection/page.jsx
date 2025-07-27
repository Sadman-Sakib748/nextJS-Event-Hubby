"use client"
import { motion } from "framer-motion"
import { Sparkles, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const floatingVariants = {
    animate: {
        y: [0, -20, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.05, 1],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
}

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600" style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 85% 85%, 70% 95%, 50% 85%, 30% 95%, 15% 85%, 0% 75%)" }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-amber-500/30 to-yellow-500/30" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 90%, 80% 85%, 70% 90%, 60% 85%, 50% 90%, 40% 85%, 30% 90%, 20% 85%, 10% 90%, 0% 80%)" }} />

            {/* Floating decorations */}
            <motion.div variants={floatingVariants} animate="animate" className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 backdrop-blur-sm rounded-full hidden lg:block" style={{ clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)" }} />
            <motion.div variants={floatingVariants} animate="animate" className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 backdrop-blur-sm rounded-full hidden lg:block" style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }} />
            <motion.div variants={floatingVariants} animate="animate" className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-400/20 backdrop-blur-sm rounded-full hidden lg:block" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />

            <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30"
                    >
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <span className="text-sm font-semibold">Welcome to EventWave</span>
                        <Star className="w-4 h-4 text-yellow-300" />
                    </motion.div>

                    <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                        Discover Amazing{" "}
                        <motion.span className="block bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
                            Events Near You
                        </motion.span>
                    </motion.h1>

                    <motion.p className="text-xl md:text-3xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Create, discover, and join events that matter to you. Connect with like-minded people and make unforgettable memories.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 text-xl px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25" asChild>
                            <Link href="/events">Explore Events <ArrowRight className="ml-3 w-6 h-6" /></Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 text-xl px-10 py-4 rounded-full font-bold bg-transparent backdrop-blur-sm" asChild>
                            <Link href="/create-event">Create Event</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
