"use client";

import { useState } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

const CvPage = () => {
    return (
        <div className='pb-32 pt-20 min-h-svh'>
            <h1 className='w-full text-center text-green pb-16'>CV</h1>
            <div className='w-full mx-auto'>
                <ul className='flex flex-col gap-16 justify-center mx-auto px-8 w-fit max-w-screen-lg '>
                    {data.map((item) => (
                        <CVItems key={item.heading} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CvPage;

interface CVItemsProps {
    heading: string;

    item?: {
        title: string;
        year?: string;
        place?: string;
        description?: string;
        link?: string;
        linkName?: string;
    }[];
}

const CVItems = ({ heading, item }: CVItemsProps) => {
    const [show, setShow] = useState(false);

    const showClass = show ? "block" : "hidden";

    const open = () => {
        setShow(!show);
    };

    return (
        <li className='flex-1 flex flex-col justify-center items-center text-green'>
            <div className='min-w-72 w-80 md:w-96 sm:max-w-[600px] h-fit p-4 rounded-md border border-gray-500'>
                <div
                    onClick={open}
                    className='cursor-pointer w-full flex justify-between items-center gap-3'
                >
                    <h3>{heading}</h3>
                    <span className=' pb-1'>
                        {!show && <RiArrowDownWideLine />}
                        {show && (
                            <RiArrowDownWideLine className='transform rotate-180' />
                        )}
                    </span>
                </div>
                <ul className={`${showClass} w-full pt-6 flex flex-col gap-6`}>
                    {item?.map((item) => (
                        <li key={item.title} className=' flex flex-col gap-2'>
                            <div className=' flex gap-2 text-purple'>
                                <h4 className='max-w-[350px] text-wrap'>
                                    {item.title}
                                </h4>

                                <span className='inline-block w-px bg-green'></span>
                                <p className='text-nowrap'>{item.year}</p>
                            </div>
                            <p className=' text-purple'>{item.place}</p>
                            <p className=' text-purple'>{item.description}</p>
                            <a
                                href={item.link}
                                target='_blank'
                                className='h-4 text-blue max-w-full text-wrap'
                            >
                                {item.linkName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

const data = [
    {
        heading: "Arbetslivserfarenhet",
        item: [
            {
                title: "Urmakare",
                year: "2006 - 2021",
                place: "Bergströms Ur Malmö",
                description:
                    "Bedömning, reparationer och service av klockor och smycken, ansvar för prissättning av service och reservdelar, kundkontakt, lagerhantering, orderhantering, underhåll av maskinpark och verktyg.",
            },
            {
                title: "Lokalvårdare (timanställning)",
                year: "2003 - 2005",
                place: "ISS Facility Services, Linköping",
                description:
                    "Städning och underhåll av offentliga utrymmen (t ex parkeringshus), utrymmen inom tillverkande industri, kontor (inkl. verksamheter med viss säkerhetsklassning), förskole- och skolmiljöer",
            },
        ],
    },
    {
        heading: "Utbildning",
        item: [
            {
                title: "Frontend-utvecklare",
                year: "2022 - 2024",
                place: "Folkuniversitetet Väst, Karlstad",
                description:
                    "Kurser: UX/UI, HTML/CSS, agila arbetssätt, Frontendramverk, Backend (Node.js), molntjänster (AWS)",
            },
            {
                title: "Mästarutbildning",
                year: "2014",
                place: "Leksands folkhögskola, Leksand/på distans",
                description:
                    "Grundläggande kurser i ekonomi, juridik, enklare marknadsföring, företagsutveckling och ledarskap",
            },
            {
                title: "Urmakare",
                year: "2003 - 2006",
                place: "Sveriges Urmakareförbunds skola, Borensberg",
                description:
                    "Praktisk och teoretisk utbildning i urmakeri (finmekanik), ritningslära, materiallära.",
            },
            {
                title: "Kulturvetenskap basår ",
                year: "2000 - 2002",
                place: "Linköpings Universitet, Linköping",
                description:
                    "A-kurs i historia, konstvetenskap, litteraturvetenskap och filosofi",
            },
            {
                title: "Specialutformat samhällsprogram inriktning multimedia",
                year: " 1997 - 2000",
                place: "Sundsta/Älvkullegymnasiet, Karlstad",
                description:
                    "Samhällsprogram där fördjupningskurser bytts ut mot kurser inom media och kommunikationsvetenskap",
            },
        ],
    },

    {
        heading: "Kurser",
        item: [
            {
                title: "Svenska Språket A-kurs ",
                year: "2002",
                place: "Linköpings Universitet, Linköping",
                description: "",
            },
        ],
    },
    {
        heading: "Teknisk kompetens urmakeri",
        item: [
            {
                title: "Finmekanik",
                description:
                    "Erfarenhet av bedömning av slitagedelar, demontering/montering och funktionstester av mekaniska komponenter och konstruktioner med hög precision.",
            },
            {
                title: "Ritningsläsning",
                description:
                    "Läst och tolkat tekniska ritningar i olika format, inklusive 2D-ritningar och 3D-modeller. Förståelse för måttsättning, toleranser och materialspecifikationer.",
            },
            {
                title: "Materiallära",
                description:
                    "Förståelse för olika material och deras egenskaper, främst metaller och legeringar. Kunskap om materialval baserat på hållbarhet, korrosionsbeständighet och mekaniska egenskaper.",
            },
            {
                title: "Verktygshantering",
                description:
                    "Erfarenhet av att använda specialiserade verktyg och maskiner för precisionsarbete, inklusive stereolupp, korntänger, skruvmejslar och andra finmekaniska verktyg.",
            },
            {
                title: "Bearbetning av metaller",
                description:
                    "Kunskap om olika bearbetningstekniker för metaller, inklusive svarvning, polering, slipning och sandblästring. Förståelse för verktyg och maskiner som används inom metallbearbetning.",
            },
        ],
    },
    {
        heading: "Teknisk kompetens IT",
        item: [
            {
                title: "Programmering",
                description:
                    "HTML, CSS, JavaScript och TypeScript. Förståelse för algoritmer och datastrukturer.",
            },
            {
                title: "Webbutveckling",
                description:
                    "React och Next.js för frontend och fullstack. Node.js och Express.js för backend. Erfarenhet av att bygga responsiva och användarvänliga gränssnitt.",
            },
            {
                title: "Dokumentationsverktyg / arbetsmetoder",
                description:
                    "GitHub för samarbete och versionshantering. Erfarenhet av agila arbetsmetoder (Scrum, Scrumban) och projektverktyg som Jira och Trello.",
            },
            {
                title: "Visualisering / designverktyg",
                description:
                    "Figma, Canva, Tailwind CSS, Framer Motion. Kunskap om UX-principer, målgruppsanalyser och användartester. Erfarenhet av data-visualisering med Chart.js.",
            },
            {
                title: "Molntjänster",
                description:
                    "Erfarenhet av AWS S3, Lambda, API Gateway, DynamoDB. Grundläggande förståelse för molninfrastruktur och tjänster.",
            },
        ],
    },
    {
        heading: "Språkkunskaper",
        item: [
            {
                title: "Svenska",
                description: "Modersmål",
            },
            {
                title: "Engelska",
                description: "Goda kunskaper i tal och skrift",
            },
            {
                title: "Franska",
                description: "Nybörjare",
            },
        ],
    },
    {
        heading: "Länkar",
        item: [
            {
                title: "LinkedIn",
                link: "https://www.linkedin.com/in/annika-nylin",
                linkName: "Annika Nylin",
            },
            {
                title: "Github",
                link: "https://github.com/QueAnkan",
                linkName: "QueAnkan",
            },
        ],
    },
];
