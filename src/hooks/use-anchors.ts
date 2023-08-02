import { useEffect } from "react";
import { scroller } from "react-scroll";

function useAnchors(): void {
  useEffect(() => {
    const locationHash = window.location.hash;
    if (locationHash) {
      setTimeout(() => {
        scroller.scrollTo(locationHash.substring(1), {
          smooth: true,
          duration: 500,
        });
      }, 500);
    }
  }, []);
}

export default useAnchors;
