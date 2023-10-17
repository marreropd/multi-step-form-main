import FirstStepForm from "./FirstStepForm";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  return (
    <section className="h-screen font-main-font">
      <div className="h-[10.75rem] w-[100%] bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat py-10">
        <header>
          <ul className="relative flex list-none items-center  justify-center gap-7">
            <li>
              <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full border text-center text-xs text-white hover:bg-sky-700">
                1
              </div>
            </li>
            <li>
              <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full border text-center text-xs text-white">
                2
              </div>
            </li>
            <li>
              <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full border text-center text-xs text-white">
                2
              </div>
            </li>
            <li>
              <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full border text-center text-xs text-white">
                4
              </div>
            </li>
          </ul>
        </header>
        <FirstStepForm />
        {/*   <label for="submit-form-step-1" tabindex="0">
          Next Step
        </label> */}
      </div>

      {/*       <p className="bg-marine-blue text-light-blue">hola</p> */}
    </section>
  );
};

export default MultiStepForm;
