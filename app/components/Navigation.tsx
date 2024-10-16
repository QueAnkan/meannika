import Link from "next/link";

interface NavigationProps {
    // props
    title: string;
    link: string;
}

const Navigationlinks = ({ title, link }: NavigationProps) => (
    <li>
        <Link href={link}>{title}</Link>
    </li>
);

const Navigation = () => {
    return (
        <nav>
            <ul className='flex gap-16 w-full justify-center text-2xl text-blue'>
                {data.map((item) => (
                    <Navigationlinks key={item.title} {...item} />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;

const data = [
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
