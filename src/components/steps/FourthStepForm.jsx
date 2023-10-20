import transformData from "../../utils/transformData";

const FourthStepForm = ({ formData, setSelected }) => {
  const {
    plan,
    charge,
    planPrice,
    chargeShort,
    services: getServices,
    total,
  } = transformData(formData);
  const services = getServices();

  return (
    <section className="flex flex-col content-center justify-center p-6 py-9">
      <div className="flex h-[100%] flex-col gap-3 rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-medium text-marine-blue">Finishing up</h2>
        <p className="text-balance max-w-sm text-cool-gray">
          Double-check everything looks OK before confirming.
        </p>

        <div className="rounded-md bg-alabaster p-4">
          <div className="flex justify-between border-b-2 pb-5">
            <div>
              <p className="font-bold text-marine-blue">
                {plan} ({charge})
              </p>
              <span
                className="cursor-pointer text-cool-gray underline"
                onClick={() => setSelected(2)}
              >
                Change
              </span>
            </div>
            <span className="self-center font-bold">
              ${planPrice}/{chargeShort}
            </span>
          </div>
          <div className=" py-3 text-cool-gray">
            {services.map((service) => {
              return (
                <div
                  className="flex justify-between text-sm"
                  key={() => crypto.randomUUID()}
                >
                  <p className="py-2"> {service.title}</p>
                  <span className="self-center text-marine-blue">
                    +{service.price}/{chargeShort}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between px-4 py-3  text-cool-gray">
          Total (per {chargeShort === "mo" ? "month" : "year"})
          <span className="font-bold text-purplish-blue">
            +${total}/{chargeShort}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FourthStepForm;
