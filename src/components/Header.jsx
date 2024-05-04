import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const navigate = useNavigate();
    const links = [
        { name: "Home", link: "/about" },
        { name: "Leaderboard", link: "/ourServises" },
        { name: "Daily Quit", link: "/portfolio" },
        { name: "Genre", link: "/blog" },
    ];
    const iconStyle = {
        color: 'blue',
        fontSize: '20px',
      };
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className=' w-[90%] mx-auto  '>
            <div className='md:flex items-center justify-between bg-transparent py-4 md:px-10  flex mx-auto sm:w-[90%]'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <FaBookOpen className='w-7 h-7 text-blue-600'/>
                    <span className='text-[#070f4e]'>Story</span>
                </div>
                {/* Menu icon */}
                <div onClick={toggleMenu} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <ImCross style={iconStyle}/> : <GiHamburgerMenu style={iconStyle}/>}
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent mt-4 md:z-auto z-20 left-4 sm:left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {links.map((link, index) => (
                        <li key={index} className='md:ml-8 md:my-0 my-3 font-semibold'>
                            <a href={link.link} className='text-[#070f4e] hover:text-[#f83e4b]  duration-200'>{link.name}</a>
                        </li>
                    ))}
                    
                </ul>
                {/* button */}
                <button className='btn bg-[#552bff]  text-white md:ml-8 font-semibold px-2 py-1 rounded-full duration-500 md:static' onClick={() => navigate('/getInTouch')}>Sign Out</button>
            </div>
         
        </div>
    );
};

export default Header;
