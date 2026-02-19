import { HOVER, btn_color, btn_hover } from "../styles/Colors";

const MyButton = ({
  onClick = () => {},
  textVar = '--primary',
  bgVar = '--surface',
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        '--text': `var(${textVar})`,
        '--bg': `var(${bgVar})`,
        // '--hover-bg': HOVER(`var(${textVar})`, 'white'),
        '--hover-bg': `var(${textVar})`,
        '--hover-text': `var(${bgVar})`,
        transition: '0.2s',
      }}
      className={`
        ${btn_color('--text', '--bg')} 
        ${btn_hover('--text', '--bg')} 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default MyButton;
