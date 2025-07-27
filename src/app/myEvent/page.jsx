"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Calendar,
    Users,
    MapPin,
    MoreHorizontal,
    Plus,
    Search,
    Filter,
    Eye,
    Edit,
    Trash2,
    Copy,
    Share2,
    Clock,
    DollarSign,
    Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import Image from "next/image"

const myEvents = [
    {
        id: 1,
        title: "Tech Conference 2024",
        description: "Annual technology conference featuring industry leaders",
        date: "2024-03-15",
        time: "09:00",
        location: "Dhaka Convention Center",
        category: "Technology",
        status: "active",
        attendees: 250,
        maxAttendees: 300,
        revenue: 2500,
        views: 1250,
        rating: 4.8,
        image: "/placeholder.svg?height=200&width=300",
        createdAt: "2024-02-01",
    },
    {
        id: 2,
        title: "Music Festival 2024",
        description: "Three-day music festival with international artists",
        date: "2024-03-20",
        time: "18:00",
        location: "Chittagong Beach",
        category: "Music",
        status: "active",
        attendees: 450,
        maxAttendees: 500,
        revenue: 4500,
        views: 2100,
        rating: 4.9,
        image: "/placeholder.svg?height=200&width=300",
        createdAt: "2024-01-15",
    },
    {
        id: 3,
        title: "Startup Meetup",
        description: "Monthly networking event for entrepreneurs",
        date: "2024-03-25",
        time: "19:00",
        location: "Sylhet Business Hub",
        category: "Business",
        status: "draft",
        attendees: 0,
        maxAttendees: 150,
        revenue: 0,
        views: 45,
        rating: 0,
        image: "/placeholder.svg?height=200&width=300",
        createdAt: "2024-02-20",
    },
    {
        id: 4,
        title: "Art Exhibition",
        description: "Contemporary art showcase by local artists",
        date: "2024-02-28",
        time: "10:00",
        location: "Dhaka Art Gallery",
        category: "Art",
        status: "completed",
        attendees: 180,
        maxAttendees: 200,
        revenue: 1800,
        views: 890,
        rating: 4.6,
        image: "/placeholder.svg?height=200&width=300",
        createdAt: "2024-01-10",
    },
    {
        id: 5,
        title: "Food Festival",
        description: "Culinary celebration with local and international cuisine",
        date: "2024-04-05",
        time: "12:00",
        location: "Chittagong Food Court",
        category: "Food",
        status: "active",
        attendees: 320,
        maxAttendees: 400,
        revenue: 3200,
        views: 1680,
        rating: 4.7,
        image: "/placeholder.svg?height=200&width=300",
        createdAt: "2024-02-10",
    },
    {
        id: 6,
        title: "Photography Workshop",
        description: "Learn professional photography techniques",
        date: "2024-04-15",
        time: "14:00",
        location: "Dhaka Photography Studio",
        category: "Education",
        status: "active",
        attendees: 25,
        maxAttendees: 30,
        revenue: 750,
        views: 320,
        rating: 4.9,
        image: "/placeholder.svg?height=200&width=300",
        createdAt: "2024-03-01",
    },
]

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

export default function MyEventsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [activeTab, setActiveTab] = useState("all")
    const [viewMode, setViewMode] = useState("grid")

    const filteredEvents = myEvents.filter((event) => {
        const matchesSearch =
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesTab =
            activeTab === "all" ||
            (activeTab === "active" && event.status === "active") ||
            (activeTab === "draft" && event.status === "draft") ||
            (activeTab === "completed" && event.status === "completed")

        return matchesSearch && matchesTab
    })

    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "bg-green-100 text-green-800 border-green-200"
            case "draft":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
            case "completed":
                return "bg-blue-100 text-blue-800 border-blue-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    const totalRevenue = myEvents.reduce((sum, event) => sum + event.revenue, 0)
    const totalAttendees = myEvents.reduce((sum, event) => sum + event.attendees, 0)
    const averageRating = myEvents.reduce((sum, event) => sum + event.rating, 0) / myEvents.length

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header */}
            <div className="border-b border-white/20 bg-white/80 backdrop-blur-md sticky top-16 z-40">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                My Events
                            </h1>
                            <p className="text-gray-600 mt-1">Manage and track all your events in one place</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    placeholder="Search events..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 w-64 bg-white/50 backdrop-blur-sm border-gray-200"
                                />
                            </div>
                            <Button variant="outline" className="bg-white/50 backdrop-blur-sm border-gray-200">
                                <Filter className="w-4 h-4 mr-2" />
                                Filter
                            </Button>
                            <Button
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                asChild
                            >
                                <Link href="/create-event">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Create Event
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
                >
                    <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-purple-100 text-sm">Total Events</p>
                                    <p className="text-2xl font-bold">{myEvents.length}</p>
                                </div>
                                <Calendar className="w-8 h-8 text-purple-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-blue-100 text-sm">Total Attendees</p>
                                    <p className="text-2xl font-bold">{totalAttendees.toLocaleString()}</p>
                                </div>
                                <Users className="w-8 h-8 text-blue-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-green-100 text-sm">Total Revenue</p>
                                    <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
                                </div>
                                <DollarSign className="w-8 h-8 text-green-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-yellow-100 text-sm">Avg Rating</p>
                                    <p className="text-2xl font-bold">{averageRating.toFixed(1)}</p>
                                </div>
                                <Star className="w-8 h-8 text-yellow-200" />
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <div className="flex items-center justify-between">
                        <TabsList className="bg-white/80 backdrop-blur-sm">
                            <TabsTrigger value="all">All Events ({myEvents.length})</TabsTrigger>
                            <TabsTrigger value="active">Active ({myEvents.filter((e) => e.status === "active").length})</TabsTrigger>
                            <TabsTrigger value="draft">Draft ({myEvents.filter((e) => e.status === "draft").length})</TabsTrigger>
                            <TabsTrigger value="completed">
                                Completed ({myEvents.filter((e) => e.status === "completed").length})
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex items-center gap-2">
                            <Button
                                variant={viewMode === "grid" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setViewMode("grid")}
                                className="bg-white/50"
                            >
                                Grid
                            </Button>
                            <Button
                                variant={viewMode === "list" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setViewMode("list")}
                                className="bg-white/50"
                            >
                                List
                            </Button>
                        </div>
                    </div>

                    <TabsContent value={activeTab}>
                        {filteredEvents.length === 0 ? (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">No events found</h3>
                                <p className="text-gray-600 mb-6">
                                    {searchTerm ? "Try adjusting your search criteria" : "Create your first event to get started"}
                                </p>
                                <Button
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                    asChild
                                >
                                    <Link href="/create-event">
                                        <Plus className="w-4 h-4 mr-2" />
                                        Create Event
                                    </Link>
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
                            >
                                {filteredEvents.map((event) => (
                                    <motion.div key={event.id} variants={itemVariants} whileHover={{ y: -5 }}>
                                        {viewMode === "grid" ? (
                                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                                                <div className="relative overflow-hidden">
                                                    <Image
                                                        src={event.image || "/placeholder.svg"}
                                                        alt={event.title}
                                                        width={300}
                                                        height={200}
                                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute top-4 left-4 flex gap-2">
                                                        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                                                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                                                            {event.category}
                                                        </Badge>
                                                    </div>
                                                    <div className="absolute top-4 right-4">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    variant="secondary"
                                                                    size="icon"
                                                                    className="bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                                                                >
                                                                    <MoreHorizontal className="w-4 h-4" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem asChild>
                                                                    <Link href={`/events/${event.id}`}>
                                                                        <Eye className="w-4 h-4 mr-2" />
                                                                        View Event
                                                                    </Link>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <Edit className="w-4 h-4 mr-2" />
                                                                    Edit Event
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <Copy className="w-4 h-4 mr-2" />
                                                                    Duplicate
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <Share2 className="w-4 h-4 mr-2" />
                                                                    Share
                                                                </DropdownMenuItem>
                                                                <DropdownMenuSeparator />
                                                                <AlertDialog>
                                                                    <AlertDialogTrigger asChild>
                                                                        <DropdownMenuItem
                                                                            className="text-red-600 focus:text-red-600"
                                                                            onSelect={(e) => e.preventDefault()}
                                                                        >
                                                                            <Trash2 className="w-4 h-4 mr-2" />
                                                                            Delete
                                                                        </DropdownMenuItem>
                                                                    </AlertDialogTrigger>
                                                                    <AlertDialogContent>
                                                                        <AlertDialogHeader>
                                                                            <AlertDialogTitle>Delete Event</AlertDialogTitle>
                                                                            <AlertDialogDescription>
                                                                                Are you sure you want to delete "{event.title}"? This action cannot be undone.
                                                                            </AlertDialogDescription>
                                                                        </AlertDialogHeader>
                                                                        <AlertDialogFooter>
                                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                            <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                                                                                Delete
                                                                            </AlertDialogAction>
                                                                        </AlertDialogFooter>
                                                                    </AlertDialogContent>
                                                                </AlertDialog>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>

                                                <CardHeader>
                                                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                                                        {event.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-gray-600">{event.description}</CardDescription>
                                                </CardHeader>

                                                <CardContent className="space-y-4">
                                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <Calendar className="w-4 h-4" />
                                                            {new Date(event.date).toLocaleDateString()}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <Clock className="w-4 h-4" />
                                                            {event.time}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <MapPin className="w-4 h-4" />
                                                            {event.location}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <Eye className="w-4 h-4" />
                                                            {event.views} views
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between text-sm">
                                                            <span className="text-gray-600">Attendance</span>
                                                            <span className="font-medium">
                                                                {event.attendees}/{event.maxAttendees}
                                                            </span>
                                                        </div>
                                                        <Progress value={(event.attendees / event.maxAttendees) * 100} className="h-2" />
                                                    </div>

                                                    <div className="flex items-center justify-between pt-2">
                                                        <div className="flex items-center gap-4">
                                                            <div className="text-sm">
                                                                <span className="text-gray-600">Revenue: </span>
                                                                <span className="font-semibold text-green-600">${event.revenue}</span>
                                                            </div>
                                                            {event.rating > 0 && (
                                                                <div className="flex items-center gap-1">
                                                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                                    <span className="text-sm font-medium">{event.rating}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <Button size="sm" variant="outline" className="bg-white/50" asChild>
                                                            <Link href={`/events/${event.id}`}>View Details</Link>
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ) : (
                                            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                                                <CardContent className="p-6">
                                                    <div className="flex items-center gap-4">
                                                        <Image
                                                            src={event.image || "/placeholder.svg"}
                                                            alt={event.title}
                                                            width={80}
                                                            height={80}
                                                            className="rounded-lg object-cover"
                                                        />
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <h3 className="text-lg font-bold text-gray-800 truncate">{event.title}</h3>
                                                                <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                                                            </div>
                                                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{event.description}</p>
                                                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                                                <div className="flex items-center gap-1">
                                                                    <Calendar className="w-4 h-4" />
                                                                    {new Date(event.date).toLocaleDateString()}
                                                                </div>
                                                                <div className="flex items-center gap-1">
                                                                    <Users className="w-4 h-4" />
                                                                    {event.attendees}/{event.maxAttendees}
                                                                </div>
                                                                <div className="flex items-center gap-1">
                                                                    <DollarSign className="w-4 h-4" />${event.revenue}
                                                                </div>
                                                                {event.rating > 0 && (
                                                                    <div className="flex items-center gap-1">
                                                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                                        {event.rating}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Button variant="outline" size="sm" className="bg-white/50" asChild>
                                                                <Link href={`/events/${event.id}`}>
                                                                    <Eye className="w-4 h-4 mr-2" />
                                                                    View
                                                                </Link>
                                                            </Button>
                                                            <DropdownMenu>
                                                                <DropdownMenuTrigger asChild>
                                                                    <Button variant="outline" size="icon" className="bg-white/50">
                                                                        <MoreHorizontal className="w-4 h-4" />
                                                                    </Button>
                                                                </DropdownMenuTrigger>
                                                                <DropdownMenuContent align="end">
                                                                    <DropdownMenuItem>
                                                                        <Edit className="w-4 h-4 mr-2" />
                                                                        Edit Event
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem>
                                                                        <Copy className="w-4 h-4 mr-2" />
                                                                        Duplicate
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem>
                                                                        <Share2 className="w-4 h-4 mr-2" />
                                                                        Share
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuSeparator />
                                                                    <DropdownMenuItem className="text-red-600">
                                                                        <Trash2 className="w-4 h-4 mr-2" />
                                                                        Delete
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuContent>
                                                            </DropdownMenu>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}