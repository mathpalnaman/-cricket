import  { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

import Stepper from "./Stepper";
export default function TournamentRegistration() {
  const [step, setStep] = useState(1);
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
    banner: null,
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

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const submitForm = () => {
    console.log("Form submitted:", formData);
  
    alert("Thank you for registering!");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
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
         submitForm={submitForm}
       />
      )}
     
    </div>
  );
}
