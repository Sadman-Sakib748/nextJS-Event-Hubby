"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Heart, Share2, ArrowLeft, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

// Mock event data - in real app, this would come from API
const eventData = {
    id: 1,
    title: "Tech Conference 2024",
    description:
        "Join the biggest tech conference of the year with industry leaders, innovative workshops, and networking opportunities. This event will feature keynote speakers from top tech companies, hands-on workshops, and plenty of networking opportunities.",
    fullDescription:
        "This comprehensive tech conference brings together industry leaders, innovative startups, and tech enthusiasts for a day of learning, networking, and inspiration. Attendees will have access to keynote presentations from CEOs of major tech companies, interactive workshops covering the latest technologies, and networking sessions with like-minded professionals. The event covers topics including AI, blockchain, cloud computing, cybersecurity, and emerging technologies that are shaping the future of our digital world.",
    date: "2024-03-15",
    time: "09:00",
    endTime: "18:00",
    location: "Dhaka Convention Center, Dhaka, Bangladesh",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=800",
    attendees: 250,
    maxAttendees: 500,
    price: "Free",
    organizer: {
        name: "Tech Events BD",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.8,
        eventsHosted: 25,
    },
    agenda: [
        { time: "09:00 - 09:30", title: "Registration & Welcome Coffee" },
        { time: "09:30 - 10:30", title: "Keynote: The Future of AI" },
        { time: "10:30 - 11:00", title: "Coffee Break" },
        { time: "11:00 - 12:00", title: "Workshop: Building Scalable Applications" },
        { time: "12:00 - 13:00", title: "Lunch Break" },
        { time: "13:00 - 14:00", title: "Panel: Startup Success Stories" },
        { time: "14:00 - 15:00", title: "Workshop: Cloud Computing Essentials" },
        { time: "15:00 - 15:30", title: "Coffee Break" },
        { time: "15:30 - 16:30", title: "Keynote: Cybersecurity in 2024" },
        { time: "16:30 - 17:30", title: "Networking Session" },
        { time: "17:30 - 18:00", title: "Closing Remarks" },
    ],
    speakers: [
        {
            name: "Dr. Sarah Johnson",
            role: "AI Research Director",
            company: "TechCorp",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        { name: "Mike Chen", role: "CTO", company: "StartupXYZ", avatar: "/placeholder.svg?height=60&width=60" },
        {
            name: "Lisa Rodriguez",
            role: "Security Expert",
            company: "CyberSafe",
            avatar: "/placeholder.svg?height=60&width=60",
        },
    ],
}

export default function EventDetailsPage() {
    const [isJoined, setIsJoined] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const params = useParams()

    const handleJoinEvent = () => {
        setIsJoined(!isJoined)
    }

    const handleLikeEvent = () => {
        setIsLiked(!isLiked)
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: eventData.title,
                text: eventData.description,
                url: window.location.href,
            })
        } else {
            navigator.clipboard.writeText(window.location.href)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <Image src={eventData.image || "/placeholder.svg"} alt={eventData.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                    <div className="container mx-auto px-4 pb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white"
                        >
                            <Link
                                href="/event"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Events
                            </Link>

                            <div className="flex items-center gap-2 mb-2">
                                <Badge className="bg-purple-600 hover:bg-purple-700">{eventData.category}</Badge>
                                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                                    {eventData.price}
                                </Badge>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventData.title}</h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    {new Date(eventData.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    {eventData.time} - {eventData.endTime}
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    {eventData.location}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    {eventData.attendees} / {eventData.maxAttendees} attendees
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <Card className="shadow-lg border-0">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold">About This Event</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 leading-relaxed mb-4">{eventData.description}</p>
                                        <p className="text-gray-600 leading-relaxed">{eventData.fullDescription}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Agenda */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Card className="shadow-lg border-0">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold">Event Agenda</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {eventData.agenda.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                                                >
                                                    <div className="text-purple-600 font-semibold min-w-[120px]">{item.time}</div>
                                                    <div className="font-medium text-gray-800">{item.title}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Speakers */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Card className="shadow-lg border-0">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold">Featured Speakers</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {eventData.speakers.map((speaker, index) => (
                                                <div key={index} className="text-center">
                                                    <Avatar className="w-16 h-16 mx-auto mb-3">
                                                        <AvatarImage src={speaker.avatar || "/placeholder.svg"} alt={speaker.name} />
                                                        <AvatarFallback>
                                                            {speaker.name
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <h4 className="font-semibold text-gray-800">{speaker.name}</h4>
                                                    <p className="text-sm text-gray-600">{speaker.role}</p>
                                                    <p className="text-sm text-purple-600">{speaker.company}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Join Event Card */}
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <Card className="shadow-lg border-0 sticky top-8">
                                    <CardContent className="p-6">
                                        <div className="text-center mb-6">
                                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                                {eventData.price === "Free" ? "FREE" : eventData.price}
                                            </div>
                                            <p className="text-gray-600">{eventData.maxAttendees - eventData.attendees} spots left</p>
                                        </div>

                                        <div className="space-y-4">
                                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                <Button
                                                    onClick={handleJoinEvent}
                                                    className={`w-full h-12 text-lg font-semibold transition-all duration-300 ${isJoined
                                                        ? "bg-green-600 hover:bg-green-700"
                                                        : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                                        }`}
                                                >
                                                    {isJoined ? "✓ Joined" : "Join Event"}
                                                </Button>
                                            </motion.div>

                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={handleLikeEvent}
                                                    className={`flex-1 ${isLiked ? "text-red-500 border-red-500" : ""}`}
                                                >
                                                    <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                                                </Button>
                                                <Button variant="outline" size="icon" onClick={handleShare} className="flex-1 bg-transparent">
                                                    <Share2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Organizer Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Card className="shadow-lg border-0">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-bold">Event Organizer</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Avatar className="w-12 h-12">
                                                <AvatarImage
                                                    src={eventData.organizer.avatar || "/placeholder.svg"}
                                                    alt={eventData.organizer.name}
                                                />
                                                <AvatarFallback>
                                                    {eventData.organizer.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{eventData.organizer.name}</h4>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                    <span className="text-sm text-gray-600">{eventData.organizer.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">{eventData.organizer.eventsHosted} events hosted</p>
                                        <Button variant="outline" className="w-full bg-transparent">
                                            View Profile
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Location Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Card className="shadow-lg border-0">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-bold">Location</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-start gap-2 mb-4">
                                            <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                                            <div>
                                                <p className="font-medium text-gray-800">Dhaka Convention Center</p>
                                                <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
                                            </div>
                                        </div>
                                        <div className="aspect-video bg-gray-100 rounded-lg mb-4">
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <MapPin className="w-8 h-8" />
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full bg-transparent">
                                            Get Directions
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
