import Link from 'next/link';
import {IoHome as Home} from 'react-icons/io5';

const Header = () => {
  return (
	<header className='w-full fixed
	bg-transparent flex justify-end'>
		<Link href='/'>
	 <div className='
	 p-8 '>
		<Home fontSize={36} color={'#6ee5ec'}/></div>
		</Link>
	</header>
  );
}
export default Header;
