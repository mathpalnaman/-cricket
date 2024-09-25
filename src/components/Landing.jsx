import MatchesCard from "./MatchesCard";
import Trending from "./Trending";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { mockUpcomingMatches } from "../data/mockData";

export default function Landing() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(mockUpcomingMatches);

},[])

  return (
    <div className="w-full overflow-hidden">
    
      <div className="h-screen relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"

        >
<source src="/src/utilities/images/ball.mp4" type="video/mp4" />
Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          {/* <Navbar /> */}
          <div className="absolute left-8 top-1/3 transform translate-y-1/2 animate-slide-in">
        </div>
        </div>
      </div>

      <div className="h-full py-12 overflow-x-scroll mx-auto scrollbar-hide"  style={{ backgroundColor: '#e5e7ebc9' }}>
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
