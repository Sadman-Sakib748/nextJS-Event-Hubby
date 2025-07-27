"use client"

import { useState } from "react"
import { Menu, X, Calendar, Plus, User, Home, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Event", href: "/allEvent", icon: Calendar },
  { name: "Dashboard", href: "/dashbord", icon: TrendingUp },
  { name: "My Events", href: "/myEvent", icon: User },
  { name: "Create Event", href: "/createEvent", icon: Plus },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-200/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg"
            >
              <Calendar className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              EventWave
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium group">
                  <item.icon className="w-4 h-4 group-hover:text-orange-500 transition-colors" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="text-gray-700 hover:text-amber-600 hover:bg-amber-50">
                <Link href="/login">Login</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white shadow-lg">
                <Link href="/register">Sign Up</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isOpen ? <X className="w-6 h-6 text-amber-600" /> : <Menu className="w-6 h-6 text-amber-600" />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200/50"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2 px-2 rounded-lg hover:bg-amber-50"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}

            <div className="flex flex-col space-y-2 pt-4 border-t border-amber-200">
              <Button asChild variant="ghost" className="justify-start text-gray-700 hover:text-amber-600 hover:bg-amber-50">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button
                asChild
                className="justify-start bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white"
              >
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
