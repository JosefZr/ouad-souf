import { MdGroups } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBillTrendUp, FaRegChessKnight, FaRegChessQueen } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
// export const timelineData = [
//     {
//         logo: <MdGroups className=" h-10 w-12"/>,
//         title: "Private Dental Community",
//         descriptions: [
//             "Full privacy: A secure and private space for dental professionals.",
//             "Professional connections: Connect with dentists for advice, collaboration, or help.",
//             "Online marketplace: Compare prices and order materials from multiple stores."
//         ]
//         },
//         {
//         logo: <FaRegChessKnight />,
//         title: "Plan Like a Pro",
//         descriptions: [
//             "Daily planning: Easily schedule tasks and patient appointments.",
//             "Supply management: Track and manage your dental materials."
//         ]
//         },
//         {
//         logo: <GiTakeMyMoney />,
//         title: "Manage Your Finances",
//         descriptions: [
//             "Expense tracking: Monitor material costs.",
//             "Income management: Track your earnings daily, weekly, or yearly.",
//             "Payment reminders: Track patients and payments with automatic reminders."
//         ]
//         },
//         {
//         logo: <FaRegChessQueen />,
//         title: "Top Dentist Opportunity",
//         descriptions: [
//             "Explore top-level opportunities and recognition in your field."
//         ]
//         },
//         {
//         logo: <FaRegChessKnight />,
//         title: "Advanced Dental Courses",
//         descriptions: [
//             "Learn more: Courses in English and specialized topics like Implant Dentistry with French, Arabic subtitles.",
//             "Dental News: Get the latest trends and news in the dental world."
//         ]
//         },
//         {
//         logo: <FaMoneyBillTrendUp />,
//         title: "Business Growth Support",
//         descriptions: [
//             "Expert help to grow your online presence and social media, with special pricing."
//         ]
//         }
//     ];
export const useNavbarLinks = () => {
  const { t } = useTranslation();

  return [
    {
      name: t("navbar.home.name"),
      hash: t("navbar.home.hash"),
    },
    {
      name: t("navbar.services.name"),
      hash: t("navbar.services.hash"),
    },
    {
      name: t("navbar.us.name"),
      hash: t("navbar.us.hash"),
    },
    {
      name: t("navbar.contact.name"),
      hash: t("navbar.contact.hash"),
    },
  ];
};
export const useServices =()=>{
    const {t} = useTranslation();
        return{
              tenu: [
                {
                  titre: t("Services.tenu.mask3.title"),
                  content: t('Services.tenu.mask3.description'),
                  image: "/images/i4.jpg",
                  direction: "right"
                },
                {
                  titre: t("Services.tenu.Combinaison.title"),
                  content: t('Services.tenu.Combinaison.description'),
                  image: "/images/p1.jpg",
                  direction: "left"
                },
                {
                  titre: t("Services.tenu.Blouse.title"),
                  content: t('Services.tenu.Blouse.description'),
                  image: "/images/i9.jpg",
                  direction: "left"
                },
                {
                  titre: t("Services.tenu.Cap.title"),
                  content: t('Services.tenu.Cap.description'),
                  image: "/images/i8.jpg",
                  direction: "right"
                },
                {
                  titre: t("Services.tenu.Chaussure.title"),
                  content: t('Services.tenu.Chaussure.description'),
                  image: "/images/i10.png",
                  direction: "right"
                },
                {
                  titre: t("Services.tenu.Casaque.title"),
                  content: t('Services.tenu.Casaque.description'),
                  image: "/images/i11.jpg",
                  direction: "left"
                },
              ],
              sac: [
                {
                  titre: t("Services.sac.shirt.title"),
                  content: t('Services.sac.shirt.description'),
                  image: '/images/i2.jpg',
                  direction: "left"
                },
                {
                  titre: t("Services.sac.box.title"),
                  content: t('Services.sac.box.description'),
                  image: '/images/i6.jpg',
                  direction: "right"
                },
                {
                  titre: t("Services.sac.shopping.title"),
                  content: t('Services.sac.shopping.description'),
                  image: '/images/i12.jpg',
                  icon: "https://img.icons8.com/?size=100&id=TEEyuMyShFK0&format=png&color=214030",
                  direction: "left"
                },
                {
                  titre: t("Services.sac.caba.title"),
                  content: t('Services.sac.caba.description'),
                  image: '/images/i7.jpg',
                  direction: "right"
                },
              ],
               plus: [
                {
                  titre: t("Services.plus.gumy.title"),
                  content: t('Services.plus.gumy.description'),
                  image: '/images/p3.jpg',
                  direction: "right"
                },
                {
                  titre: t("Services.plus.Denture.title"),
                  content: t('Services.plus.Denture.description'),
                  image: '/images/p3.jpg',
                  direction: "right"
                },
                {
                  titre: t("Services.plus.Wisdom.title"),
                  content: t('Services.plus.Wisdom.description'),
                  image: '/images/p3.jpg',
                  direction: "left"
                },
                {
                  titre: t("Services.plus.minor.title"),
                  content: t('Services.plus.minor.description'),
                  image: '/images/p3.jpg',
                  icon: "https://img.icons8.com/?size=100&id=wpfUlRXFcAiU&format=png&color=214030",
                  direction: "left"
                },
              ],
        };
}