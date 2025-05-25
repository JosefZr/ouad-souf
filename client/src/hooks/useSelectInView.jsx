import { useActiveSectionContext } from '@/context/ActiveSection';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useSectionInView(sectionName, threshold) {
    const { ref, inView } = useInView({
        threshold: threshold
    });
    const { setActiveSection, timeOfLastclick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastclick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastclick, sectionName]);

    return { ref };
}
