import Link from "next/link";

const Navigation = () => {		
	return (
		<nav>
			<ul className="flex gap-16 w-full justify-center text-3xl text-blue">
				<li><Link href="/about">Privat</Link></li>
				<li><Link href="/cv">CV</Link></li>
				<li><Link href="/ schoolprojects">Skolprojekt</Link></li>
				<li><Link href="/ownprojects">Egna projekt</Link></li>
			</ul>
		</nav>
	);
}

export default Navigation;