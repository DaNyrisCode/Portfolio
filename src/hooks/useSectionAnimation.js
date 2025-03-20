import { useRef } from "react";
import { useInView } from "framer-motion";

function useSectionAnimation(threshold = 0.6, triggerOnce = true) {
	const ref = useRef(null);
	const isInView = useInView(ref, { threshold, triggerOnce });

	return { ref, isInView };
}

export default useSectionAnimation;
