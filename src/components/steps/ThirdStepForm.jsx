const ThirdStepForm = ({ formData, handleInputChange }) => {
  return (
    <section className="flex flex-col content-center justify-center p-6 py-9 ">
      <div className="flex h-[100%] flex-col gap-3 rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-medium text-marine-blue">Pick add-ons</h2>
        <p className="text-balance max-w-sm ">
          Please provide your name, email, adress, and phone number.
        </p>

        <div className="flex flex-col font-medium ">
          <label htmlFor="name" className="block text-[.9rem] text-marine-blue">
            Name
          </label>
          <input
            className="rounded border py-2 pl-4 text-[.9rem]"
            type="text"
            name="name"
            id="name"
            placeholder="e.g Stephen King"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label
            htmlFor="email"
            className="mt-3 block text-[.9rem] text-marine-blue"
          >
            Email Address
          </label>
          <input
            className="rounded border py-2 pl-4"
            type="text"
            name="email"
            id="email"
            placeholder="e.g sephenking@lorem.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label
            htmlFor="phone"
            className="mt-3 block text-[.9rem] text-marine-blue"
          >
            Phone Number
          </label>
          <input
            className="rounded border py-2 pl-4"
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g +1 234 567 890"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdStepForm;
