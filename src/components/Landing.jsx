import { useState, useEffect } from "react";
import MatchesCard from "./MatchesCard";
import Navbar from "./Navbar";

export default function Landing() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const mockMatches = [
      {
        date: "2024-09-18",
        team1: { name: "Team A", image: "path/to/team1.jpg" },
        team2: { name: "Team B", image: "path/to/team2.jpg" },
        league: "Premier League",
        location: "Stadium X",
      },
      {
        date: "2024-09-19",
        team1: { name: "Team C", image: "path/to/team3.jpg" },
        team2: { name: "Team D", image: "path/to/team4.jpg" },
        league: "Champions League",
        location: "Stadium Y",
      },
    ];

    setMatches(mockMatches);
  }, []);

  return (
    <div className="w-full">
      <div className="h-screen bg-cricket bg-cover bg-center relative">
        <Navbar />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>

      <div className="bg-gray-100 py-10">
        {matches.map((match, index) => (
          <MatchesCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
}
