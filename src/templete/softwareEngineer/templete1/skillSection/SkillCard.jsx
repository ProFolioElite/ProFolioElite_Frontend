// import React from 'react';

function SkillCard({ imageSrc, skillName }) {
  return (
    <div className="flex flex-col items-center w-[75px]">
      <img loading="lazy" src={imageSrc} alt={`${skillName} icon`} className="object-contain rounded-none aspect-square w-[75px]" />
      <div className="mt-1">{skillName}</div>
    </div>
  );
}

export default SkillCard;