import "./MultiStepForm.css";
("/assets/images/bg-sidebar-mobile.svg");
const MultiStepForm = () => {
  return (
    <section className="font-main-font h-screen m-0 p-0">
      <div className="py-10 w-[100%] h-[10.75rem] bg-cover bg-no-repeat bg-center bg-[url('/assets/images/bg-sidebar-mobile.svg')]">
        <header>
          <ul className="list-none gap-7 flex justify-center  items-center relative">
            <li>
              <div className="text-xs hover:bg-sky-700 text-white border flex items-center justify-center rounded-full text-center h-[1.5rem] w-[1.5rem]">
                1
              </div>
            </li>
            <li>
              <div className="text-xs text-white border flex items-center justify-center rounded-full text-center h-[1.5rem] w-[1.5rem]">
                2
              </div>
            </li>
            <li>
              <div className="text-xs text-white border flex items-center justify-center rounded-full text-center h-[1.5rem] w-[1.5rem]">
                2
              </div>
            </li>
            <li>
              <div className="text-xs text-white border flex items-center justify-center rounded-full text-center h-[1.5rem] w-[1.5rem]">
                4
              </div>
            </li>
          </ul>
        </header>
        <section className="p-6 py-9 flex flex-col content-center justify-center">
          <div className="bg-black h-[20rem] rounded-xl"></div>
        </section>
      </div>

      {/*       <p className="bg-marine-blue text-light-blue">hola</p> */}
    </section>
  );
};

export default MultiStepForm;
