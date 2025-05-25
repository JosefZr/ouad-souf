import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { GiEarthAmerica } from "react-icons/gi"
import { cn } from "@/lib/utils"
// import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"
import { HashLink as Link } from 'react-router-hash-link';
import useReveal from "@/hooks/useReveal"
import { useNavbarLinks } from "@/lib/data"
import { useActiveSectionContext } from "@/context/ActiveSection"
import { prespective, slideIn } from "@/lib/animation"
import styled from "styled-components"
import { size } from "@/lib/mediaQuerys"
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 30%;
  height: 100vh;
  background-color: rgba(26, 26, 26, 0.2); /* Slightly darker but more transparent */
  backdrop-filter: blur(10px); /* Strong blur for glass effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  z-index: 997;
  padding: 6rem 2rem 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $isOpen }) => ($isOpen ? "0 0 15px rgba(0, 0, 0, 0.3)" : "none")};
  border-right: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border for glass effect */

  @media screen and (max-width: ${size.tablet}) {
    width: 70%;
  }
`
const MenuHeader = styled.div`
    color:black;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Text shadow for better readability on glass */
`
const NavItem = styled.div`
  perspective: 120px;
  perspective-origin: bottom;
`;
export default function NewNavbar() {
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [applyButton, setApplyButton] = useState(false);

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const links = useNavbarLinks()
    const [applyTransform, setApplyTransform] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const shouldApply = window.innerWidth < 500;
            const shouldApplyButton = window.innerWidth < 640;
            setApplyTransform(shouldApply);
            setApplyButton(shouldApplyButton);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsLeftMenuOpen(!isLeftMenuOpen)
    }

    const closeMenu = () => {
        setIsLeftMenuOpen(false)
    }
    useReveal('vertical')

    return (
        <>
            <div className="top-vertical fixed h-18 top-0 z-50 w-full bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="container mx-auto px-4 md:px-10">
                    <div className="flex h-16 items-center justify-between">
                        {/* Left side - Menu button */}
                        <div className=" z-50 flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="flex sm:hidden items-center gap-2 rounded border border-gray-200 px-3 py-2 text-black transition-all hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                                aria-label="Toggle menu"
                            >
                                <div className="flex h-5 w-10 flex-col items-center justify-center">
                                    <div
                                        className={cn(
                                            "h-[2px] w-[50%] origin-left translate-y-[0.45rem] rounded-sm bg-black transition-all duration-300",
                                            isLeftMenuOpen && "rotate-[-45deg]",
                                        )}
                                    />
                                    <div
                                        className={cn(
                                            "h-[2px] w-[50%] origin-center rounded-md bg-black transition-all duration-300",
                                            isLeftMenuOpen && "hidden",
                                        )}
                                    />
                                    <div
                                        className={cn(
                                            "h-[2px] w-[50%] origin-left -translate-y-[0.45rem] rounded-md bg-black transition-all duration-300",
                                            isLeftMenuOpen && "rotate-[45deg]",
                                        )}
                                    />
                                </div>
                                {!isMobile && <span>Menu</span>}
                            </button>
                            <img
                                src="/images/logo.jpg"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="min-w-5 pointer-events-none max-sm:hidden"
                            />
                            {/* <h1 className="md:max-[920px]:hidden max-[500px]:hidden">
                                Light STOMATOLOGY
                            </h1> */}
                        </div>

                        {/* Center - Navigation Links */}
                        <nav className="hidden md:flex md:flex-1 md:justify-center">
                            <ul className="flex items-center space-x-8">
                                {links.map((link, i) => (
                                    <motion.div
                                        key={link.hash}
                                        className="text-nowrap text-lg font-semibold"
                                        initial="initial"
                                        animate="enter"
                                        exit="exit"
                                    // variants={prespective(i)}
                                    >
                                        <Link
                                            to={link.hash}
                                            key={link.hash}
                                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}

                                            className={`${link.name === activeSection ? "text-green-500 border-b-3 border-green-500 pb-[17px] transition-all" : "text-foreground"} ${link.name === "ЛБ" && "font-extrabold"}`}
                                            onClick={() => {
                                                setActiveSection(link.name)
                                                setTimeOfLastClick(Date.now())
                                                closeMenu()
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </ul>
                        </nav>
                        {/* Right - Language and Login */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:block">
                                <LanguageSwitcher />
                            </div>
                            <img
                                src="/vite.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                                className="min-w-10 pointer-events-none sm:hidden"
                            />
                            {/* <Link
                                href="/login"
                                className="uppercase text-red-500 transition-all hover:text-red-600 md:border md:border-gray-200 md:px-4 md:py-2 md:hover:bg-gray-100 md:dark:border-gray-700 md:dark:hover:bg-gray-800"
                            >
                                <GiEarthAmerica className="h-6 w-6" />
                                <span className="sr-only">Login</span>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div >

            {/* Mobile Menu Overlay */}
            {
                isLeftMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all" onClick={closeMenu} />
                )
            }

            {/* Mobile Sidebar */}
            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isLeftMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                            onClick={closeMenu}
                        />

                        {/* Sidebar */}
                        <motion.div
                            key="sidebar"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className={cn(
                                "fixed top-0 z-50 left-0 h-[100dvh] overflow-hidden w-[70%] bg-white/90 shadow-lg backdrop-blur-md sm:w-[10%] md:w-[40%]",
                                "flex flex-col justify-between" // Changed to flex-col between
                            )}
                        >
                            <div className="flex-1 overflow-hidden flex flex-col">
                                {/* Scrollable Content */}
                                <div className="p-8 pt-24 pl-10 flex-1 overflow-y-auto"> {/* Added overflow-y-auto */}
                                    <MenuHeader>Menu</MenuHeader>
                                    <nav>
                                        <ul className="space-y-4 pb-8"> {/* Added padding-bottom */}
                                            <AnimatePresence>
                                                {links.map((item, index) => (
                                                    <NavItem key={index}>
                                                        <motion.li
                                                            custom={index}
                                                            variants={prespective(index)}
                                                            initial="initial"
                                                            animate="enter"
                                                            exit="exit"
                                                        >
                                                            <Link
                                                                to={item.hash}
                                                                key={item.hash}
                                                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}

                                                                className={cn(
                                                                    "text-[46px] font-semibold hover:text-light-green text-black",
                                                                    item.name === activeSection && "text-green-500",
                                                                )}
                                                                onClick={() => {
                                                                    setActiveSection(item.name);
                                                                    setTimeOfLastClick(Date.now());
                                                                    closeMenu();
                                                                }}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </motion.li>
                                                    </NavItem>
                                                ))}
                                            </AnimatePresence>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* Language Switcher (Fixed at bottom) */}
                            <motion.div
                                className="p-8 pl-10 border-t border-gray-100 bg-white/90"
                                variants={slideIn(links.length + 1)}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                            >
                                <LanguageSwitcher />
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}