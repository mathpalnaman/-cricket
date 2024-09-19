
export default function Step2({
  activeButton,
  activeBallButton,
  activeMatchStyle,
  handleButtonClick,
  handleBallButtonClick,
  handleMatchStyleClick,
  nextStep,
  prevStep,
}) {
  return (
    <div>
      <div className="mb-4">
        <label className="text-md font-medium mb-5">Tournament Category:</label>
        <div className="flex flex-wrap gap-4 mt-5 justify-center">
          {["Open", "Corporate", "Under 19", "Under 16", "Community", "School", "Box Cricket", "Series", "Others"].map(
            (category) => (
              <button
                key={category}
                onClick={() => handleButtonClick(category)}
                className={`box ${activeButton === category ? "active" : ""}`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-md font-medium mb-1">Ball Type:</label>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          <button
            onClick={() => handleBallButtonClick("Tennis")}
            className={`ball-type-button ${activeBallButton === "Tennis" ? "active" : ""}`}
          >
           <img src="src/utilities/images/tennis.png" alt="Tennis Ball" className="ball-image" />
          </button>
          

          <button
            onClick={() => handleBallButtonClick("Leather")}
            className={`ball-type-button ${activeBallButton === "Leather" ? "active" : ""}`}
          >
                     <img src="src/utilities/images/leather.png" alt="Tennis Ball" className="ball-image" />

          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-md font-medium mb-1">Match Style:</label>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          {["T10", "T20", "T30", "ODI", "Test"].map((matchStyle) => (
            <button
              key={matchStyle}
              onClick={() => handleMatchStyleClick(matchStyle)}
              className={`match-style-button ${activeMatchStyle === matchStyle ? "active" : ""}`}
            >
              {matchStyle}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
