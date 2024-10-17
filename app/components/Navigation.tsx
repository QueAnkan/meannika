"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavigationProps {
    // props
    title: string;
    link: string;
}

 export const Navigationlinks = ({ title, link }: NavigationProps) => (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href={link}>{title}</Link>
    </motion.li>
);



export const Navigation = () => {
    return (
        <nav>
            <motion.ul className='flex gap-16 w-full justify-center text-2xl text-blue'
            >
                {navigationData.map((item) => (
                    <Navigationlinks key={item.title} {...item} />
                ))}
            </motion.ul>
        </nav>
    );
};

// export default Navigation;

export const navigationData = [
    {
        title: "Mer om mig",
        link: "/about",
    },
    {
        title: "CV",
        link: "/cv",
    },
    {
        title: "Skolprojekt",
        link: "/schoolprojects",
    },
    {
        title: "Egna projekt",
        link: "/ownprojects",
    },
];
