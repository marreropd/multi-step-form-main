import AddOns from "../AddOns";

const ThirdStepForm = ({ formData, setFormData }) => {
  const selected = formData?.services;
  const handleOnClick = (e, service) => {
    e.stopPropagation();
    let arr = selected;
    if (arr.includes(service)) {
      arr = arr.filter(function (e) {
        return e !== service;
      });
      setFormData({ ...formData, services: arr });
    } else {
      arr.push(service);
      setFormData({ ...formData, services: arr });
    }
  };

  /* mock up data */
  const addOns = [
    {
      id: crypto.randomUUID(),
      name: "Online service",
      description: "Access to multiplayer games",
      priceYearly: "10/yr",
      priceMonthly: "1/mo",
      slug: "online-service",
    },

    {
      id: crypto.randomUUID(),
      name: "Larger  storage",
      description: "Extra 1TB of cloud save",
      priceYearly: "20/yr",
      priceMonthly: "2/mo",
      slug: "larger-storage",
    },

    {
      id: crypto.randomUUID(),
      name: "Customizable profile",
      description: "Custom theme on your profile",
      priceYearly: "20/yr",
      priceMonthly: "2/mo",
      slug: "customizable-profile",
    },
  ];

  return (
    <section className="flex flex-col content-center justify-center p-6 py-9 ">
      <div className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow">
        <h2 className="text-3xl font-medium text-marine-blue">Pick add-ons</h2>
        <p className="text-balance max-w-sm text-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>

        {addOns &&
          addOns.map((add) => {
            return (
              <AddOns
                key={add.id}
                id={add.id}
                name={add.name}
                description={add.description}
                price={
                  formData.charge === "monthly"
                    ? add.priceMonthly
                    : add.priceYearly
                }
                slug={add.slug}
                selected={selected}
                handleOnClick={handleOnClick}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ThirdStepForm;
