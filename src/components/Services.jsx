import React from "react";

const Services = () => {
  return (
    <div className="services-container max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="service-item border p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Tournament Registration</h3>
          <p>
            Register for upcoming cricket tournaments easily through our platform.
            We provide a hassle-free process for organizers and participants.
          </p>
        </div>

        <div className="service-item border p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Live Match Scores</h3>
          <p>
            Get real-time updates on cricket matches, including live scores, commentary, and statistics.
          </p>
        </div>

        <div className="service-item border p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Cricket Analytics</h3>
          <p>
            Access in-depth analytics for player and team performances to help improve strategies and gameplay.
          </p>
        </div>

        <div className="service-item border p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">News & Updates</h3>
          <p>
            Stay updated with the latest cricket news, schedules, and upcoming tournaments from around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
