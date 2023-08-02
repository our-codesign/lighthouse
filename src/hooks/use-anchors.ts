import { useEffect, useRef } from "react";
import ANCHORS from "../constants/anchors";

type TUseAnchorsReturn<T> = {
  mainContainerRef: React.MutableRefObject<null>;
  wealthContainerRef: React.MutableRefObject<null>;
  experienceContainerRef: React.MutableRefObject<null>;
  philosophyContainerRef: React.MutableRefObject<null>;
  contactContainerRef: React.MutableRefObject<null>;
};

function useAnchors<T>(): TUseAnchorsReturn<T> {
  const mainContainerRef = useRef(null);
  const wealthContainerRef = useRef(null);
  const experienceContainerRef = useRef(null);
  const philosophyContainerRef = useRef(null);
  const contactContainerRef = useRef(null);

  useEffect(() => {
    const ANCHORS_LOCATION = {
      [ANCHORS.home]: mainContainerRef,
      [ANCHORS.wealth]: wealthContainerRef,
      [ANCHORS.experience]: experienceContainerRef,
      [ANCHORS.philosophy]: philosophyContainerRef,
      [ANCHORS.contact]: contactContainerRef,
    };
    const locationHash = window.location.hash;
    if (locationHash && ANCHORS_LOCATION[locationHash]) {
      const ref = ANCHORS_LOCATION[locationHash];
      //@ts-ignore
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return {
    mainContainerRef,
    wealthContainerRef,
    experienceContainerRef,
    philosophyContainerRef,
    contactContainerRef,
  };
}

export default useAnchors;
