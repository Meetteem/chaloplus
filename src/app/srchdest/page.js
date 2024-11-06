"use client";
import { useState } from "react";

export default function SearchDestination() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [eta, setEta] = useState(null);
    const [arrivalTime, setArrivalTime] = useState(null);
    const [nextBusTime, setNextBusTime] = useState(null); // New state for next bus time

    const busStopNames = {
        "HHGAT": "Heathrow Garage at Terminal",
        "MAPUT": "Massachusetts Avenue Putnam Square",
        "CNTSQ": "Central Square",
        "MELWA": "Melnea Cass Boulevard/Washington Street",
        "MIT": "Massachusetts Institute of Technology",
        "NUBN": "Nubian Square",
        "HYNES": "Hynes Convention Center",
        "MASTA": "Massachusetts Avenue Station",
        "WASMA": "Washington Street/Massachusetts Avenue"
    };

    const distances = {
        "HHGAT-MAPUT": 5,
        "HHGAT-CNTSQ": 10,
        "HHGAT-MELWA": 15,
        "HHGAT-MIT": 20,
        "HHGAT-NUBN": 25,
        "HHGAT-HYNES": 30,
        "HHGAT-MASTA": 35,
        "HHGAT-WASMA": 40,
        "MAPUT-CNTSQ": 5,
        "MAPUT-MELWA": 10,
        "MAPUT-MIT": 15,
        "MAPUT-NUBN": 20,
        "MAPUT-HYNES": 25,
        "MAPUT-MASTA": 30,
        "MAPUT-WASMA": 35,
        "CNTSQ-MELWA": 5,
        "CNTSQ-MIT": 10,
        "CNTSQ-NUBN": 15,
        "CNTSQ-HYNES": 20,
        "CNTSQ-MASTA": 25,
        "CNTSQ-WASMA": 30,
        "MELWA-MIT": 5,
        "MELWA-NUBN": 10,
        "MELWA-HYNES": 15,
        "MELWA-MASTA": 20,
        "MELWA-WASMA": 25,
        "MIT-NUBN": 5,
        "MIT-HYNES": 10,
        "MIT-MASTA": 15,
        "MIT-WASMA": 20,
        "NUBN-HYNES": 5,
        "NUBN-MASTA": 10,
        "NUBN-WASMA": 15,
        "HYNES-MASTA": 5,
        "HYNES-WASMA": 10,
        "MASTA-WASMA": 5,
    };

    const calculateEta = () => {
        if (source && destination && source !== destination) {
            const key = `${source}-${destination}`;
            const reverseKey = `${destination}-${source}`;
            const distance = distances[key] || distances[reverseKey];

            if (distance) {
                const speed = 33;
                const time = distance / speed;
                const hours = Math.floor(time);
                const minutes = Math.round((time - hours) * 60);
                setEta(`${hours} hours ${minutes} minutes`);

                // Generate a random time for the next bus (within the next hour)
                const now = new Date();
                const randomMinutes = Math.floor(Math.random() * 60); // Random minutes within the next hour
                now.setMinutes(now.getMinutes() + randomMinutes);
                const nextBus = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setNextBusTime(nextBus);

                // Calculate final arrival time by adding ETA to the next bus time
                now.setHours(now.getHours() + hours);
                now.setMinutes(now.getMinutes() + minutes);
                const arrival = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setArrivalTime(arrival);
            } else {
                setEta("Distance information not available.");
                setArrivalTime(null);
                setNextBusTime(null);
            }
        } else {
            setEta("Please select valid locations.");
            setArrivalTime(null);
            setNextBusTime(null);
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
                            {Object.keys(busStopNames).map((key) => (
                                <option key={key} value={key}>
                                    {key} - {busStopNames[key]}
                                </option>
                            ))}
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
                            {Object.keys(busStopNames).map((key) => (
                                <option key={key} value={key}>
                                    {key} - {busStopNames[key]}
                                </option>
                            ))}
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
                        <p>Next Bus at: <span className="text-blue-600">{nextBusTime}</span></p>
                        <p>Projected Journey Time: <span className="text-blue-600">{eta}</span></p>
                        {arrivalTime && (
                            <p>Arrival Time: <span className="text-blue-600">{arrivalTime}</span></p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
