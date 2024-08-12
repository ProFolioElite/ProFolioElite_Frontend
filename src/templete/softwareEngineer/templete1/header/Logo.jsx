// import React from 'react';

function Logo({ logo }) {
  return (
    <img
      loading="lazy"
      src={logo ? logo : null}
      alt="Company Logo"
      className="object-contain shrink-0 self-stretch my-auto aspect-[2.57] w-[90px]"
    />
  );
}

export default Logo;
