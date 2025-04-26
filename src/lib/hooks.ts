import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { sectionName } from "@/lib/types";

export const useSectionInView = (section: sectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setActiveLink, timeOflastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOflastClick > 1000) {
      setActiveLink(section);
    }
  }, [inView, timeOflastClick, setActiveLink, section]);

  return { ref, inView };
};
