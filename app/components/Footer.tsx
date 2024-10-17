import {Navigation} from "./Navigation";


const Footer = () => {
  return (
	<footer className="hidden w-full fixed bottom-0 bg-background py-10 border-t border-[#0b0b0b] md:block">
	  <div><Navigation/></div>
	</footer>
  );
};	

export default Footer;