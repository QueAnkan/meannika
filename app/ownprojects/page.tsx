import { ProjectItem } from "../components/ProjectItem";

const OwnProjectsPage = () => {
    return (
        <div className='relative pb-32 pt-20 min-h-svh'>
            <h1 className='w-full text-center pb-16 text-green'>
                Egna projekt
            </h1>
            <div className=' mx-auto'>
                <ul className=' flex flex-col gap-16 justify-center items-center xl:flex-row  xl:pt-12'>
                    {data.map((item) => (
                        <ProjectItem key={item.title} {...item} />
                    ))}
                </ul>
            </div>
            <div className='absolute right-24 bottom-52'>
                <p>Fler projekt kommer....</p>
            </div>
        </div>
    );
};

export default OwnProjectsPage;

const data = [
    {
        title: "Pack ´n check!",
        description:
            "Todo-app för att göra olika packlistor. Byggt med nextjs, tailwindcss och med responsiv design.",
        link: "	https://packncheck.vercel.app/",
    },
];
