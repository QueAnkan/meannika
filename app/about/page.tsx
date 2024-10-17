"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className='relative py-32 px-4'>
            <h1 className='w-full text-center pb-16 text-green'>
                Vem är jag?
            </h1>
            <div className='grid grid-cols-2 gap-8 max-w-[1024px] mx-auto'>
                <article className='col-start-1 row-start-1  flex flex-col gap-8 text-purple'>
                    <cite className='text-3xl'>
                        “Ibland måste man låta ambitionerna vila”
                    </cite>
                    <p>
                        Jag har lätt för att ha höga ambitioner, och vill göra
                        allt! Det är bra, men innebär det också att man ibland
                        aldrig kommer igång. Som en kollega sa; jag är allt
                        eller inget.
                    </p>
                </article>
                <div className='col-start-1 col-span-2  row-start-1 row-span-2'>
                    <DotLottieReact
                        src='/Notes.lottie'
                        loop
                        autoplay
                        style={{}}
                    />
                </div>
                <article className='col-start-2 row-start-2 flex flex-col gap-8 text-brown'>
                    <h2 className=''>
                        Jag älskar att sjunga i kör och har gjort det större
                        delen av mitt liv.{" "}
                    </h2>
                    <p>
                        Jag började i slutet på 80-talet i det som blev
                        Krokajo. Där lärde jag mig sångarglädje, att musik är
                        lust och lekfullhet. <br />
                        <br /> Under tonåren sjöng jag i Nova Cantica i
                        Skoghall. Där fick jag lära mig disciplin, och att
                        alltid ge 100% när man ger sig in i något. <br />
                        <br />
                        När jag flyttade till Skåne var jag del av den
                        nyskapande kören Saxenborn Singers där jag fick utveckla
                        min sångteknik och vara del av flera
                        uruppföranden i samarbeten med kompositörer och
                        performance artister.
                    </p>
                </article>
                <article className='col-start-1 row-start-3 flex flex-col gap-8 text-purple'>
                    <h2 className=''>Naturen ger mig kraft</h2>
                    <p>
                        Naturen har alltid varit viktig för mig. Där hittar jag
                        lugnet och kan ladda batterierna. Doften av skog, suset
                        i träden och fågelkvitter. Men också att få använda det
                        som naturen ger genom bär, svamp och det som odlas i min
                        egen trädgård. Att få bo på landet har alltid lockat och
                        jag älskar att göra det! Jag följer årstidernas
                        växlingar, ser när fåglarna kommer på våren och när de
                        samlas för att flytta söderut på hösten.
                    </p>
                </article>
                <div className=' col-start-2 row-start-3'>
                    <Image
                        src='/flowers.jpg'
                        width={492.8}
                        height={326.4}
                        alt='Orange blommor i närbild'
                        className="rounded-sm ml-10 mt-10" 
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;


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
