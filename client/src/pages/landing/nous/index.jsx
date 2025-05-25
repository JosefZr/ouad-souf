import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useReveal from '@/hooks/useReveal';
import { useTranslation } from 'react-i18next';
import { useSectionInView } from '@/hooks/useSelectInView';
function About() {
    const { t } = useTranslation();
    const { t: r } = useTranslation();
    const { ref: refView } = useSectionInView(r("navbar.us.name"), 0.3);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
        // offset: ["0 1", "0 0.5"]
    });
    const scalProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    useReveal("horizontal")
    useReveal("vertical")

    return (
        <motion.div
            className='text-center scroll-mt-28 max-sm:mx-0 mx-auto rounded-3xl mb-28 bg-my-to  max-w-7xl '
            style={{
                scale: scalProgress, opacity: opacityProgress
            }}
            id='nous'
            ref={ref}
        >
            <section
                ref={refView}
                className='bg-transparent flex xl:flex-row flex-col justify-center gap-10  mx-auto md:py-10 pb-10 items-start max-xl:items-center  rounded-xl'
            >
                <div className=' flex items-center flex-col gap-10'>
                    <h1 className='reveal-vertical xl:hidden capitalize  font-bold sm:text-7xl text-5xl whitespace-normal text-blue-500'>{t('About.title')} </h1>
                    <img
                        src="/images/nous.jpg"
                        alt='cabin'
                        width={350}
                        height={300}
                        style={{ width: 'auto', height: 'auto' }}
                        className='pointer-events-none max-h-[600px] reveal-horizontal-left rounded-xl'
                    />
                </div>
                <div className='flex flex-col max-xl:text-center text-start gap-10 px-4 max-xl:w-full w-[50%] pt-5'>
                    <h1 className='reveal-horizontal-right max-xl:hidden relative capitalize  font-bold sm:text-5xl text-3xl whitespace-normal text-blue-500'>
                        {t('About.title')}
                    </h1>
                    <h2 className='reveal-horizontal-right text-xl max-sm:text-lg capitalize text-default-700 text-bold-green leading-10 '>
                        {t("About.description")}
                    </h2>
                </div>
            </section>
        </motion.div>
    )
}

export default About;