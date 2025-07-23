"use client";

import React from "react";
import { Search } from "lucide-react";

export default function HeroGlobe() {
    return (
        <section className="relative flex flex-col mt-16 items-center justify-center h-screen bg-gradient-to-br from-purple-800 via-blue-800 to-indigo-900 text-center text-white overflow-hidden">
            {/* Stars background (simple css effect) */}
            <div className="absolute inset-0 bg-[radial-gradient(white,transparent_2px)] bg-[size:2px_2px] opacity-30"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Find Events Near
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
                        You
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                    Discover amazing events happening around the world
                </p>

                {/* Search Box */}
                <div className="flex items-center bg-white/10 backdrop-blur-md rounded-lg p-2 max-w-xl mx-auto">
                    <Search className="text-gray-300 w-5 h-5 ml-2" />
                    <input
                        type="text"
                        placeholder="Search events, artists, or venues..."
                        className="flex-1 bg-transparent px-3 py-2 outline-none text-white placeholder-gray-300"
                    />
                    <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">
                        Search Events
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
        </section>
    );
}
