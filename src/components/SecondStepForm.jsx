import { useState } from "react";

const SecondStepForm = ({ formData, setFormData }) => {
  const selected = formData.plan;
  const selectedStyles = "border-purplish-blue bg-alabaster";

  return (
    <section className="flex flex-col content-center justify-center p-6 py-9">
      <div className="flex h-[100%] flex-col gap-3 rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-medium text-marine-blue">
          Select your Plan
        </h2>
        <p className="text-balance max-w-sm">
          You have the option of monthly or yearly billing
        </p>

        <div
          className={`flex  cursor-pointer gap-3 rounded border p-3 font-bold hover:border-purplish-blue ${
            selected === "arcade" && selectedStyles
          }`}
          onClick={() => setFormData({ ...formData, plan: "arcade" })}
        >
          <img src="/assets/images/icon-arcade.svg" alt="Arcade logo" />
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
          <img src="/assets/images/icon-advanced.svg" alt="Advanced logo" />
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
          <img src="/assets/images/icon-pro.svg" alt="Pro logo" />
          <p>
            Pro
            <span className="block text-sm font-light">$15/mo</span>
          </p>
        </div>

        <div className="flex justify-evenly">
          <span>Monthly</span>
          <span>ooo</span>
          <span>Yearly</span>
        </div>
      </div>
    </section>
  );
};

export default SecondStepForm;
