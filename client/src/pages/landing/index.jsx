// import { GlobalNavbar } from "@/components";
// import Hero from "@/pages/landing/hero-section/Hero";
// import { MODAL_TYPE, useModal } from "@/hooks/useModalStore";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { TimeLineSection } from "@/components";
// import { FinalSection } from "@/components";
// import { Faq } from "@/components";
// import OneYear from "./one-year";
// import AskYourself from "./ask-yourself";
// import Exclusive from "./exclusive";
// import Path from "./path";
import { Seo } from "@/components/Seo";
import NewNavBar from "@/components/NewNavBar";
import { AnimatePresence } from "framer-motion";
import Intro from "./intro";
// import Hero2 from "./intro/components/Hero2";
import About from "./nous";
import Commandes from "./commonds";
import Services from "./services";
import Footer from "./footer";
import Agriculture from "./services/components/Agriculture";
import Hero2 from "./intro/components/Hero2";
export default function Landing() {
    // const [countdown, setCountdown] = useState(2); // Countdown for delay note
    // const { onOpen } = useModal()
    // const params = useParams()
    // useEffect(() => {
    //     console.log('1111')
    //     const hasSubmittedEmail = localStorage.getItem("emailSubmitted");

    //     if (!hasSubmittedEmail) {
    //         let timeLeft = 2;
    //         const timer = setInterval(() => {
    //             timeLeft -= 1;
    //             setCountdown(timeLeft);
    //             if (timeLeft === 0) {
    //                 clearInterval(timer);
    //                 onOpen(MODAL_TYPE.LEADS_MODAL);
    //             }
    //         }, 7000); // Countdown updates every second
    //     }
    // }, []);
    return (
        <AnimatePresence>
            <Seo
                title="SARL Bennour"
                description="SARL BENNOUR est une société privée créée en 2020, elle a investi dans le domaine des tissus non tissés. Ce produit est largement utilisé dans les services médicaux ainsi que d’autres secteurs tels que les sacs à provisions, les emballages alimentaires écologiques, l’habillement, l’ameublement"
                keywords="Sacs shopping  box bag  sac pharmacie  sac pour farine, semoule et riz sac tissu non tissé personnalisés"
            />
            <div className=" min-h-screen overflow-hidden  dark:bg-zinc-950 bg-slate-50"
                style={{ fontFamily: "'Funnel Display', sans-serif", position: "relative" }}
            >
                {/* <GlobalNavbar /> */}
                < NewNavBar />

                <div

                    style={{
                        position: "relative"
                    }}
                    className=" z-20 overflow-x-clip">
                    {/* <Hero2 /> */}
                    <Hero2 />
                    <Services />
                    <Agriculture />
                    <About />
                    <Commandes />
                    <Footer />
                </div>
                {/* <Hero actor={params.name} />
                {params.name === "dentist" && <TimeLineSection actor={params.name} />}
                {params.name === "dentist" && <OneYear actor={params.name} />}
                <Exclusive actor={params.name} />
                {params.name === "dentist" && (
                    <>
                        <AskYourself actor={params.name} />
                        <Path actor={params.name} />
                        <FinalSection actor={params.name} />
                        <Faq />
                        <Footer />
                    </>
                )} */}
            </div>
        </AnimatePresence>

    )
}
