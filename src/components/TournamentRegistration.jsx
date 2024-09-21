import { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Stepper from "./Stepper";

export default function TournamentRegistration() {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track submission state
  const [formData, setFormData] = useState({
    tournamentName: "",
    city: "",
    stadium: "",
    organizerName: "",
    startDate: "",
    endDate: "",
    category: "",
    ballType: "",
    matchStyle: "",
    predefinedRules: [],
    customRules: "",
    banner: null, // Ensure banner is validated
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleButtonClick = (category) => {
    setFormData((prevData) => ({ ...prevData, category }));
  };

  const handleBallButtonClick = (ballType) => {
    setFormData((prevData) => ({ ...prevData, ballType }));
  };

  const handleMatchStyleClick = (matchStyle) => {
    setFormData((prevData) => ({ ...prevData, matchStyle }));
  };

  const handleCheckboxChange = (rule) => {
    setFormData((prevData) => {
      const rules = [...prevData.predefinedRules];
      if (rules.includes(rule)) {
        return { ...prevData, predefinedRules: rules.filter((r) => r !== rule) };
      } else {
        return { ...prevData, predefinedRules: [...rules, rule] };
      }
    });
  };

  const handleBannerUpload = (e) => {
    setFormData((prevData) => ({ ...prevData, banner: e.target.files[0] }));
  };

  // Helper function to show an alert if a field is empty
  const validateField = (fieldValue, fieldName) => {
    if (!fieldValue) {
      alert(`Please fill in the ${fieldName}`);
      return false;
    }
    return true;
  };

  // Validation for each step with individual field alerts
  const validateStep = () => {
    if (step === 1) {
      const { tournamentName, city, stadium } = formData;
      return (
        validateField(tournamentName, "Tournament Name") &&
        validateField(city, "City") &&
        validateField(stadium, "Stadium")
      );
    }

    if (step === 2) {
      const { organizerName, startDate, endDate } = formData;
      return (
        validateField(organizerName, "Organizer Name") &&
        validateField(startDate, "Start Date") &&
        validateField(endDate, "End Date")
      );
    }

    if (step === 3) {
      const { category, ballType, matchStyle, predefinedRules } = formData;
      return (
        validateField(category, "Category") &&
        validateField(ballType, "Ball Type") &&
        validateField(matchStyle, "Match Style") &&
        validateField(predefinedRules.length > 0, "At least one Predefined Rule")
      );
    }

    if (step === 4) {
      const { banner } = formData;
      return validateField(banner, "Banner (file upload)");
    }

    return true;
  };

  const nextStep = () => {
    // Validate before moving to the next step
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const submitForm = () => {
    // Validate the final step before submission
    if (validateStep()) {
      console.log("Form submitted:", formData);
      setFormSubmitted(true); // Set the form as submitted
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      {formSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank you for registering!</h2>
          <p>Your form has been successfully submitted.</p>
        </div>
      ) : (
        <>
          <Stepper step={step} />
          {step === 1 && <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />}
          {step === 2 && (
            <Step2
              formData={formData}
              handleButtonClick={handleButtonClick}
              handleBallButtonClick={handleBallButtonClick}
              handleMatchStyleClick={handleMatchStyleClick}
              activeButton={formData.category}
              activeBallButton={formData.ballType}
              activeMatchStyle={formData.matchStyle}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <Step3
              formData={formData}
              predefinedRulesOptions={["Rule 1", "Rule 2", "Rule 3"]}
              handleCheckboxChange={handleCheckboxChange}
              handleChange={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 4 && (
            <Step4
              formData={formData}
              handleBannerUpload={handleBannerUpload}
              prevStep={prevStep}
              submitForm={submitForm} // Submit form with validation
            />
          )}
        </>
      )}
    </div>
  );
}
