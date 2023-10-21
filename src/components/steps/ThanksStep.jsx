import ThanksIcon from "../Icons/ThanksIcon";

const ThanksStep = () => {
  return (
    <section className="flex flex-col   p-6 py-9 ">
      <div className="flex h-[100%] flex-col items-center justify-center gap-3 rounded-xl bg-white px-4 py-20 text-center shadow">
        <ThanksIcon />
        <h2 className="text-3xl font-medium text-marine-blue">Thank you!</h2>
        <p className="  text-cool-gray">
          Thanks fot confirming your subscription! Wehope you have fun using our
          platform. If ypu ever need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default ThanksStep;
