"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, ImageIcon, Users, DollarSign, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = ["Technology", "Music", "Business", "Art", "Food", "Education", "Sports", "Health"]

const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

const previewVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
        },
    },
}

export default function CreateEventPage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        category: "",
        price: "",
        maxAttendees: "",
        image: "",
    })

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Event data:", formData)
    }

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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Create Your Event</h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Bring your vision to life and connect with your community
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 -mt-16 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Form */}
                        <motion.div variants={formVariants} initial="hidden" animate="visible">
                            <Card className="shadow-xl border-0">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        Event Details
                                    </CardTitle>
                                    <CardDescription>Fill in the information about your event</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Event Title */}
                                        <div className="space-y-2">
                                            <Label htmlFor="title" className="text-sm font-medium flex items-center gap-2">
                                                <FileText className="w-4 h-4" />
                                                Event Title
                                            </Label>
                                            <Input
                                                id="title"
                                                placeholder="Enter your event title"
                                                value={formData.title}
                                                onChange={(e) => handleInputChange("title", e.target.value)}
                                                className="h-12 border-gray-200 focus:border-purple-500"
                                            />
                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor="description" className="text-sm font-medium">
                                                Description
                                            </Label>
                                            <Textarea
                                                id="description"
                                                placeholder="Describe your event..."
                                                value={formData.description}
                                                onChange={(e) => handleInputChange("description", e.target.value)}
                                                className="min-h-[100px] border-gray-200 focus:border-purple-500"
                                            />
                                        </div>

                                        {/* Date and Time */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    Date
                                                </Label>
                                                <Input
                                                    id="date"
                                                    type="date"
                                                    value={formData.date}
                                                    onChange={(e) => handleInputChange("date", e.target.value)}
                                                    className="h-12 border-gray-200 focus:border-purple-500"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="time" className="text-sm font-medium flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    Time
                                                </Label>
                                                <Input
                                                    id="time"
                                                    type="time"
                                                    value={formData.time}
                                                    onChange={(e) => handleInputChange("time", e.target.value)}
                                                    className="h-12 border-gray-200 focus:border-purple-500"
                                                />
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="space-y-2">
                                            <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                Location
                                            </Label>
                                            <Input
                                                id="location"
                                                placeholder="Enter event location"
                                                value={formData.location}
                                                onChange={(e) => handleInputChange("location", e.target.value)}
                                                className="h-12 border-gray-200 focus:border-purple-500"
                                            />
                                        </div>

                                        {/* Category */}
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Category</Label>
                                            <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                                                <SelectTrigger className="h-12 border-gray-200 focus:border-purple-500">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {categories.map((category) => (
                                                        <SelectItem key={category} value={category}>
                                                            {category}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Price and Max Attendees */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="price" className="text-sm font-medium flex items-center gap-2">
                                                    <DollarSign className="w-4 h-4" />
                                                    Price (USD)
                                                </Label>
                                                <Input
                                                    id="price"
                                                    placeholder="0 for free"
                                                    value={formData.price}
                                                    onChange={(e) => handleInputChange("price", e.target.value)}
                                                    className="h-12 border-gray-200 focus:border-purple-500"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="maxAttendees" className="text-sm font-medium flex items-center gap-2">
                                                    <Users className="w-4 h-4" />
                                                    Max Attendees
                                                </Label>
                                                <Input
                                                    id="maxAttendees"
                                                    type="number"
                                                    placeholder="Unlimited"
                                                    value={formData.maxAttendees}
                                                    onChange={(e) => handleInputChange("maxAttendees", e.target.value)}
                                                    className="h-12 border-gray-200 focus:border-purple-500"
                                                />
                                            </div>
                                        </div>

                                        {/* Image URL */}
                                        <div className="space-y-2">
                                            <Label htmlFor="image" className="text-sm font-medium flex items-center gap-2">
                                                <ImageIcon className="w-4 h-4" />
                                                Event Image URL
                                            </Label>
                                            <Input
                                                id="image"
                                                placeholder="https://example.com/image.jpg"
                                                value={formData.image}
                                                onChange={(e) => handleInputChange("image", e.target.value)}
                                                className="h-12 border-gray-200 focus:border-purple-500"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                type="submit"
                                                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg font-semibold"
                                            >
                                                Create Event
                                            </Button>
                                        </motion.div>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Preview */}
                        <motion.div variants={previewVariants} initial="hidden" animate="visible">
                            <Card className="shadow-xl border-0 sticky top-8">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        Event Preview
                                    </CardTitle>
                                    <CardDescription>See how your event will look</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Preview Image */}
                                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                            {formData.image ? (
                                                <img
                                                    src={formData.image || "/placeholder.svg"}
                                                    alt="Event preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                    <ImageIcon className="w-12 h-12" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Preview Content */}
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-bold text-gray-800">{formData.title || "Your Event Title"}</h3>

                                            <p className="text-gray-600">
                                                {formData.description || "Your event description will appear here..."}
                                            </p>

                                            {formData.date && (
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(formData.date).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                    {formData.time && ` at ${formData.time}`}
                                                </div>
                                            )}

                                            {formData.location && (
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <MapPin className="w-4 h-4" />
                                                    {formData.location}
                                                </div>
                                            )}

                                            {formData.price && (
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <DollarSign className="w-4 h-4" />
                                                    {formData.price === "0" ? "Free" : `$${formData.price}`}
                                                </div>
                                            )}

                                            {formData.maxAttendees && (
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Users className="w-4 h-4" />
                                                    Max {formData.maxAttendees} attendees
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}