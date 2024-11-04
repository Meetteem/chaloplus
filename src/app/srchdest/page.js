"use client";
import { useState } from "react";

export default function SearchDestination() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [eta, setEta] = useState(null);

    const distances = {
        "Delhi-Mumbai": 1400,
        "Delhi-Goa": 1800,
        "Mumbai-Pune": 150,
        "Mumbai-Goa": 600,
        "Bangalore-Mysore": 150,
        "Delhi-Agra": 220,
        "Agra-Goa": 1800,
        "Delhi-Bangalore": 2100,
        "Agra-Mysore": 1850,
        "Bangalore-Goa": 550,
        "Mumbai-Bangalore": 980,
        "Agra-Mumbai": 1275,
        "Pune-Goa": 450,
        "Agra-Pune": 1210,
        "Delhi-Pune": 1440,
        "Delhi-Mysore": 2200,
    };

    const calculateEta = () => {
        if (source && destination && source !== destination) {
            const key = `${source}-${destination}`;
            const reverseKey = `${destination}-${source}`;
            const distance = distances[key] || distances[reverseKey];

            if (distance) {
                const speed = 60; 
                const time = distance / speed;
                const hours = Math.floor(time);
                const minutes = Math.round((time - hours) * 60);
                setEta(`${hours} hours ${minutes} minutes`);
            } else {
                setEta("Distance information not available.");
            }
        } else {
            setEta("Please select valid locations.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateEta();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">Search by Destination</h1>

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

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        Calculate ETA
                    </button>
                </form>

                {eta && (
                    <div className="mt-8 text-lg font-medium text-gray-700">
                        <p>Estimated Time of Arrival (ETA): <span className="text-blue-600">{eta}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
}
