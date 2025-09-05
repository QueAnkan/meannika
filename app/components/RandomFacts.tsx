"use client"; // om du kör i Next.js app-router

import { useState } from "react";

interface Fact {
	title: string;
	description: string;
}
interface RandomFactProps {
	data: Fact[];
}

const RandomFact = ({data}: RandomFactProps) => {


  const [fact, setFact] = useState(data[0]); // Starta med första faktan

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setFact(data[randomIndex]);
	console.log("clicked");
  };

  return (
    <div className="p-4 text-center flex flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="px-4 py-2 mb-4 bg-green-600 text-blue rounded-lg bg-black hover:bg-green hover:text-black"
      >
        Slumpa fram fakta
      </button>
	  <div className="flex flex-col">


      <p className="text-brown">{fact.title}:</p>
      <p className=" text-green">{fact.description}</p>
    </div>
	  </div>
  );
};

export default RandomFact;


