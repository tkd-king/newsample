import React from 'react';
import PropTypes from 'prop-types';
import "../../app/globals.css"

const Button = ({ href, children, variant, onClick , extra }) => {
  let buttonStyle = ' ';

  switch (variant) {
    case 'button1':
      buttonStyle = 'h-[45px] w-[135px] text-black rounded-[10px] border-[1px] border-black bg-[#efefef] hover:bg-black text-white';
      break;
    case 'success':
      buttonStyle = 'h-[45px] w-[190px] bg-[#efefef] rounded-[10px] hover:bg-black text-white';
      break;
      case 'button':
        buttonStyle = 'h-[46px] w-[178px] bg-[#efefef] rounded-[10px] hover:bg-black text-white';
        break;
      default:
      buttonStyle = ' h-[10px]';
      break;
  }

  return (
    <a
      className={buttonStyle}
      onClick={onClick}
      href={href}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['button1', 'success', 'button']).isRequired,
  onClick: PropTypes.func,
};

export default Button;
