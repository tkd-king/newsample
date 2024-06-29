import PropTypes from "prop-types";

const Heading = ({ level, children, className }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case "1":
        return " font-[400] text-[#000] leading-[70px] text-[60px]";
      case "2":
        return "text-[18px] font-[500] text-black leading-[27px] z-100000000";
      case "3":
        return "text-[36px] font-[400] text-[#222] leading-[46px]";
      case "4":
        return "text-[24px] font-[400] text-[#222] leading-[34px] ";
      case "5":
        return "text-[16px] font-[400] text-[#666] leading-[24px]";
      case "6":
        return "text-[14px] text-[#666] font-[400] leading-[21px]";
      case "7":
        return "text-[36px] text-[#666] font-[400] leading-[43px]";
      case "8":
        return "text-[15px] text-[#222] font-[400] leading-[23px]";
      case "9":
        return "text-[32px] text-[#222] font-[400] leading-[43px]";
      case "10":
        return "text-[16px] text-[#222] font-[400] leading-[43px]";
      case "11":
        return "text-[12px] text-white font-[400] z-[10000000]";
        case "12":
          return "text-[12px] text-black font-[300] z-[10000000]";
  
      default:
        return "text-lg";
    }
  };

  const headingStyles = `${getHeadingStyles(level)} ${className}`;

  return <HeadingTag className={headingStyles}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6", "7", "8", "9" ,"10", "11", "12 "]).isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: "",
};

export default Heading;
