// import React from 'react';

function ProfileImage({image}) {
  return (
    <img 
    //   loading="lazy" 
     src={image}
    //   src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c2a771af414685d4f49f8591e55bf7b0d72ca1ccdaa3ea5548258a5195941a6?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721" 
      className="object-contain self-stretch my-auto aspect-[0.83] min-w-[240px] w-[411px]" 
      alt="profilePics"
    />
  );
}

export default ProfileImage;