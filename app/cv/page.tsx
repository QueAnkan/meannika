"use client";

import { useState } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

const CvPage = () => {
    return (
        <div className='pb-32 pt-20 min-h-svh'>
            <h1 className='w-full text-center text-green pb-16'>CV</h1>
            <div className='w-full mx-auto'>
                <ul className='flex flex-wrap gap-16 justify-center mx-auto px-8 w-fit max-w-screen-lg '>
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
            <div className='w-96 sm:w-[600px] h-fit p-4 rounded-md border border-gray-500'>
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
                                <p className="text-nowrap">{item.year}</p>
                            </div>
                            <p className=' text-purple'>{item.place}</p>
                            <p className=' text-purple'>{item.description}</p>
                            <a
                                href={item.link}
                                target='_blank'
                                className='h-4 text-blue'
                            >
                                {item.link}
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
                year: " 2006 - 2021",
                place: "Bergströms Ur Malmö",
                description: "",
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
                description: "",
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
        heading: "Språkkunskaper",
        item: [
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
            },
            {
                title: "Github",
                link: "https://github.com/QueAnkan",
            },
        ],
    },
];
