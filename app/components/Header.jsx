import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
  return (
	<header className='w-full fixed
	bg-transparent flex justify-start z-50'>
		<Link href='/' alt="Till startsidan" >
	 <div className=' flex  rounded-full w-20 h-20 overflow-hidden p-2 bg-blue m-4
	  '>
		<Image src='/silouett.webp' alt='logo' width={40} height={40} style={{width:"100%", height:"auto", margin:"8px 10px 8px 8px"}} />
	
		</div>
		</Link>
	</header>
  );
}
export default Header;
