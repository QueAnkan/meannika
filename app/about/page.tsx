const AboutPage = () => {
    return (
        <div className='py-32'>
            <h1 className='w-full text-center text-4xl pb-16 text-green'>
                Vem är jag?
            </h1>
            <div className='grid grid-cols-2 gap-8 max-w-[1024px] mx-auto'>
                <article className='col-start-1  flex flex-col gap-8 text-purple'>
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
                <article className='col-start-2 row-start-2 flex flex-col gap-8 text-brown'>
                    <h2 className='text-3xl'>
                        Jag älskar att sjunga i kör och har gjort det större
                        delen av mitt liv.{" "}
                    </h2>
                    <p>
                        Jag började i slutet på 80-talet i det som sedan blev
                        Krokajo. Där lärde jag mig sångarglädje, att musik är
                        lust och lekfullhet. Dessutom fick jag min första “lön”
                        när jag medverkade på inspelningen av Majas
                        Alfabetssånger! <br />
                        <br /> Under tonåren sjöng jag i Nova Cantica i
                        Skoghall. Där fick jag lära mig disciplin, och att
                        alltid ge 100% när man ger sig in i något. Jag fick
                        också uppleva fantastiska klanger av afrikansk musik,
                        med en resa runt i Tanzania som en av de största
                        upplevelserna. <br />
                        <br />
                        När jag flyttade till Skåne var jag del av den
                        nyskapande kören Saxenborn Singers där jag fick utveckla
                        min sångteknik och vara del av processen när man jobbar
                        konstnärligt med musiken genom flera intressanta
                        uruppföranden i samarbeten med kompositörer och
                        performance artister.
                    </p>
                </article>
                <article className='col-start-1 row-start-3 flex flex-col gap-8 text-purple'>
                    <h2 className='text-3xl'>Naturen ger mig kraft</h2>
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
            </div>
        </div>
    );
};

export default AboutPage;
