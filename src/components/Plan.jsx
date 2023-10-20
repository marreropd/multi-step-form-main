const Plan = ({
  name,
  priceMonthly,
  priceYearly,
  icon,
  formData,
  setFormData,
}) => {
  const selected = formData.plan;
  const selectedStyles = "border-purplish-blue bg-alabaster";

  return (
    <div
      className={`flex  cursor-pointer gap-3 rounded border p-3 font-bold hover:border-purplish-blue ${
        selected === name.toLowerCase() && selectedStyles
      }`}
      onClick={() => setFormData({ ...formData, plan: name.toLowerCase() })}
    >
      {icon()}
      <p>
        {name}
        <span className="block text-sm font-light">
          ${formData?.charge === "monthly" ? priceMonthly : priceYearly}
        </span>
      </p>
    </div>
  );
};

export default Plan;
