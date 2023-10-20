import ChargeToggle from "../ChargeToggle";
import { ArcadeIcon, AdvancedIcon, ProIcon } from "../Icons";
import Plan from "../Plan";

const SecondStepForm = ({ formData, setFormData, handleInputChange }) => {
  const plans = [
    {
      id: crypto.randomUUID(),
      name: "Arcade",
      icon: () => <ArcadeIcon />,
      priceYearly: "90/yr",
      priceMonthly: "9/mo",
    },
    {
      id: crypto.randomUUID(),
      name: "Advanced",
      icon: () => <AdvancedIcon />,
      priceYearly: "120/yr",
      priceMonthly: "12/mo",
    },
    {
      id: crypto.randomUUID(),
      name: "Pro",
      icon: () => <ProIcon />,
      priceYearly: "150/yr",
      priceMonthly: "15/mo",
    },
  ];

  return (
    <section className="flex flex-col content-center justify-center p-6 py-9">
      <div className="flex h-[100%] flex-col gap-3 rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-medium text-marine-blue">
          Select your Plan
        </h2>
        <p className="text-balance max-w-sm text-cool-gray">
          You have the option of monthly or yearly billing
        </p>
        {plans &&
          plans.map((plan) => {
            return (
              <Plan
                name={plan.name}
                icon={plan.icon}
                priceMonthly={plan.priceMonthly}
                priceYearly={plan.priceYearly}
                formData={formData}
                setFormData={setFormData}
                key={plan.id}
              />
            );
          })}

        <ChargeToggle
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>
    </section>
  );
};

export default SecondStepForm;
