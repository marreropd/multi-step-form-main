const HeaderSteps = ({ selected, setSelected }) => {
  const stylesSelected = {
    selected: "bg-light-blue text-marine-blue font-bold",
  };

  return (
    <header>
      <ul className="relative flex list-none items-center  justify-center gap-7">
        <li onClick={() => setSelected(1)}>
          <div
            className={` flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border text-center text-[.9rem] text-white ${
              selected === 1 ? stylesSelected.selected : ""
            }`}
          >
            1
          </div>
        </li>
        <li onClick={() => setSelected(2)}>
          <div
            className={`flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border text-center text-[.9rem] text-white ${
              selected === 2 ? stylesSelected.selected : ""
            }`}
          >
            2
          </div>
        </li>
        <li onClick={() => setSelected(3)}>
          <div
            className={`flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border text-center text-[.9rem] text-white ${
              selected === 3 ? stylesSelected.selected : ""
            }`}
          >
            3
          </div>
        </li>
        <li onClick={() => setSelected(4)}>
          <div
            className={`flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border text-center text-[.9rem] text-white ${
              selected === 4 ? stylesSelected.selected : ""
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
