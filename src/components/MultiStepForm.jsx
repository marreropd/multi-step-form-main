import FirstStepForm from "./FirstStepForm";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  return (
    <section className="flex h-screen flex-col font-main-font">
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
      </div>
      <footer className="fixed bottom-0 flex h-[5rem] w-full items-center justify-end bg-white px-7 align-middle">
        <label
          for="submit-form-step-1"
          tabindex="0"
          className="rounded bg-marine-blue px-4 py-[.6rem] text-white"
        >
          Next Step
        </label>
      </footer>
      {/*       <p className="bg-marine-blue text-light-blue">hola</p> */}
    </section>
  );
};

export default MultiStepForm;
