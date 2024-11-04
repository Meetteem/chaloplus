import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <section className="container mx-auto text-center py-16 bg-blue-600 text-white rounded-lg shadow-lg mb-8">
                <h1 className="text-5xl font-bold mb-4">Welcome to Chalo Plus</h1>
                <p className="text-lg mb-8">
                    Discover the best routes, explore new destinations, and plan your journey with ease!
                </p>
                <Link href="/srcdest">
                    <div className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
                        Start Your Journey
                    </div>
                </Link>
            </section>
            <section className="container mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Popular Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DestinationCard destination="New Delhi" description="Explore the capital city with its rich history and vibrant culture." />
                    <DestinationCard destination="Mumbai" description="Experience the bustling city life and scenic coastal views." />
                    <DestinationCard destination="Goa" description="Relax on beautiful beaches and enjoy a lively nightlife." />
                </div>
            </section>
            <section className="container mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Featured Routes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <RouteCard route="Delhi to Agra" description="The quickest path to the iconic Taj Mahal." />
                    <RouteCard route="Mumbai to Pune" description="A scenic route through the Western Ghats." />
                    <RouteCard route="Bangalore to Mysore" description="A journey through Karnataka’s cultural heart." />
                </div>
            </section>

            <section className="container mx-auto text-center py-16 bg-blue-600 text-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-4">Ready to explore?</h2>
                <p className="text-lg mb-8">
                    Start by searching your destination or source and plan your journey effortlessly.
                </p>
                <div className="space-x-4">
                    <Link href="/srchdest">
                        <div className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
                            Search by Destination
                        </div>
                    </Link>
                    <Link href="/srchsrc">
                        <div className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
                            Search by Source
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

function DestinationCard({ destination, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">{destination}</h3>
            <p className="mt-4 text-gray-600">{description}</p>
        </div>
    );
}

function RouteCard({ route, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">{route}</h3>
            <p className="mt-4 text-gray-600">{description}</p>
        </div>
    );
}
