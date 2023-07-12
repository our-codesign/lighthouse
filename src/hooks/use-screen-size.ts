import { useEffect, useState } from "react";

type TUseScreenSizeReturn = {
  screenSize?: Screensize;
};
export type Screensize = {
  dynamicWidth: number;
  dynamicHeight: number;
};

function useScreenSize(): TUseScreenSizeReturn {
  const [screenSize, getDimension] = useState<Screensize>();

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if (!screenSize) setDimension();
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return { screenSize };
}

export default useScreenSize;
