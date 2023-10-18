import ChargeToggle from "../ChargeToggle";
import { ArcadeIcon, AdvancedIcon, ProIcon } from "../Icons";

const SecondStepForm = ({ formData, setFormData, handleInputChange }) => {
  const selected = formData.plan;
  const selectedStyles = "border-purplish-blue bg-alabaster";

  return (
    <section className="flex flex-col content-center justify-center p-6 py-9">
      <div className="flex h-[100%] flex-col gap-3 rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-medium text-marine-blue">
          Select your Plan
        </h2>
        <p className="text-balance max-w-sm text-cool-gray">
          You have the option of monthly or yearly billing
        </p>

        <div
          className={`flex  cursor-pointer gap-3 rounded border p-3 font-bold hover:border-purplish-blue ${
            selected === "arcade" && selectedStyles
          }`}
          onClick={() => setFormData({ ...formData, plan: "arcade" })}
        >
          <ArcadeIcon />
          <p>
            Arcade
            <span className="block text-sm font-light">$9/mo</span>
          </p>
        </div>

        <div
          className={`flex cursor-pointer gap-3 rounded border p-3 font-bold hover:border-purplish-blue ${
            selected === "advanced" && selectedStyles
          }`}
          onClick={() => setFormData({ ...formData, plan: "advanced" })}
        >
          <AdvancedIcon />
          <p>
            Advanced
            <span className="block text-sm font-light">$12/mo</span>
          </p>
        </div>

        <div
          className={`flex cursor-pointer gap-3 rounded border p-3 font-bold hover:border-purplish-blue ${
            selected === "pro" && selectedStyles
          }`}
          onClick={() => setFormData({ ...formData, plan: "pro" })}
        >
          <ProIcon />
          <p>
            Pro
            <span className="block text-sm font-light">$15/mo</span>
          </p>
        </div>
        <ChargeToggle
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>
    </section>
  );
};

export default SecondStepForm;
