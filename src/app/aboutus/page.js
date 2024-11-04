// pages/about.js
export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
                
                {/* Mission Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                    <p className="mt-4 text-gray-600">
                        At Chalo Plus, our mission is to make travel planning effortless, enjoyable, and personalized for everyone. We aim to connect travelers with the best routes and destinations tailored to their unique preferences.
                    </p>
                </section>

                {/* Vision Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
                    <p className="mt-4 text-gray-600">
                        We envision a world where exploring new destinations and finding the best travel routes are just a few clicks away. Chalo Plus aspires to be a trusted partner for travelers seeking both convenience and adventure.
                    </p>
                </section>

                {/* Services Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
                    <p className="mt-4 text-gray-600">
                        Our platform provides comprehensive tools to search by destination and source, making travel route planning seamless and customized. With Chalo Plus, you can easily find the best options based on your preferred starting point and destination.
                    </p>
                </section>

                {/* Team Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
                    <p className="mt-4 text-gray-600">
                        Our dedicated team of travel enthusiasts and tech experts works tirelessly to improve the travel experience for users everywhere. We’re passionate about helping people discover new places and connecting them with the best possible routes.
                    </p>
                </section>
            </div>
        </div>
    );
}
