// import React from 'react';

function NavigationItem({ label, href, isActive }) {
  const baseClasses = "self-stretch my-auto";
  const activeClasses = isActive ? "flex gap-2 justify-center items-center text-red-500 whitespace-nowrap" : "";

  return (
    <a href={href} className={`${baseClasses} ${activeClasses}`}>
      {isActive && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3ce61f1d6e26ca02cde27cda1cb19f9f5c70523ef971e0ff8cc3d77f6d3b64b?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.14]"
        />
      )}
      {label}
    </a>
  );
}

export default NavigationItem;