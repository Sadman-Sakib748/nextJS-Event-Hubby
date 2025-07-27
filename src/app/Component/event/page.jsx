"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { Button } from "@/component/ui/button"
import { Input } from "@/component/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/component/ui/card"
import { Badge } from "@/component/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/component/ui/select"
import Link from "next/link"
import Image from "next/image"

const events = [
    {
        id: 1,
        title: "Tech Conference 2024",
        description: "Join the biggest tech conference of the year with industry leaders",
        date: "2024-03-15",
        location: "Dhaka, Bangladesh",
        category: "Technology",
        image: "/placeholder.svg?height=200&width=300",
        attendees: 250,
        price: "Free",
    },
    {
        id: 2,
        title: "Music Festival",
        description: "Experience amazing live music performances from top artists",
        date: "2024-03-20",
        location: "Chittagong, Bangladesh",
        category: "Music",
        image: "/placeholder.svg?height=200&width=300",
        attendees: 500,
        price: "$25",
    },
    {
        id: 3,
        title: "Startup Meetup",
        description: "Network with entrepreneurs and investors in your area",
        date: "2024-03-25",
        location: "Sylhet, Bangladesh",
        category: "Business",
        image: "/placeholder.svg?height=200&width=300",
        attendees: 150,
        price: "Free",
    },
    {
        id: 4,
        title: "Art Exhibition",
        description: "Discover contemporary art from local and international artists",
        date: "2024-03-30",
        location: "Dhaka, Bangladesh",
        category: "Art",
        image: "/placeholder.svg?height=200&width=300",
        attendees: 200,
        price: "$15",
    },
    {
        id: 5,
        title: "Food Festival",
        description: "Taste delicious food from around the world",
        date: "2024-04-05",
        location: "Chittagong, Bangladesh",
        category: "Food",
        image: "/placeholder.svg?height=200&width=300",
        attendees: 300,
        price: "$20",
    },
    {
        id: 6,
        title: "Workshop: Digital Marketing",
        description: "Learn the latest digital marketing strategies and techniques",
        date: "2024-04-10",
        location: "Dhaka, Bangladesh",
        category: "Education",
        image: "/placeholder.svg?height=200&width=300",
        attendees: 80,
        price: "$50",
    },
]

const categories = ["All", "Technology", "Music", "Business", "Art", "Food", "Education"]
const locations = ["All", "Dhaka", "Chittagong", "Sylhet"]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

export default function EventsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedLocation, setSelectedLocation] = useState("All")

    const filteredEvents = events.filter((event) => {
        const matchesSearch =
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
        const matchesLocation = selectedLocation === "All" || event.location.includes(selectedLocation)

        return matchesSearch && matchesCategory && matchesLocation
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
            {/* Header Section */}
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
                    }}
                />

                <div className="relative z-10 container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Events</h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Find amazing events happening near you and join the community
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 -mt-16 relative z-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-2">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <Input
                                        placeholder="Search events..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 h-12 border-gray-200 focus:border-purple-500"
                                    />
                                </div>
                            </div>

                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="h-12 border-gray-200 focus:border-purple-500">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                <SelectTrigger className="h-12 border-gray-200 focus:border-purple-500">
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    {locations.map((location) => (
                                        <SelectItem key={location} value={location}>
                                            {location}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-between mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800">{filteredEvents.length} Events Found</h2>
                        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                            <Filter className="w-4 h-4" />
                            More Filters
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 },
                                }}
                                className="group"
                            >
                                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={event.image || "/placeholder.svg"}
                                            alt={event.title}
                                            width={300}
                                            height={200}
                                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <Badge className="bg-purple-600 hover:bg-purple-700">{event.category}</Badge>
                                            <Badge variant="secondary" className="bg-white/90 text-gray-800">
                                                {event.price}
                                            </Badge>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <CardHeader>
                                        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                                            {event.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600">{event.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-3">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(event.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <MapPin className="w-4 h-4" />
                                            {event.location}
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Users className="w-4 h-4" />
                                            {event.attendees} attendees
                                        </div>

                                        <Button
                                            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                                            asChild
                                        >
                                            <Link href={`/events/${event.id}`}>
                                                View Details
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredEvents.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center py-16"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Events Found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all events</p>
                            <Button
                                onClick={() => {
                                    setSearchTerm("")
                                    setSelectedCategory("All")
                                    setSelectedLocation("All")
                                }}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                            >
                                Clear Filters
                            </Button>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    )
}
