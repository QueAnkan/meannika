"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import  { Navigationlinks, navigationData } from './Navigation';


const Header = () => {
  return (
	<header className='absolute w-full h-28 
	bg-transparent flex justify-between items-center z-50'>
		<Link href='/' alt="Till startsidan" >
	 		<div className=' flex  rounded-full w-20 h-20 overflow-hidden p-2 bg-blue m-4
	  		'>
				<Image src='/silouett.webp' alt='logo' width={40} height={40} style={{width:"100%", height:"auto", margin:"8px 10px 8px 8px"}} />
	
			</div>
		</Link>
		<div className=' relative z-60 w-fit h-full'>
			<Hamburger/>
		</div> 
	</header>
  );
}
export default Header;


const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		if(!isOpen){
			setIsOpen(true);
		}else{
			setIsOpen(false);
		}
	}
	
	return (
		

		<div className='z-60 w-fit'>
			
			<div onClick={handleClick} className=' absolute  m-10 right-0 flex flex-col justify-between h-6 w-8 cursor-pointer '>
				<motion.div 
				animate={isOpen ? {rotate: 45, translateY: 10} : {rotate: 0, translateY: 0}}
				className='h-1 w-full rounded-full bg-blue '></motion.div>
				<motion.div 
				animate={isOpen ? {opacity: 0} : {opacity: 1}}
				className='h-1 w-full rounded-full bg-blue'></motion.div>
				<motion.div 
				animate={isOpen ? {rotate: -45, translateY: -10} : {rotate: 0, translateY: 0}}
				className='h-1 w-full rounded-full bg-blue'></motion.div>
			</div>
			<div className='z-10'>{isOpen && <Menu/>}</div>
		</div>
	)
}

const Menu = ({handleClick}) => {
	return (
		<div className='w-fit h-svh pt-20
		 bg-black'>
			 <motion.ul className=' flex flex-col gap-8  p-16 h-svh w-80 bg-black justify-start items-left text-left text-2xl text-blue'
            >
                {navigationData.map((item) => (
                    <Navigationlinks key={item.title} {...item} onClick={handleClick} />
                ))}
            </motion.ul>
		</div>
	)
}