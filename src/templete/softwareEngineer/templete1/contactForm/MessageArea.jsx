// import React from "react";

function MessageArea({ label, id, name }) {
  return (
    <div className="mb-11 max-md:mb-10">
      <label htmlFor={id} className="sr-only">{label}</label>
      <textarea
        id={id}
        name={name}
        placeholder={label}
        className="w-full px-5 pt-3 pb-28 leading-7 bg-white rounded shadow-sm min-h-[158px] max-md:pb-24"
        aria-label={label}
      ></textarea>
    </div>
  );
}

export default MessageArea;