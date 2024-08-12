// import React from 'react';

import { useMemo } from "react";
import { Link } from "react-router-dom";

function SocialMediaIcon({ src, alt, link }) {
    // useMemo()
  return (
    <Link to={link}>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain shrink-0 aspect-square w-[30px]"
      />
    </Link>
  );
}

export default SocialMediaIcon;
