import { useState } from "react";
import FirstStepForm from "./steps/FirstStepForm";
import HeaderSteps from "./HeaderSteps";
import SecondStepForm from "./steps/SecondStepForm";
import ThirdStepForm from "./steps/ThirdStepForm";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  const [selected, setSelected] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    charge: "monthly",
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    // monthtly

    name === "charge" && formData.charge === "monthly" && (value = "yearly");

    name === "charge" && formData.charge === "yearly" && (value = "monthly");

    setFormData({ ...formData, [name]: value });
    console.log(formData);
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
            handleInputChange={handleInputChange}
          />
        )}
        {selected === 4 && (
          <FirstStepForm
            formData={formData}
            handleInputChange={handleInputChange}
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
        <span
          onClick={() => setSelected(selected !== 4 ? selected + 1 : 4)}
          htmlFor="submit-form-step-1"
          tabIndex="0"
          className="cursor-pointer justify-self-end rounded bg-marine-blue px-4 py-[.6rem] text-white "
        >
          Next Step
        </span>
      </footer>
    </section>
  );
};

export default MultiStepForm;
