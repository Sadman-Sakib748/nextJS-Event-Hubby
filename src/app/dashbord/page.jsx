"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Calendar,
    Users,
    TrendingUp,
    Eye,
    Plus,
    MoreHorizontal,
    Star,
    MapPin,
    Clock,
    DollarSign,
    Activity,
    Award,
    Target,
    Zap,
    ArrowUpRight,
    ArrowDownRight,
    Filter,
    Download,
    Bell,
    Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"

const statsData = [
    {
        title: "Total Events",
        value: "24",
        change: "+12%",
        trend: "up",
        icon: Calendar,
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        title: "Total Attendees",
        value: "1,247",
        change: "+23%",
        trend: "up",
        icon: Users,
        color: "from-orange-500 to-yellow-500",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
    },
    {
        title: "Revenue",
        value: "$12,450",
        change: "+8%",
        trend: "up",
        icon: DollarSign,
        color: "from-yellow-500 to-amber-500",
        bgColor: "bg-yellow-50",
        iconColor: "text-yellow-600",
    },
    {
        title: "Avg Rating",
        value: "4.8",
        change: "+0.2",
        trend: "up",
        icon: Star,
        color: "from-amber-600 to-orange-600",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-700",
    },
]

const recentEvents = [
    {
        id: 1,
        title: "Tech Conference 2024",
        date: "2024-03-15",
        attendees: 250,
        maxAttendees: 300,
        status: "active",
        revenue: "$2,500",
        image: "/placeholder.svg?height=60&width=60",
        location: "Dhaka",
        category: "Technology",
    },
    {
        id: 2,
        title: "Music Festival",
        date: "2024-03-20",
        attendees: 450,
        maxAttendees: 500,
        status: "active",
        revenue: "$4,500",
        image: "/placeholder.svg?height=60&width=60",
        location: "Chittagong",
        category: "Music",
    },
    {
        id: 3,
        title: "Startup Meetup",
        date: "2024-03-25",
        attendees: 120,
        maxAttendees: 150,
        status: "draft",
        revenue: "$0",
        image: "/placeholder.svg?height=60&width=60",
        location: "Sylhet",
        category: "Business",
    },
    {
        id: 4,
        title: "Art Exhibition",
        date: "2024-03-30",
        attendees: 180,
        maxAttendees: 200,
        status: "completed",
        revenue: "$1,800",
        image: "/placeholder.svg?height=60&width=60",
        location: "Dhaka",
        category: "Art",
    },
]

const upcomingEvents = [
    {
        id: 1,
        title: "Digital Marketing Workshop",
        date: "2024-04-05",
        time: "10:00 AM",
        attendees: 45,
        maxAttendees: 50,
    },
    {
        id: 2,
        title: "Food Festival",
        date: "2024-04-10",
        time: "2:00 PM",
        attendees: 320,
        maxAttendees: 400,
    },
    {
        id: 3,
        title: "Photography Workshop",
        date: "2024-04-15",
        time: "9:00 AM",
        attendees: 25,
        maxAttendees: 30,
    },
]

const achievements = [
    { title: "Event Master", description: "Created 20+ events", icon: Award, unlocked: true },
    { title: "Community Builder", description: "1000+ total attendees", icon: Users, unlocked: true },
    { title: "Revenue Generator", description: "$10K+ earned", icon: DollarSign, unlocked: true },
    { title: "Top Rated", description: "4.5+ average rating", icon: Star, unlocked: false },
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
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            {/* Header with Clip Path */}
            <div className="relative border-b border-white/20 bg-white/90 backdrop-blur-md sticky top-16 z-40 overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
                    }}
                />
                <div className="relative z-10 container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                                Dashboard
                            </h1>
                            <p className="text-gray-700 mt-1">Welcome back! Here's what's happening with your events.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-white/70 backdrop-blur-sm border-amber-200 hover:bg-amber-50"
                                >
                                    <Bell className="w-4 h-4 text-amber-600" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-white/70 backdrop-blur-sm border-amber-200 hover:bg-amber-50"
                                >
                                    <Settings className="w-4 h-4 text-amber-600" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white shadow-lg">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Create Event
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                    <TabsList className="grid w-full grid-cols-4 lg:w-[400px] bg-white/90 backdrop-blur-sm border border-amber-200">
                        <TabsTrigger
                            value="overview"
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                        >
                            Overview
                        </TabsTrigger>
                        <TabsTrigger
                            value="events"
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                        >
                            Events
                        </TabsTrigger>
                        <TabsTrigger
                            value="analytics"
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                        >
                            Analytics
                        </TabsTrigger>
                        <TabsTrigger
                            value="profile"
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                        >
                            Profile
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-8">
                        {/* Stats Cards */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {statsData.map((stat, index) => (
                                <motion.div key={stat.title} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}>
                                    <Card className="relative overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`} />
                                        <div
                                            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10`}
                                            style={{
                                                clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
                                            }}
                                        />
                                        <CardContent className="p-6 relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    className={`p-3 rounded-xl ${stat.bgColor} shadow-lg`}
                                                >
                                                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                                                </motion.div>
                                                <div className="flex items-center gap-1 text-sm">
                                                    {stat.trend === "up" ? (
                                                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                                                    ) : (
                                                        <ArrowDownRight className="w-4 h-4 text-red-500" />
                                                    )}
                                                    <span
                                                        className={
                                                            stat.trend === "up" ? "text-green-500 font-semibold" : "text-red-500 font-semibold"
                                                        }
                                                    >
                                                        {stat.change}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                                                <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Recent Events */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-2"
                            >
                                <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" />
                                    <CardHeader className="flex flex-row items-center justify-between pt-6">
                                        <div>
                                            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                                Recent Events
                                            </CardTitle>
                                            <CardDescription className="text-gray-600">Your latest event activities</CardDescription>
                                        </div>
                                        <div className="flex gap-2">
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button variant="outline" size="sm" className="bg-white/70 border-amber-200 hover:bg-amber-50">
                                                    <Filter className="w-4 h-4 mr-2 text-amber-600" />
                                                    Filter
                                                </Button>
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button variant="outline" size="sm" className="bg-white/70 border-amber-200 hover:bg-amber-50">
                                                    <Download className="w-4 h-4 mr-2 text-amber-600" />
                                                    Export
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {recentEvents.map((event, index) => (
                                                <motion.div
                                                    key={event.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    whileHover={{ scale: 1.02, x: 5 }}
                                                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-50/50 via-orange-50/50 to-yellow-50/50 hover:from-amber-100/70 hover:via-orange-100/70 hover:to-yellow-100/70 transition-all duration-300 group cursor-pointer border border-amber-100/50"
                                                >
                                                    <div className="relative">
                                                        <Image
                                                            src={event.image || "/placeholder.svg"}
                                                            alt={event.title}
                                                            width={60}
                                                            height={60}
                                                            className="rounded-lg object-cover shadow-md"
                                                        />
                                                        <div className="absolute -top-1 -right-1">
                                                            <Badge
                                                                variant={
                                                                    event.status === "active"
                                                                        ? "default"
                                                                        : event.status === "completed"
                                                                            ? "secondary"
                                                                            : "outline"
                                                                }
                                                                className={`text-xs ${event.status === "active"
                                                                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                                                                    : event.status === "completed"
                                                                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                                                                        : "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
                                                                    }`}
                                                            >
                                                                {event.status}
                                                            </Badge>
                                                        </div>
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                                                            {event.title}
                                                        </h4>
                                                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                                            <div className="flex items-center gap-1">
                                                                <Calendar className="w-3 h-3 text-amber-500" />
                                                                {new Date(event.date).toLocaleDateString()}
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <MapPin className="w-3 h-3 text-orange-500" />
                                                                {event.location}
                                                            </div>
                                                            <Badge variant="outline" className="text-xs border-amber-200 text-amber-700">
                                                                {event.category}
                                                            </Badge>
                                                        </div>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <Progress value={(event.attendees / event.maxAttendees) * 100} className="flex-1 h-2" />
                                                            <span className="text-xs text-gray-600 font-medium">
                                                                {event.attendees}/{event.maxAttendees}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className="font-semibold text-green-600 text-lg">{event.revenue}</p>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                                >
                                                                    <MoreHorizontal className="w-4 h-4" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                                <DropdownMenuItem>Edit Event</DropdownMenuItem>
                                                                <DropdownMenuItem>View Analytics</DropdownMenuItem>
                                                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Upcoming Events */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-orange-500" />
                                        <CardHeader className="pt-6">
                                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-amber-600" />
                                                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                                    Upcoming Events
                                                </span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {upcomingEvents.map((event, index) => (
                                                    <motion.div
                                                        key={event.id}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{ scale: 1.02 }}
                                                        className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 hover:from-amber-100 hover:via-orange-100 hover:to-yellow-100 transition-all duration-300 border border-amber-100"
                                                    >
                                                        <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg" />
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-gray-800 text-sm truncate">{event.title}</p>
                                                            <p className="text-xs text-gray-600">
                                                                {new Date(event.date).toLocaleDateString()} at {event.time}
                                                            </p>
                                                            <div className="flex items-center gap-1 mt-1">
                                                                <Users className="w-3 h-3 text-amber-500" />
                                                                <span className="text-xs text-gray-600">
                                                                    {event.attendees}/{event.maxAttendees}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Quick Actions */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <Card className="shadow-2xl border-0 bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 text-white overflow-hidden">
                                        <div
                                            className="absolute top-0 right-0 w-32 h-32 bg-white/10"
                                            style={{
                                                clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
                                            }}
                                        />
                                        <CardHeader className="relative z-10">
                                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                                <Zap className="w-5 h-5" />
                                                Quick Actions
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="relative z-10">
                                            <div className="space-y-3">
                                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                    <Button
                                                        variant="secondary"
                                                        className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                                                        asChild
                                                    >
                                                        <Link href="/create-event">
                                                            <Plus className="w-4 h-4 mr-2" />
                                                            Create New Event
                                                        </Link>
                                                    </Button>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                    <Button
                                                        variant="secondary"
                                                        className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                                                    >
                                                        <Eye className="w-4 h-4 mr-2" />
                                                        View Analytics
                                                    </Button>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                    <Button
                                                        variant="secondary"
                                                        className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                                                    >
                                                        <Users className="w-4 h-4 mr-2" />
                                                        Manage Attendees
                                                    </Button>
                                                </motion.div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Achievements */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-amber-500" />
                                        <CardHeader className="pt-6">
                                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                                <Target className="w-5 h-5 text-yellow-600" />
                                                <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                                    Achievements
                                                </span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                {achievements.map((achievement, index) => (
                                                    <motion.div
                                                        key={achievement.title}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{ scale: 1.02 }}
                                                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${achievement.unlocked
                                                            ? "bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border border-yellow-200 shadow-md"
                                                            : "bg-gray-50 opacity-60 border border-gray-200"
                                                            }`}
                                                    >
                                                        <motion.div
                                                            whileHover={{ rotate: 360 }}
                                                            transition={{ duration: 0.6 }}
                                                            className={`p-2 rounded-lg ${achievement.unlocked ? "bg-gradient-to-r from-yellow-100 to-amber-100" : "bg-gray-200"}`}
                                                        >
                                                            <achievement.icon
                                                                className={`w-4 h-4 ${achievement.unlocked ? "text-yellow-600" : "text-gray-400"}`}
                                                            />
                                                        </motion.div>
                                                        <div className="flex-1">
                                                            <p className="font-medium text-sm text-gray-800">{achievement.title}</p>
                                                            <p className="text-xs text-gray-600">{achievement.description}</p>
                                                        </div>
                                                        {achievement.unlocked && (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
                                                            />
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="events">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                        All Events
                                    </CardTitle>
                                    <CardDescription>Manage all your events in one place</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center py-12">
                                        <Calendar className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Events Management</h3>
                                        <p className="text-gray-600 mb-6">Detailed event management interface coming soon</p>
                                        <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600">
                                            <Plus className="w-4 h-4 mr-2" />
                                            Create Your First Event
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="analytics">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                        Analytics & Insights
                                    </CardTitle>
                                    <CardDescription>Track your event performance and growth</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center py-12">
                                        <TrendingUp className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced Analytics</h3>
                                        <p className="text-gray-600 mb-6">Detailed analytics dashboard coming soon</p>
                                        <Button variant="outline" className="bg-white/70 border-amber-200 hover:bg-amber-50">
                                            <Activity className="w-4 h-4 mr-2 text-amber-600" />
                                            View Sample Report
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="profile">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                        Profile Settings
                                    </CardTitle>
                                    <CardDescription>Manage your account and preferences</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center py-12">
                                        <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-amber-200">
                                            <AvatarImage src="/placeholder.svg" />
                                            <AvatarFallback className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold">
                                                JD
                                            </AvatarFallback>
                                        </Avatar>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">John Doe</h3>
                                        <p className="text-gray-600 mb-6">Event Organizer</p>
                                        <Button variant="outline" className="bg-white/70 border-amber-200 hover:bg-amber-50">
                                            <Settings className="w-4 h-4 mr-2 text-amber-600" />
                                            Edit Profile
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
