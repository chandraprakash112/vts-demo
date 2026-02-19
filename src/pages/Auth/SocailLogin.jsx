import React from 'react';

export default function SocailLogin() {
  // Small helper for social buttons to keep code clean
const SocialButton = ({ icon, label, className = '' }) => (
  <button className="bg-white p-3 r-circle shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group">
    <img src={icon} className={`h-6 w-6 object-contain ${className}`} alt={label} />
  </button>
);

  return (
    <div className="flex justify-center gap-6 mt-6">
      <SocialButton icon="https://www.svgrepo.com/show/475656/google-color.svg" label="Google" />
      {/* <SocialButton
        icon="https://www.svgrepo.com/show/475643/github-color.svg"
        label="GitHub"
        className="invert"
      /> */}
      <SocialButton
        icon="https://www.svgrepo.com/show/475647/facebook-color.svg"
        label="Facebook"
      />
    </div>
  );
}
