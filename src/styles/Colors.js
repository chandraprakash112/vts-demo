const base_color = (textVar, bgVar) => {
  return {
    color: `var(${textVar})`,
    backgroundColor: `var(${bgVar})`,
  };
};

const custom_color = (textColor, bgColor) => {
  return {
    color: textColor,
    backgroundColor: bgColor,
  };
};

// style={{ '--hover-bg': HOVER('var(--primary)','black') }}
// className="hover:[background-color:var(--hover-bg)]"
const HOVER = (color, mix = 'white') => `color-mix(in srgb, ${color} 90%, ${mix})`;

const btn_color = () => `
  text-[color:var(--text)]
  bg-[color:var(--bg)]
`;

const btn_hover = () => `
  hover:text-[color:var(--hover-text)]
  hover:bg-[color:var(--hover-bg)]
`;

export { HOVER, btn_color, btn_hover, base_color, custom_color };
