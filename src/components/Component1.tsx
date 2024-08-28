import { FunctionComponent } from "react";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[20.9px] relative shadow-[0px_3.8px_3.82px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(3.82px)] text-left text-3xs-6 text-deeppink font-poppins ${className}`}
    >
      <div className="absolute h-full w-[82.67%] top-[0%] right-[17.33%] bottom-[0%] left-[0%] rounded-[36.08px] bg-white" />
      <img
        className="absolute h-[70.81%] w-[19.58%] top-[16.27%] right-[71.82%] bottom-[12.92%] left-[8.6%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-21@2x.png"
      />
      <div className="absolute h-[71.77%] w-[45.64%] top-[18.66%] left-[31.55%] font-black inline-block min-w-[36.6px] z-[1]">
        10,000
      </div>
    </div>
  );
};

export default Component1;
