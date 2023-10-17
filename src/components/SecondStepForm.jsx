const SecondStepForm = () => {
  return (
    <section className="flex flex-col content-center justify-center p-6 py-9 ">
      <div className="flex h-[100%] flex-col gap-3 rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-medium text-marine-blue">
          Select your Plan
        </h2>
        <p className="text-balance max-w-sm">
          You have the option of monthly or yearly billing
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
            required
          />

          <label
            htmlFor="name"
            className="mt-3 block text-[.9rem] text-marine-blue"
          >
            Email Address
          </label>
          <input
            className="rounded border py-2 pl-4"
            type="text"
            name="name"
            id="name"
            placeholder="e.g sephenking@lorem.com"
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
            required
          />
        </div>
      </div>
    </section>
  );
};

export default SecondStepForm;
