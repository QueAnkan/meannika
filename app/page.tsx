"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PresentationListItem } from "./components/PresentationListItem";


export default function Home() {
    return (
        <div className='pb-32 pt-20 max-w-screen'>
            <main className=' flex flex-col w-full'>
                <div className='min-h-svh px-8 sm:px-28'>
                    <div className='flex flex-col place-items-center mx-auto sm:grid grid-cols-12 sm:gap-2 max-w-5xl'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            /* animate={{ x: 0, y: 0, opacity: 1 }}
                            initial={{ x: -5000, y: -4000, opacity: 0 }} */
                            transition={{
                                duration: 1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            className='hidden sm:flex items-center max-w-80 min-w-60 h-fit rounded-sm overflow-hidden col-span-3'
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
                                duration: 2,
                                // delay: 0.2,
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
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            /* animate={{ x: 0, y: 0 }}
                            initial={{ x: 5000, y: 4000 }} */
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            className='hidden sm:flex items-center max-w-80 min-w-60 h-fit rounded-sm overflow-hidden col-span-3'
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
                            delay: 2,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className='flex flex-col gap-8 mx-auto p-8 md:mt-16 max-w-[550px] text-purple text-xl border border-black bg-black rounded-xl'
                    >
                        <div className='col-start-1'>
                            <p>
                                2006 tog jag klivet ut som urmakargesäll. 2013
                                kunde jag titulera mig mästare och 2021 kändes
                                det som det var dags att gå vidare!
                            </p>
                        </div>
                        <div className='col-start-2 row-start-1'>
                            <p>
                                Hösten 2022 påbörjade jag en ny resa och i juni
                                2024 fick jag ut mitt examensbevis som nybliven
                                frontend-utvecklare.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className=' mx-auto'>
                    <div className='flex flex-col items-center gap-8 px-4 lg:flex-row'>
                        <div className='rounded-xl overflow-hidden lg:h-96'>
                            <Image
                                src='/selfportrait.jpg'
                                alt='Foto av Annika utomhus.'
                                width={150}
                                height={0}
                                style={{ height: "100%", width: "auto" }}
                            />
                        </div>
                        <ul className='text-brown text-xl flex flex-col gap-y-3 lg:self-end'>
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
        title: "Yrkestitel",
        description: "Frontend-utvecklare, Urmakarmästare",
    },
    {
        title: "Styrkor",
        description: "Envis, lojal, snäll.",
    },
    {
        title: "Intresserad av",
        description: "Kommunikation, språk och bild.",
    },
    {
        title: "Gillar med frontend",
        description: "Kombinationen av design och teknik.",
    },
    {
        title: "Vill gärna jobba med i framtiden",
        description: "Tillgänglighet",
    },
    /*{title:"",
description: "",}, */
];
