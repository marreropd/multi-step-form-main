const ChargeToggle = ({ formData, handleInputChange }) => {
  return (
    <label
      className="inline-block rounded-md bg-alabaster p-4 pl-[0.15rem] hover:cursor-pointer"
      htmlFor="flexSwitchCheckDefault"
    >
      <div className="flex justify-evenly">
        <span
          className={`font-bold ${
            formData.charge === "monthly"
              ? "text-marine-blue"
              : "text-cool-gray"
          }`}
        >
          Monthly
        </span>
        <span>
          <label
            class="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="flexSwitchCheckDefault"
          ></label>
          <input
            className="checked:bg-primary checked:after:bg-primary checked:focus:border-primary checked:focus:bg-primary 
              dark:checked:bg-primary dark:checked:after:bg-primary mr-2 mt-[0.1rem] h-4 w-8 
              appearance-none rounded-[0.4375rem] 
              bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] 
              after:-mt-[0.1px] after:h-4 after:w-4 after:rounded-full 
              after:border-none after:bg-white
              after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
              after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
              checked:after:absolute checked:after:z-[2] checked:after:-mt-[0.1px] checked:after:ml-[1.0625rem] 
              checked:after:h-4 checked:after:w-4 checked:after:rounded-full checked:after:border-none 
              checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] 
              hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 
              focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] 
              focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute 
              focus:after:z-[1] focus:after:block focus:after:h-4 focus:after:w-4
              focus:after:rounded-full focus:after:content-[''] 
              checked:focus:before:ml-[1.1rem] 
              checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] 
              checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
              dark:bg-marine-blue dark:after:bg-neutral-50 
              dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] 
              dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            name="charge"
            /*  value={formData.charge} */
            onClick={handleInputChange}
            defaultChecked={formData.charge !== "monthly"}
          />
        </span>
        <span
          className={`font-bold ${
            formData.charge === "yearly" ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Yearly
        </span>
      </div>
    </label>
  );
};

export default ChargeToggle;
