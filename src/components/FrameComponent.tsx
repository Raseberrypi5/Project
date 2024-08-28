import { FunctionComponent } from "react";
import Component1 from "./Component1";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[103px] flex flex-row items-start justify-end py-0 pl-[23px] pr-[18px] box-border max-w-full ${className}`}
    >
      <nav className="m-0 self-stretch flex-1 flex flex-row items-end justify-between shrink-0 max-w-full gap-5 text-left text-smi-4 text-gray-200 font-poppins">
        <div className="self-stretch w-[71.7px] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border gap-[19.1px]">
          <div className="self-stretch shadow-[0px_2.3px_2.3px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(2.3px)] rounded-[8.52px] bg-white flex flex-row items-end justify-start py-[8.6px] px-[9px] gap-[0.3px]">
            <img
              className="h-[16.2px] w-[29.1px] relative object-cover"
              loading="lazy"
              alt=""
              src="/eyes-emoji-1@2x.png"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
              <b className="relative leading-[10px] inline-block min-w-[15px]">
                <span className="tracking-[0.03em]">7</span>
                <span className="tracking-[-0.01em]">1</span>
              </b>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-[7px] pr-[9px]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start relative gap-[7.9px]">
              <div className="self-stretch flex-1 relative rounded-[50%] bg-darkslateblue-100" />
              <img
                className="h-[31.45%] w-[28.63%] absolute !m-[0] top-[34.88%] right-[34.88%] bottom-[33.67%] left-[36.49%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/group-2291.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[80.2px] flex flex-col items-start justify-end pt-0 px-0 pb-[31.5px] box-border text-3xs-6 text-deeppink">
          <Component1 />
        </div>
        <div className="w-[65.8px] flex flex-col items-start justify-start gap-5 text-mini-5 text-darkslateblue-100">
          <div className="self-stretch shadow-[0px_2.3px_2.32px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(2.32px)] rounded-4xs-6 bg-white flex flex-row items-start justify-start pt-[11.4px] pb-[11px] pl-[13px] pr-3">
            <div className="relative tracking-[0.03em] leading-[11px] font-black inline-block min-w-[39px]">
              ENTJ
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-[7px] pr-2">
            <img
              className="h-[49.6px] w-[49.6px] relative"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FrameComponent;
