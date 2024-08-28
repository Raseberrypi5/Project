import { FunctionComponent } from "react";
import ProductDesign from "./ProductDesign";

export type ShoutsType = {
  className?: string;
};

const Shouts: FunctionComponent<ShoutsType> = ({ className = "" }) => {
  return (
    <footer
      className={`w-[567px] overflow-x-auto flex flex-row items-start justify-start pt-0 px-48 pb-0 box-border gap-[11.2px] max-w-full text-left text-smi-2 text-darkslateblue-100 font-inter ${className}`}
    >
      <div className="w-[152.3px] shrink-0 flex flex-row items-start justify-start pt-0 pb-[6.3px] pl-0 pr-[17px] box-border relative gap-[17.4px]">
        <div className="h-full w-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[16.65px] overflow-hidden flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 relative shadow-[0px_3.5px_3.49px_rgba(0,_0,_0,_0.25)] rounded-[16.72px] bg-plum-100" />
          <div className="h-[110.8px] w-[94.3px] relative hidden">
            <div className="absolute h-[80.87%] w-[67.44%] top-[19.13%] right-[0%] bottom-[0%] left-[32.56%] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)]" />
            <div className="absolute h-[80.87%] w-[67.44%] top-[0%] right-[32.56%] bottom-[19.13%] left-[0%] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)]" />
          </div>
        </div>
        <img className="h-0 w-0 relative" alt="" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[34.7px] px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[31.3px]">
            <div className="w-[65px] h-[15px] relative leading-[121.02%] font-semibold font-poppins flex items-center z-[1]">
              11/07/2023
            </div>
            <div className="w-[70.8px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border">
              <b className="flex-1 relative leading-[16px] z-[1]">Rainbow (:</b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[18.8px] text-2xs-5">
              <div className="flex-1 flex flex-col items-start justify-start pt-[9.7px] px-0 pb-0 box-border min-w-[46px]">
                <div className="self-stretch relative leading-[28px] font-semibold whitespace-nowrap z-[1]">
                  Liked by 69 Connections
                </div>
              </div>
              <div className="h-[27px] w-[28.2px] relative z-[1]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[7.05px] bg-gray-100" />
                <img
                  className="absolute h-[34.81%] w-[41.49%] top-[32.59%] right-[30.14%] bottom-[32.59%] left-[28.37%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/next.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[152.3px] shrink-0 flex flex-col items-start justify-start pt-[34.7px] px-[17px] pb-[6.3px] box-border relative gap-[31.3px] text-darkslateblue-200">
        <div className="w-full h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[16.65px] overflow-hidden flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 relative rounded-[16.72px] bg-plum-100" />
          <div className="h-[110.8px] w-[94.3px] relative hidden">
            <div className="absolute h-[80.87%] w-[67.44%] top-[19.13%] right-[0.11%] bottom-[0%] left-[32.45%] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)]" />
            <div className="absolute h-[80.87%] w-[67.44%] top-[0%] right-[32.56%] bottom-[19.13%] left-[0%] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)]" />
          </div>
        </div>
        <img
          className="w-full h-[205.5px] absolute !m-[0] right-[0px] bottom-[-23.2px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
          alt=""
        />
        <div className="w-[66px] h-[15px] relative leading-[121.02%] font-semibold font-poppins text-darkslateblue-100 flex items-center z-[2]">
          11/06/2023
        </div>
        <div className="w-[70.8px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border">
          <b className="flex-1 relative leading-[16px] z-[2]">Sunset</b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[18.8px] text-2xs-5">
          <div className="flex-1 flex flex-col items-start justify-start pt-[9.7px] px-0 pb-0 box-border min-w-[46px]">
            <div className="self-stretch relative leading-[28px] font-semibold whitespace-nowrap z-[2]">
              Liked by 69 Connections
            </div>
          </div>
          <div className="h-[27px] w-[28.2px] relative z-[2]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[7.05px] bg-gray-100" />
            <img
              className="absolute h-[34.81%] w-[41.49%] top-[32.59%] right-[30.14%] bottom-[32.59%] left-[28.37%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/next.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[315.8px] shrink-0 flex flex-row items-start justify-start gap-[11.2px]">
        <ProductDesign
          propBackgroundColor="#d3b1ff"
          backgroundMask="pending_I2:252;2407:3165;1:45"
          propRight="30.5%"
          propLeft="28.01%"
          productDesign="11/07/2023"
          propLeft1="11.42%"
          propLeft2="11.42%"
          propLeft3="11.42%"
        />
        <ProductDesign
          backgroundMask="pending_I2:252;2417:2041;1:45"
          productDesign="11/08/2023"
        />
      </div>
    </footer>
  );
};

export default Shouts;
