import React from "react";

interface RightArrowSVGProps {
  width?: string;
  height?: string;
  onClick?: () => void;
}

const RightArrowSVG: React.FC<RightArrowSVGProps> = ({
  width = "180",
  height = "75",
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 180 75"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="1"
          x2="0"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#efc88b" />
          <stop offset="0.824" stop-color="#1f2b3f" stop-opacity="0.161" />
          <stop offset="1" stop-color="#0b1c38" stop-opacity="0.078" />
        </linearGradient>
      </defs>
      <path
        id="shape_SHAPE:shapes_02.Arrows_Arrow-Straight_outline"
        data-name="shape [SHAPE:shapes/02. Arrows/Arrow - Straight outline]"
        d="M285,1066.5,217.5,1029v26.47H105v22.059H217.5V1104Z"
        transform="translate(-105 -1029)"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
};

export default RightArrowSVG;
