const AddOns = ({
  id,
  slug,
  description,
  price,
  selected,
  handleOnClick,
  name,
}) => {
  const selectedStyles = "border-purplish-blue bg-alabaster";
  return (
    <label
      key={id}
      htmlFor={`${id}`}
      className={`flex cursor-pointer justify-between gap-2 rounded border p-2 font-bold hover:border-purplish-blue ${
        selected?.includes(slug) && selectedStyles
      }`}
      onClick={(e) => handleOnClick(e, slug)}
    >
      <div className="flex gap-2">
        <input
          name={slug}
          id={id}
          type="checkbox"
          defaultChecked={selected?.includes(slug)}
        />
        <p>
          {name}
          <span className="block text-sm font-light">{description}</span>
        </p>
      </div>
      <p className="self-center px-1 font-thin text-purplish-blue">{`+$${price}`}</p>
    </label>
  );
};

export default AddOns;
