"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className='relative pb-32 pt-20 max-w-screen '>
            <h1 className='w-full text-center pb-16 text-green'>Vem är jag?</h1>
            <div className='flex flex-col md:grid grid-cols-2 gap-12 px-4 md:gap-8 w-full max-w-[1024px] md:mx-auto'>
                <article className='col-start-1 row-start-1  flex flex-col gap-8 text-purple text-center md:text-left'>
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
                <div className='hidden md:block md:col-start-1 col-span-2  row-start-1 row-span-2'>
                    <DotLottieReact
                        src='/Notes.lottie'
                        loop
                        autoplay
                        style={{}}
                    />
                </div>
                <article className=' relative col-start-2 row-start-2 flex flex-col gap-8 text-brown overflow-hidden text-center md:text-left'>
                    <div className='absolute z-1 h-full w-[600px] md:hidden '>
                        <DotLottieReact
                            src='/Notes.lottie'
                            loop
                            autoplay
                            style={{}}
                        />
                    </div>
                    <h2 className='z-20'>
                        Jag älskar att sjunga i kör och har gjort det större
                        delen av mitt liv.{" "}
                    </h2>
                    <p className='z-20'>
                        Jag började i slutet på 80-talet i det som blev Krokajo.
                        Där lärde jag mig sångarglädje, att musik är lust och
                        lekfullhet. <br />
                        <br /> Under tonåren sjöng jag i Nova Cantica i
                        Skoghall. Där fick jag lära mig disciplin, och att
                        alltid ge 100% när man ger sig in i något. <br />
                        <br />
                        När jag flyttade till Skåne var jag del av den
                        nyskapande kören Saxenborn Singers där jag fick utveckla
                        min sångteknik och vara del av flera uruppföranden i
                        samarbeten med kompositörer och performance artister.
                    </p>
                </article>
                <article className='col-start-1 col-end-3 row-start-3 flex flex-col gap-8 text-purple text-center md:text-left'>
                    <h2 className=''>Naturen ger mig kraft</h2>
                    <p>
                        Naturen har alltid varit viktig för mig. Där hittar jag
                        lugnet och kan ladda batterierna.
                        <br />
                        <br /> Doften av skog, suset i träden och fågelkvitter.
                        Möjlighten att använda det som naturen ger genom bär,
                        svamp och det som odlas i min egen trädgård. <br />
                        <br />
                        Att få bo på landet har alltid lockat och jag älskar att
                        göra det! Jag följer årstidernas växlingar, ser när
                        fåglarna kommer på våren och när de samlas för att
                        flytta söderut på hösten.
                    </p>
                </article>
                <div className=' col-start-2 row-start-3'></div>
            </div>
            
                <div className='aboslute left-0 top-0'>
                    <div className='flex gap-16 justify-center items-center flex-col mx-auto mt-8 px-8 py-16 w-screen bg-black md:flex-row'>
                        {imagedata.map((item) => (
                            <ImageContainer key={item.src} {...item} />
                        ))}
                    </div>
                </div>
           
        </div>
    );
};

export default AboutPage;

interface ImageContainerProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const ImageContainer = ({ src, width, height, alt }: ImageContainerProps) => {
    return (
        <div className='max-w-[450px]'>
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                className='rounded-sm'
            />
        </div>
    );
};

const imagedata = [
    {
        src: "/field.jpg",
        width: 492.8,
        height: 326.4,
        alt: "Dimhöljt fält i solnedgång",
    },
    {
        src: "/flowers.jpg",
        width: 492.8,
        height: 326.4,
        alt: "Orange blommor i närbild",
    },
    {
        src: "/frosty.jpg",
        width: 492.8,
        height: 326.4,
        alt: "Vinterlandskap genom frostig ruta",
    },
];

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
