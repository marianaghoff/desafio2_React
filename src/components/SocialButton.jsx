import React from 'react';

const SocialButton = ({ icons }) => {
  return (
    <div>
      {icons.map((icon, index) => (
        <button key={index}>
          <i className={`fab ${icon}`}></i>
        </button>
      ))}
    </div>
  );
};

export default SocialButton;
