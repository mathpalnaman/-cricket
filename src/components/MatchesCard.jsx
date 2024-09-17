export default function MatchesCard({ match }) {
    return (
      <div className="grid grid-cols-3 bg-white shadow-lg rounded-lg p-4 items-center gap-4 mb-4">
        <div className="flex justify-center">
          <img
            src={match.team1.image}
            alt={match.team1.name}
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
  
        <div className="text-center space-y-2">
          <span className="block text-gray-600 font-semibold">
            Date: {match.date}
          </span>
          <span className="block text-lg font-bold">
            {match.team1.name} vs {match.team2.name}
          </span>
          <span className="block text-gray-500">{match.league}</span>
          <span className="block text-gray-500">{match.location}</span>
        </div>
  
        <div className="flex justify-center">
          <img
            src={match.team2.image}
            alt={match.team2.name}
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
      </div>
    );
  }
  