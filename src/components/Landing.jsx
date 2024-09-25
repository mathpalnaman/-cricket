import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MatchesCard from "./MatchesCard";
import Trending from "./Trending";
import { mockUpcomingMatches } from "../data/mockData";

export default function Landing() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(mockUpcomingMatches);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="h-screen relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/src/utilities/images/ball.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome text overlay */}
        <div className="relative z-10 flex justify-end items-center h-full">
          <h1 className="text-white text-6xl font-bold animate-pulse pr-16">
            Welcome to CricFolio
          </h1>
        </div>
      </div>

      {/* Matches Scrolling Section */}
      <div className="h-full py-12 overflow-x-scroll bg-black mx-auto scrollbar-hide">
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {matches.map((match, index) => (
            <button
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / matches.length}%` }}
            >
              <MatchesCard match={match} />
            </button>
          ))}
          {matches.map((match, index) => (
            <button
              key={index + matches.length}
              className="flex-shrink-0"
              style={{ width: `${100 / matches.length}%` }}
            >
              <MatchesCard match={match} />
            </button>
          ))}
        </motion.div>
      </div>

      {/* Trending Section */}
      <Trending />
    </div>
  );
}
