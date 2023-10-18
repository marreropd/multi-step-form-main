const ThirdStepForm = ({ formData, setFormData }) => {
  const selected = formData?.services;
  const selectedStyles = "border-purplish-blue bg-alabaster";

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

  return (
    <section className="flex flex-col content-center justify-center p-6 py-9 ">
      <div className="flex h-[100%] flex-col gap-3 rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-medium text-marine-blue">Pick add-ons</h2>
        <p className="text-balance max-w-sm text-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>

        <label
          htmlFor="online-service"
          className={`flex  cursor-pointer gap-3 rounded border p-3 font-bold hover:border-purplish-blue ${
            selected?.includes("online-service") && selectedStyles
          }`}
        >
          <input
            name="online-service"
            id="online-service"
            type="checkbox"
            defaultChecked={selected?.includes("online-service")}
            onClick={(e) => handleOnClick(e, "online-service")}
          />
          <p>
            Online service
            <span className="block text-sm font-light">
              Access to multiplayer games
            </span>
          </p>
        </label>

        <label
          htmlFor="larger-storage"
          className={`flex cursor-pointer gap-3 rounded border p-3 font-bold hover:border-purplish-blue ${
            selected?.includes("larger-storage") && selectedStyles
          }`}
        >
          <input
            name="larger-storage"
            id="larger-storage"
            type="checkbox"
            defaultChecked={selected?.includes("larger-storage")}
            onClick={(e) => handleOnClick(e, "larger-storage")}
          />
          <p>
            Larger storage
            <span className="block text-sm font-light">
              Extra 1TB of cloud save
            </span>
          </p>
        </label>

        <label
          htmlFor="customizable-profile"
          className={`flex cursor-pointer gap-3 rounded border p-3 font-bold hover:border-purplish-blue ${
            selected?.includes("customizable-profile") && selectedStyles
          }`}
        >
          <input
            name="customizable-profile"
            id="customizable-profile"
            type="checkbox"
            defaultChecked={selected?.includes("customizable-profile")}
            onClick={(e) => handleOnClick(e, "customizable-profile")}
          />
          <p>
            Customizable profile
            <span className="block text-sm font-light">
              Custom theme on your profile
            </span>
          </p>
        </label>
      </div>
    </section>
  );
};

export default ThirdStepForm;
