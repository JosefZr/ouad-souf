import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useForm } from 'react-hook-form';
import useReveal from '@/hooks/useReveal';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useSectionInView } from '@/hooks/useSelectInView';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@/components/ui/form';

function Commandes() {
    const { t: r } = useTranslation();
    const { t } = useTranslation();
    const { ref: refView } = useSectionInView(r("navbar.contact.name"), 0.2);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0 0.5"]
    });
    const scalProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const { email, name, comment } = data;
        console.log(data)
        // const { success, error } = await handleEmailSubmit({ name, email, comment });

        // if (success) {
        //     toast.success('email sent succefuly')
        // }
        // else {
        //     toast.error(error);
        // }
    };
    useReveal("horizontal")
    useReveal("vertical")
    return (
        <motion.div
            ref={ref}
            style={{ scale: scalProgress, opacity: opacityProgress }}
            className='text-center scroll-mt-28 mx-auto  rounded-3xl mb-20'
            id='Contact'
        >
            <section ref={refView} className='max-w-5xl mx-auto '>
                <header className='flex flex-col justify-center col-span-full text-left max-sm:text-center mx-10 pb-10 gap-5'>
                    <h1 className='reveal-vertical capitalize text-center font-bold md:text-6xl text-5xl whitespace-normal text-blue-500'>
                        {t("Email.title")}
                    </h1>
                </header>
                <div className='flex flex-row-reverse max-md:flex-col-reverse justify-center items-center max-md:gap-2 md:h-[450px] mx-5 max-md:mx-10 max-[440px]:mx-3'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3329.3563251535347!2d6.829878984800949!3d33.44002198077684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDI2JzI0LjEiTiA2wrA0OSczOS43IkU!5e0!3m2!1sar!2sdz!4v1748107053017!5m2!1sar!2sdz"
                        width="600"
                        height="450"
                        className='reveal-horizontal-right rounded-tr-2xl rounded-br-3xl w-[70%] sm:w-[600px] max-sm:w-full max-md:rounded-3xl'
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Carte de localisation du cabinet dentaire Dr. M. Benyahia" // Ajout du titre ici
                    />
                    <div className='reveal-horizontal-left flex flex-col justify-center gap-5 bg-default-200 rounded-bl-2xl rounded-tl-3xl max-md:rounded-3xl px-10 md:max-lg:px-3 h-full w-[40%] sm:w-[600px] max-sm:w-full  max-[500px]:px-5 max-md:py-5'>
                        <div className='flex flex-col items-center justify-center text-center'>

                            <h1 className='font-medium text-xl text-black'>{t("Email.question")}</h1>
                        </div>
                        <Form className=' flex flex-col gap-4 relative ' onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                {...register("name")}
                                type="text"
                                name="name"
                                label="Prénom"
                                className='bg-white  text-my-black'
                                labelPlacement="inside"
                                placeholder="Entrer Votre Nom"
                                required
                            />
                            <Input
                                {...register("email")}
                                type="email"
                                label="Email"
                                className='bg-white text-my-black'

                                name="email"
                                labelPlacement="inside"
                                placeholder="Enter Votre Email"
                                required
                            />
                            <Textarea
                                {...register("comment")}
                                label="Description"
                                className='bg-white text-my-black'

                                placeholder="Enter your description"
                                name="comment"
                                classNames={{
                                    base: "w-full",
                                    input: "resize-y min-h-[40px]"
                                }}
                                required
                            />
                            <Button radius="xl" className='w-fit self-end bg-blue-500 text-white' type='submit'>
                                Envoyer un message
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Commandes;
