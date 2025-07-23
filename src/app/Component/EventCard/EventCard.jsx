"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Star, Clock, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function EventCard() {
    const sampleEvents = [
        {
            id: 1,
            title: "Music Fest 2025",
            image: "/music-fest.jpg",
            price: 50,
            category: "Music",
            date: "2025-08-01T00:00:00Z",
            time: "7:00 PM",
            location: "Dhaka",
            attendees: 120,
            rating: 4.5,
            ticketsLeft: 20,
            totalTickets: 100,
            description: "An amazing music festival.",
            organizer: "Music Org",
        },
        {
            id: 2,
            title: "Art Expo",
            image: "/art-expo.jpg",
            price: 30,
            category: "Art",
            date: "2025-08-05T00:00:00Z",
            time: "10:00 AM",
            location: "Chittagong",
            attendees: 80,
            rating: 4.7,
            ticketsLeft: 15,
            totalTickets: 50,
            description: "Explore stunning artworks.",
            organizer: "Art Lovers",
        },
        {
            id: 3,
            title: "Tech Conference",
            image: "/tech-conf.jpg",
            price: 100,
            category: "Technology",
            date: "2025-09-10T00:00:00Z",
            time: "9:00 AM",
            location: "Sylhet",
            attendees: 200,
            rating: 4.8,
            ticketsLeft: 50,
            totalTickets: 250,
            description: "Latest tech talks and workshops.",
            organizer: "Tech World",
        },
        {
            id: 4,
            title: "Food Carnival",
            image: "/food-carnival.jpg",
            price: 20,
            category: "Food",
            date: "2025-08-20T00:00:00Z",
            time: "12:00 PM",
            location: "Khulna",
            attendees: 150,
            rating: 4.3,
            ticketsLeft: 30,
            totalTickets: 150,
            description: "Taste delicious food from around the world.",
            organizer: "Foodies Inc",
        },
    ]

    return (
        <div className="w-full px-4 py-10">
            {/* Event Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sampleEvents.map((event) => (
                    <EventCardItem key={event.id} event={event} />
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-6 py-2 rounded-lg">
                    View All
                </Button>
            </div>
        </div>
    )
}

function EventCardItem({ event }) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    const soldPercentage =
        event.totalTickets && event.totalTickets > 0
            ? ((event.totalTickets - event.ticketsLeft) / event.totalTickets) * 100
            : 0

    return (
        <motion.div
            className="relative h-80 overflow-hidden rounded-xl"
            style={{ perspective: 1000 }}
            onHoverStart={() => setIsFlipped(true)}
            onHoverEnd={() => setIsFlipped(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            
            <motion.div
                className="relative w-full h-full cursor-pointer"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    transformStyle: "preserve-3d",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                }}
            >
                {/* Front of card */}
                <Card
                    className="absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-500/40 to-pink-500/40 border border-white/20"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <div className="relative h-full">
                        <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title || "Event Image"}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute top-4 right-4">
                            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                ${event.price ?? "N/A"}
                            </div>
                        </div>

                        <div className="absolute top-4 left-4">
                            <Badge className="bg-white/20 text-white border-white/30">
                                {event.category ?? "General"}
                            </Badge>
                        </div>

                        <motion.button
                            className="absolute top-16 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsLiked(!isLiked)
                            }}
                        >
                            <Heart
                                className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : "text-white"
                                    }`}
                            />
                        </motion.button>

                        <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-lg font-bold mb-1 line-clamp-2">
                                {event.title || "Untitled Event"}
                            </h3>

                            <div className="flex items-center gap-4 text-xs text-gray-300 mb-2">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {event.date ? new Date(event.date).toLocaleDateString() : "Date N/A"}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {event.time || "Time N/A"}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-gray-300 mb-3">
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {event.location || "Location N/A"}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    {event.attendees ?? 0}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    {event.rating ?? "0"}
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </Card>

                {/* Back of card */}
                <Card
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-pink-500/40 border border-white/20"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <CardContent className="p-4 h-full flex flex-col justify-between text-white text-sm">
                        <div>
                            <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                            <p className="text-gray-300 text-xs mb-3 line-clamp-3">
                                {event.description || "No description available."}
                            </p>
                            <div className="flex justify-between text-xs">
                                <span>Sold:</span>
                                <span>{soldPercentage.toFixed(0)}%</span>
                            </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm rounded-md shadow-md">
                            Book Now - ${event.price}
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    )
}
