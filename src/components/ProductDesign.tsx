import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ProductDesignType = {
  className?: string;
  backgroundMask?: string;
  productDesign?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
  propLeft3?: CSSProperties["left"];
};

const ProductDesign: FunctionComponent<ProductDesignType> = ({
  className = "",
  propBackgroundColor,
  backgroundMask,
  propRight,
  propLeft,
  productDesign,
  propLeft1,
  propLeft2,
  propLeft3,
}) => {
  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const nextIconStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const productDesignStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const projectStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const moreInfoStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  return (
    <div
      className={`h-[182.3px] flex-1 relative text-left text-smi-2 text-darkslateblue-100 font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-[16.65px] w-full h-full overflow-hidden flex flex-row items-end justify-start pt-0 pb-[109.7px] pl-[94px] pr-0 box-border">
        <div
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[16.72px] bg-cornflowerblue"
          style={backgroundStyle}
        />
        <div className="h-[110.8px] w-[94.3px] relative shrink-0 z-[1]">
          <div className="absolute h-[80.87%] w-[67.44%] top-[19.13%] right-[0.11%] bottom-[0%] left-[32.45%] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)]" />
          <div className="absolute h-[80.87%] w-[67.44%] top-[0%] right-[32.56%] bottom-[19.13%] left-[0%] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] z-[1]" />
        </div>
      </div>
      <img
        className="absolute h-[112.73%] w-full top-[0%] right-[0%] bottom-[-12.73%] left-[0%] max-w-full overflow-hidden max-h-full z-[2]"
        alt=""
        src={backgroundMask}
      />
      <div className="absolute h-[14.81%] w-[18.52%] top-[75.86%] right-[11.16%] bottom-[9.33%] left-[70.32%] z-[3]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[7.05px] bg-darkslateblue-100" />
        <img
          className="absolute h-[34.81%] w-[41.49%] top-[32.59%] right-[30.14%] bottom-[32.59%] left-[28.37%] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/next-2.svg"
          style={nextIconStyle}
        />
      </div>
      <div
        className="absolute top-[19.03%] left-[11.49%] leading-[121.02%] font-semibold font-poppins z-[3]"
        style={productDesignStyle}
      >
        {productDesign}
      </div>
      <b
        className="absolute h-[8.78%] w-[46.49%] top-[44.43%] left-[11.49%] leading-[16px] flex text-darkslateblue-200 items-center z-[3]"
        style={projectStyle}
      >
        Rainbow (:
      </b>
      <b
        className="absolute top-[79.76%] left-[11.49%] text-xs-3 leading-[129.52%] z-[3]"
        style={moreInfoStyle}
      >
        Liked by 31
      </b>
    </div>
  );
};

export default ProductDesign;
