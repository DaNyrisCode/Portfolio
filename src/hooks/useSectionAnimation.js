import { useRef } from "react";
import { useInView } from "framer-motion";

function useSectionAnimation(threshold = 0.7, triggerOnce = false) {
	const ref = useRef(null);
	const isInView = useInView(ref, { threshold, triggerOnce });

	return { ref, isInView };
}

export default useSectionAnimation;
