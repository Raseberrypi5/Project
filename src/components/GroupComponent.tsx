import { FunctionComponent } from "react";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-row items-start justify-start pt-[15.9px] pb-4 pl-9 pr-5 box-border bg-[url('/public/rectangle-4229@2x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-normal shrink-0 max-w-full text-left text-sm-1 text-black font-poppins ${className}`}
    >
      <img
        className="h-[172.7px] w-[375px] relative object-cover hidden max-w-full"
        alt=""
        src="/rectangle-4229@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block [transform:_rotate(-0.2deg)] min-w-[29.7px] z-[2]">
          7:00
        </a>
        <div className="self-stretch flex flex-row items-start justify-start relative mt-[-17.7px] text-mid-4">
          <a className="[text-decoration:none] w-[102.8px] absolute !m-[0] bottom-[1.7px] left-[102.6px] font-black text-[inherit] inline-block z-[1]">
            @jimmy
          </a>
          <div className="w-3.5 absolute !m-[0] top-[0.56px] left-[29.7px] text-sm-1 font-medium inline-block [transform:_rotate(-37.2deg)] [transform-origin:0_0] z-[2]">
            ➤
          </div>
          <img
            className="h-[13.2px] w-[25.3px] absolute !m-[0] top-[0px] right-[27.1px] object-contain z-[3]"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="flex-1 flex flex-row items-start justify-end text-smi-4 text-darkslateblue-100">
            <div className="w-[82.9px] flex flex-col items-end justify-start gap-[14.8px]">
              <div className="h-[17.6px] flex flex-row items-start justify-start gap-[13.9px] shrink-0">
                <img
                  className="h-[13.2px] w-[26.2px] relative object-contain z-[2]"
                  alt=""
                  src="/image-1@2x.png"
                />
                <img
                  className="h-[16.7px] w-[32.3px] relative object-contain z-[4]"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1">
                <div className="flex-1 rounded-[16.49px] bg-white flex flex-row items-start justify-start pt-[3.5px] px-[3px] pb-[3.6px] shrink-0 z-[2]">
                  <div className="flex-1 shadow-[0px_2.4px_11.78px_rgba(0,_0,_0,_0.05)] rounded-[16.49px] flex flex-row items-start justify-start pt-[4.7px] px-2 pb-[5.3px] gap-[5.9px]">
                    <div className="flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0">
                      <img
                        className="w-[12.6px] h-[12.6px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/pen-2.svg"
                      />
                    </div>
                    <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[16px] font-medium text-[inherit] inline-block min-w-[35px]">
                      Finish
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
