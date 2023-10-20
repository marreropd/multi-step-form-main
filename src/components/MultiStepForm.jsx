import { useState } from "react";
import FirstStepForm from "./steps/FirstStepForm";
import HeaderSteps from "./HeaderSteps";
import SecondStepForm from "./steps/SecondStepForm";
import ThirdStepForm from "./steps/ThirdStepForm";
import FourthStepForm from "./steps/FourthStepForm";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  const [selected, setSelected] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    charge: "monthly",
    services: [],
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    // monthtly

    name === "charge" && formData.charge === "monthly" && (value = "yearly");
    name === "charge" && formData.charge === "yearly" && (value = "monthly");

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="flex h-screen flex-col font-main-font">
      <div className="h-[10.75rem] w-[100%] bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat py-10">
        <HeaderSteps selected={selected} setSelected={setSelected} />
        {selected === 1 && (
          <FirstStepForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {selected === 2 && (
          <SecondStepForm
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
          />
        )}
        {selected === 3 && (
          <ThirdStepForm
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
          />
        )}
        {selected === 4 && (
          <FourthStepForm
            formData={formData}
            setFormData={setFormData}
            setSelected={setSelected}
          />
        )}
      </div>
      <footer className="fixed bottom-0 flex h-[5rem] w-full items-center justify-between bg-white px-7">
        {selected !== 1 ? (
          <span
            className="cursor-pointer text-cool-gray"
            onClick={() => setSelected(selected !== 1 ? selected - 1 : 1)}
          >
            Go Back
          </span>
        ) : (
          <>
            <span></span>
          </>
        )}
        {(!formData.plan && selected === 2) ||
        ((!formData.name || !formData.email || !formData.phone) &&
          selected === 1) ||
        (formData.services.length === 0 && selected === 3) ? (
          <p className="text-sm text-light-gray">
            Complete the fields to continue
          </p>
        ) : (
          <span
            onClick={() => setSelected(selected !== 4 ? selected + 1 : 4)}
            htmlFor="submit-form-step-1"
            tabIndex="0"
            className={`${
              selected !== 4 ? "bg-marine-blue" : "bg-purplish-blue"
            } w-[7rem] cursor-pointer justify-self-end rounded  py-[.6rem] text-center text-white `}
          >
            {selected !== 4 ? "Next Step" : "Confirm"}
          </span>
        )}
      </footer>
    </section>
  );
};

export default MultiStepForm;
