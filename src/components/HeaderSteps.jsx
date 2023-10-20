const HeaderSteps = ({ selected, setSelected }) => {
  const stylesSelected = {
    selected: "bg-light-blue text-marine-blue font-bold",
  };

  return (
    <header>
      <ul className="relative flex list-none items-center  justify-center gap-7">
        <li>
          <div
            className={`flex h-[2rem] w-[2rem] items-center justify-center rounded-full border text-center text-[.9rem] ${
              selected === 1 ? stylesSelected.selected : "text-white"
            }`}
          >
            1
          </div>
        </li>
        <li>
          <div
            className={`flex h-[2rem] w-[2rem] items-center justify-center rounded-full border text-center text-[.9rem] ${
              selected === 2 ? stylesSelected.selected : "text-white"
            }`}
          >
            2
          </div>
        </li>
        <li>
          <div
            className={`flex h-[2rem] w-[2rem] items-center justify-center rounded-full border text-center text-[.9rem] ${
              selected === 3 ? stylesSelected.selected : "text-white"
            }`}
          >
            3
          </div>
        </li>
        <li>
          <div
            className={`flex h-[2rem] w-[2rem] items-center justify-center rounded-full border text-center text-[.9rem] ${
              selected === 4 ? stylesSelected.selected : "text-white"
            }`}
          >
            4
          </div>
        </li>
      </ul>
    </header>
  );
};

export default HeaderSteps;
