import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navbar = () => {
	const[showLinks,setShowLinks] = useState(false)
	// console.log(showLinks);
  return (
    <div className="h-20 bg-gray-800 text-white px-14 lg:px-24 flex justify-between items-center">
		<h1 className="font-nav text-2xl lg:text-4xl">RESPONSIVE NAV</h1>

		<div className="flex gap-6">
			<ul className={`lg:static lg:translate-x-0 fixed top-24 left-96 w-full text-xl font-semibold font-nav2 flex flex-col lg:flex-row gap-6 duration-500 ease-in-out  ${showLinks? "translate-x-" : "translate-x-full"}`}>
			<li className="cursor-pointer">Home</li>
			<li className="cursor-pointer">About</li>
			<li className="cursor-pointer">Career</li>
			<li className="cursor-pointer">Login</li>
			<li className="cursor-pointer">Sighup</li>
		</ul>
		<div className="cursor-pointer lg:hidden" onClick={() => {setShowLinks(open => !open)}}>
			{
				showLinks ? <CloseIcon/> : <MenuIcon/>
			}
			
		</div>
		</div>
	</div>
	
  );
};

export default Navbar