import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
// import Reserving from './components/Reserving';

function Intro() {
    const targetRef = useRef(null);
    const [applyTransform, setApplyTransform] = useState(false);
    const [hight, setHight] = useState(false);


    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.5]);

    useEffect(() => {
        const handleResize = () => {
            const shouldApply = window.innerWidth > 767 && window.innerHeight > 750;
            const hight = window.innerHeight < 750
            setHight(hight)
            setApplyTransform(shouldApply);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.section
            style={applyTransform ? { opacity } : {}}
            ref={targetRef}
            className="sm:h-screen sm:scroll-m-20 flex items-center justify-evenly flex-col mb-10"
            id='accueil'
        >
            <motion.div
                className={`fixed ${hight ? 'relative' : 'max-md:relative'}`}
                style={applyTransform ? { scale } : { position: 'relative' }}
            >
                {/* <Reserving /> */}
            </motion.div>
        </motion.section>
    );
}

export default Intro;
