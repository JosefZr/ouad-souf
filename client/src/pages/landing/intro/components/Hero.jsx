import { motion } from 'framer-motion';
import useReveal from '@/hooks/useReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSectionInView } from '@/hooks/useSelectInView';
import { slideInButtonsPlay } from '@/lib/animation';
export default function Hero() {

  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { t } = useTranslation();
  const { t: r } = useTranslation();
  const { t: b } = useTranslation()
  const heroTitle = t('Index.title');

  const styledHeroTitle = heroTitle.split(' ').map((word, index) =>
    word.toLowerCase() === 'care' || word.toLowerCase() === "souriez"
      ? <span key={index} className='text-bold-green font-bold'>{word}</span>
      : word
  ).reduce((prev, curr) => [prev, ' ', curr]);

  const { ref } = useSectionInView(r("navbar.home.name"), 0.5);
  useReveal("vertical");
  useReveal("horizontal");
  return (
    <div className='flex items-center justify-evenly flex-row-reverse max-md:flex-col max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto mt-20'>
      <div className='flex items-center justify-center' ref={ref}>
        <motion.div>
          <motion.div
            className="relative"
            layoutId='main-image-1'
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
          >
            <img
              src="/White Black Simple Illustration Dental Clinic Logo.webp"
              alt='White and Black Simple Illustration Dental Clinic Logo'
              width={400}
              height={400}
              className='md:h-80 md:w-80 xl:h-100 xl:w-100 h-60 w-60 rounded-full object-cover shadow-xl pointer-events-none'
            />
          </motion.div>
        </motion.div>
      </div>
      <div className='flex flex-col items-start max-md:items-center gap-5 sm:max-w-[70%] mb-4'
      // variants={banner}
      >
        <motion.h1 className='hero-vertical text-center max-sm:px-5 text-3xl min-[300px]:text-4xl sm:text-7xl xl:text-8xl lg:text-8xl font-medium sm:max-w-[95%] md:text-left capitalize text-my-black'
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        >
          {styledHeroTitle}
        </motion.h1>


        <div className='flex sm:flex-row flex-col items-center gap-2 sm:gap-8'>
          <motion.div
            variants={slideInButtonsPlay(0)}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Button
              as={Link}
              href="#"
              size="lg"
              className="reveal-vertical rounded-3xl bg-my-black text-gray-100"
            >
              {b('heroButton.name')}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
