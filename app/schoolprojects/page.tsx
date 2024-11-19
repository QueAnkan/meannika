
import { ProjectItem } from "../components/ProjectItem";


const SchoolProjectsPage = () => {
    
    return (
        <div className='relative pb-32 pt-20 mx-2 min-h-svh'>
            <h1 className='w-full text-center pb-16 text-green'>Skolprojekt</h1>
            <div className=" mx-auto">
                <ul className=" flex flex-col gap-16 justify-center items-center 2xl:flex-row 2xl:items-start  xl:pt-12">
                    {data.map((item) => (
                        <ProjectItem key={item.title} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SchoolProjectsPage;

const data = [
    {
        title: "Moviestats",
        description:
            "Individuellt projekt (betygsatt). Överdrivna animationer med framer motion och presentation av statistik med hjälp av chart.js.",
        link: "https://queankan.github.io/moviestats/#/",
        
    },
    {
        title: "Pokémon team manager",
        description:
            "Individuellt projekt (betygsatt). Byggt med Vanilla javaScript och med användning av publikt API.",
        link: "https://queankan.github.io/pokemon-team-manager/",
    },
    {
        title: "Leksaksbutiken",
        description:
            "Individuellt projekt (betygsatt) i form av webbshop med hjälp av API. Byggt med react, användning av responsiv design, css grid, routing och statehantering.",
        link: "https://queankan.github.io/Leksaksbutiken/",
    },
];
console.log(data);
