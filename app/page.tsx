"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface PresentationListItemProps {
    title: string;
    description: string;
}

const PresentationListItem = ({
    title,
    description,
}: PresentationListItemProps) => (
    <li className='flex flex-col lg:gap-3 lg:flex-row'>
        <h4 className='text-green'>{title}: </h4>
        <p>{description}</p>
    </li>
);

export default function Home() {
    return (
        <div className='pb-32 pt-16 max-w-screen'>
            <main className=' flex flex-col w-full'>
                <div className='min-h-svh px-8 sm:px-28'>
                    <div className='flex flex-col place-items-center mx-auto sm:grid grid-cols-12 sm:gap-8 '>
                        <motion.div
                            animate={{ x: 0 }}
                            initial={{ x: -5000 }}
                            transition={{
                                duration: 2,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            className='hidden sm:flex items-center max-w-80 min-w-60 h-fit rounded-xl overflow-hidden col-span-3'
                        >
                            <Image
                                src='/train-gear.jpg'
                                alt='urverk'
                                width={320}
                                height={0}
                                style={{
                                    height: "auto",
                                }}
                                className='h-full w-full'
                            />
                        </motion.div>
                        <motion.div
                            animate={{ x: 0 }}
                            initial={{ x: -5000 }}
                            transition={{
                                duration: 4,
                                delay: 0.6,
                                easing: "easeOut",
                                // ease: [0, 0.71, 0.2, 1.01],
                            }}
                            className='pt-20 pb-10 flex justify-center items-center col-span-6 z-20 sm:px-2 sm:pt-0 sm:pb-0 sm:w-fit sm:backgroundArrow  
                        '
                        >
                            <h1 className=' text-green text-wrap text-3xl sm:text-2xl md:text-3xl text-center sm:text-nowrap sm:text-background '>
                                Från gammalt hantverk till nytt
                            </h1>
                        </motion.div>
                        <motion.div
                            animate={{ x: 0 }}
                            initial={{ x: 5000 }}
                            transition={{
                                duration: 2,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            className='hidden sm:flex items-center max-w-80 min-w-60 h-fit rounded-xl overflow-hidden col-span-3'
                        >
                            <Image
                                src='/code.jpg'
                                alt=''
                                width={320}
                                height={0}
                                style={{ height: "auto" }}
                                className='h-full w-full'
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 4,
                            delay: 4,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className='grid grid-cols-2 mx-auto py-12 max-w-[550px] text-purple'
                    >
                        <div className='col-start-1'>
                            <p>
                                2006 tog jag klivet ut som urmakargesäll. 2013
                                kunde jag titulera mig mästare och 2021 kändes
                                det som det var dags att gå vidare!
                            </p>
                        </div>
                        <div className='col-start-2 row-start-2'>
                            <p>
                                Hösten 2022 påbörjade jag en ny resa och i juni
                                2024 fick jag ut mitt examensbevis som nybliven
                                frontend-utvecklare.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className='min-h-svh mx-auto'>
                    <div className='flex flex-col items-center gap-4 px-4'>
                        <div className='rounded-xl overflow-hidden self-start'>
                            <Image
                                src='/selfportrait.jpg'
                                alt='Foto av Annika utomhus.'
                                width={150}
                                height={0}
                                style={{ height: "auto" }}
                            />
                        </div>
                        <ul className='text-brown flex flex-col gap-y-3'>
                            {data.map((item) => (
                                <PresentationListItem
                                    key={item.title}
                                    {...item}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

const data = [
    {
        title: "Namn",
        description: "Annika Nylin",
    },
    {
        title: "Kallas också för",
        description: "Ankan",
    },
    {
        title: "En riktig sommarbukett måste innehålla",
        description: "Blåklockor och humleblomster",
    },

    {
        title: "Konstnärer jag uppskattar",
        description: "René Magritte, Kandinsky, Mats Bäcker, Eric Johansson",
    },

    {
        title: "Favoritförfattare",
        description: "Paul Auster, Maria Gripe",
    },
    {
        title: "Oanad talang",
        description: "Kan binda flugor men har aldrig flugfiskat!",
    },
];
