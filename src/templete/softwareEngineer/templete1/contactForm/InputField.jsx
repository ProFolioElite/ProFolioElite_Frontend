// import React from "react";

function InputField({ label, type, id, name }) {
  return (
    <div className="mb-11 max-md:mb-10">
      <label htmlFor={id} className="sr-only">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={label}
        className="w-full px-5 py-3 leading-7 bg-white rounded shadow-sm"
        aria-label={label}
      />
    </div>
  );
}

export default InputField;