import PropTypes from "prop-types";
import '../../app/globals.css'

const AnchorTag = ({ href, text }) => {
  return (
    <div className="">
      <li className="lyst ">
        <a
          href={href}
          className="relative inline-block  mx-[10px] font-medium group text-[#171725] text-[16px] hover:text-black "
        >
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          <span className="relative z-[1000] flex items-center justify-center ">{text}</span>
        </a>
      </li>
    </div>
  );
};
export default AnchorTag;
