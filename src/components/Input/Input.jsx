import React, { useId } from "react";

const Input = (props) => {
  const { type, name, value, onChange } = props;
  const id = useId;
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
