// import React from 'react';

function SocialMediaIcon({ src, alt }) {
  return (
    <img loading="lazy" src={src} alt={alt} className="object-contain shrink-0 aspect-square w-[30px]" />
  );
}

export default SocialMediaIcon;