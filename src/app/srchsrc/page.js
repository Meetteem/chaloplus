"use client";
import { useState } from "react";

export default function SearchSource() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [departureTime, setDepartureTime] = useState(null);

    const distances = {
        "Delhi-Mumbai": 1400,
        "Delhi-Goa": 1800,
        "Mumbai-Pune": 150,
        "Mumbai-Goa": 600,
        "Bangalore-Mysore": 150,
        "Delhi-Agra": 220,
        "Delhi-Bangalore": 2150,
        "Goa-Mysore": 650,
    };

    const calculateDepartureTime = () => {
        if (source && destination && source !== destination && arrivalTime) {
            const key = `${source}-${destination}`;
            const reverseKey = `${destination}-${source}`;
            const distance = distances[key] || distances[reverseKey];

            if (distance) {
                const speed = 60; 
                const timeInHours = distance / speed;

                const [arrivalHours, arrivalMinutes] = arrivalTime.split(":").map(Number);
                const arrivalDate = new Date();
                arrivalDate.setHours(arrivalHours, arrivalMinutes, 0, 0);

                const departureDate = new Date(arrivalDate.getTime() - timeInHours * 60 * 60 * 1000);
                const departureHours = departureDate.getHours().toString().padStart(2, "0");
                const departureMinutes = departureDate.getMinutes().toString().padStart(2, "0");

                setDepartureTime(`${departureHours}:${departureMinutes}`);
            } else {
                setDepartureTime("Distance information not available.");
            }
        } else {
            setDepartureTime("Please fill out all fields correctly.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateDepartureTime();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">Search by Source</h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Select Source
                        </label>
                        <select
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        >
                            <option value="">--Select Source--</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Goa">Goa</option>
                            <option value="Pune">Pune</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mysore">Mysore</option>
                            <option value="Agra">Agra</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Select Destination
                        </label>
                        <select
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        >
                            <option value="">--Select Destination--</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Goa">Goa</option>
                            <option value="Pune">Pune</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mysore">Mysore</option>
                            <option value="Agra">Agra</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Desired Arrival Time
                        </label>
                        <input
                            type="time"
                            value={arrivalTime}
                            onChange={(e) => setArrivalTime(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        Calculate Departure Time
                    </button>
                </form>

                {departureTime && (
                    <div className="mt-8 text-lg font-medium text-gray-700">
                        <p>Required Departure Time: <span className="text-blue-600">{departureTime}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
}
