import { div } from "framer-motion/client";
import React from "react";

const Services = () => {
  return (
    <div className="bg-register h-screen w-full bg-cover">
      <div className="services-container text-black max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
        <div className="service-item border p-4 rounded shadow">
          <h3 className="text-3xl font-extrabold mb-2">Tournament Registration</h3>
          <p className="text-2xl font-bold">
            Register for upcoming cricket tournaments easily through our platform.
            We provide a hassle-free process for organizers and participants.
          </p>
        </div>

        <div className="service-item border p-4 rounded shadow">
          <h3 className="text-3xl font-extrabold mb-2">Live Match Scores</h3>
          <p className="text-2xl font-bold">
            Get real-time updates on cricket matches, including live scores, commentary, and statistics.
          </p>
        </div>

        <div className="service-item border p-4 rounded shadow">
          <h3 className="text-3xl font-extrabold mb-2">Cricket Analytics</h3>
          <p className="text-2xl font-bold">
            Access in-depth analytics for player and team performances to help improve strategies and gameplay.
          </p>
        </div>

        <div className="service-item border p-4 rounded shadow">
          <h3 className="text-3xl font-extrabold mb-2">News & Updates</h3>
          <p className="text-2xl font-bold">
          Stay updated with the latest cricket news, schedules, and upcoming tournaments from around the world.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
