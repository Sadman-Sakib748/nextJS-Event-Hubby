import React from "react";

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "August 12, 2025",
    location: "Dhaka, Bangladesh",
    image: "https://source.unsplash.com/400x250/?concert",
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    date: "September 5, 2025",
    location: "Chittagong, Bangladesh",
    image: "https://source.unsplash.com/400x250/?technology",
  },
  {
    id: 3,
    title: "Food Carnival",
    date: "August 30, 2025",
    location: "Sylhet, Bangladesh",
    image: "https://source.unsplash.com/400x250/?food",
  },
];

export default function FeaturedEvents() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">🎉 Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-500 mb-4">{event.location}</p>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
