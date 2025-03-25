import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Hook pour détecter quand une section entre dans la zone visible (viewport).
 * Il est utilisé pour déclencher des animations lorsque la section devient visible à l'écran.
 *
 * @param {number} threshold - Pourcentage de visibilité requis pour que l'élément soit "in view" (entre 0 et 1). 0.7 = (70%)
 * @param {boolean} triggerOnce - Si true, l'animation se déclenche une seule fois. Sinon, à chaque fois que l'élément entre/sort du viewport.
 *
 * @returns {Object} - { ref, isInView }
 *    - ref : référence à attacher à l’élément à observer
 *    - isInView : booléen indiquant si l’élément est visible ou non
 */
function useSectionAnimation(threshold = 0.7, triggerOnce = false) {
	const ref = useRef(null);
	const isInView = useInView(ref, { threshold, triggerOnce });

	return { ref, isInView };
}

export default useSectionAnimation;
