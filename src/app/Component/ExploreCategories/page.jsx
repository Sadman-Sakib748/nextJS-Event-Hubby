"use client";

import { Music, Laptop, Coffee, Briefcase, Palette } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Music",
        icon: Music,
        events: 1250,
        progress: 70,
        color: "from-pink-500 to-pink-400",
    },
    {
        id: 2,
        name: "Technology",
        icon: Laptop,
        events: 890,
        progress: 55,
        color: "from-blue-400 to-cyan-400",
    },
    {
        id: 3,
        name: "Food & Drink",
        icon: Coffee,
        events: 650,
        progress: 60,
        color: "from-orange-500 to-orange-400",
    },
    {
        id: 4,
        name: "Business",
        icon: Briefcase,
        events: 420,
        progress: 50,
        color: "from-green-500 to-green-400",
    },
    {
        id: 5,
        name: "Arts & Culture",
        icon: Palette,
        events: 300,
        progress: 45,
        color: "from-purple-500 to-purple-400",
    },
];

import React from 'react'

export default function ExploreCategories() {
    return (
        <div>
            <section className="bg-gradient-to-b  from-indigo-900 via-indigo-800 to-indigo-700 py-16 px-6 text-white text-center">
                <h2 className="text-4xl font-extrabold mb-2">Explore Categories</h2>
                <p className="text-gray-300 mb-12 text-sm md:text-base">
                    Find events that match your interests
                </p>

                <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                    {categories.map(({ id, name, icon: Icon, events, progress, color }) => (
                        <div
                            key={id}
                            className="bg-indigo-800 bg-opacity-30 rounded-lg p-6 w-48 sm:w-52 backdrop-blur-sm shadow-lg flex flex-col items-start"
                        >
                            <div
                                className={`p-3 rounded-md mb-4 bg-gradient-to-br ${color} shadow-lg`}
                            >
                                <Icon className="w-7 h-7 text-white" />
                            </div>

                            <div className="flex justify-between items-center w-full mb-2">
                                <h3 className="font-semibold text-lg">{name}</h3>
                                <span className="text-sm text-gray-300 font-medium">{events}</span>
                            </div>

                            <span className="text-xs text-gray-300 mb-2">events</span>

                            <div className="w-full bg-indigo-600 rounded-full h-2 overflow-hidden">
                                <div
                                    className={`h-2 rounded-full bg-gradient-to-r ${color}`}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            );
        </div>
    )
}

