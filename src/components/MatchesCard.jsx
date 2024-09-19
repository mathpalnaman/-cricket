import PropTypes from 'prop-types';

export default function MatchesCard({ match }) {
  return (
    <div className="grid grid-cols-3 bg-gray-200 shadow-lg rounded-lg p-4 items-center m-5">
      <div className="flex justify-center">
        <img
          src={`/src/utilities/images/${match.team1.logo}.png`}
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
        <span className="block text-gray-500">{match.venue}</span> 
      </div>

      <div className="flex justify-center">
        <img
          src={`/src/utilities/images/${match.team2.logo}.png`}
          alt={match.team2.name}
          className="w-16 h-16 object-cover rounded-full"
        />
      </div>
    </div>
  );
}

MatchesCard.propTypes = {
  match: PropTypes.shape({
    team1: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired
    }).isRequired,
    team2: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    league: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired
  }).isRequired
};
