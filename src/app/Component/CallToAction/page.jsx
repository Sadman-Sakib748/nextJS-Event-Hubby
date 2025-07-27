"use client"
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600" style={{ clipPath: "polygon(0 25%, 100% 0%, 100% 75%, 85% 85%, 70% 75%, 50% 85%, 30% 75%, 15% 85%, 0% 75%)" }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 via-amber-500/40 to-yellow-500/40" style={{ clipPath: "polygon(0 30%, 100% 5%, 100% 70%, 90% 80%, 80% 70%, 70% 80%, 60% 70%, 50% 80%, 40% 70%, 30% 80%, 20% 70%, 10% 80%, 0% 70%)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-4xl mx-auto">
          <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2, duration: 0.8, type: "spring" }} className="inline-block p-4 bg-white/20 backdrop-blur-md rounded-full mb-8">
            <Star className="w-10 h-10 text-yellow-300" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Ready to Create Your Event?</h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">Join thousands of event organizers who trust EventWave to bring their vision to life</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 text-xl px-12 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/25" asChild>
              <Link href="/create-event">Create Your Event Now <ArrowRight className="ml-3 w-6 h-6" /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
