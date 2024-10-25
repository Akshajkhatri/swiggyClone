import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
    const [toggle , setoggle] = useState(false);

    const showSideMenu =()=>{
        setoggle(true);
    }
    const hideSideMenu = ()=>{
        setoggle(false);
    }

    const links =[
        {
            icon: <CiSearch />,
            name:"Search"

        },
        {
            icon: <MdOutlineLocalOffer />,
            name:"Offers",
            sup: "New"

        },
        {
            icon: <FaHandsHelping />,
            name:"Help"

        },
        {
            icon: <FaSignInAlt />,
            name:"Sign In"

        },
        {
            icon: <CiShoppingCart />,
            name:"Cart",
            sup: "(4)"

        }

    ]
  return (
    <>

    <div className='stick top-0 black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{    
    opacity: toggle ? 1: 0,
    visibility: toggle ? "visible" : "hidden"
    }}>
        <div onClick={(e)=>{
            e.stopPropagation();

        }} className='w-[500px] z-[99999] bg-white h-full absolute duration-[400ms]'
         style={{
            left:toggle ? '0%': '-100%'}}
        ></div> 
    </div>

    <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 z-50 bg-white'>
        <div className='max-w-[1200px] mx-auto 
        flex items-center'>
            <div className='w-[100px]'>
                <img src="images/logo.png" className='w-full' alt="" />
            </div>
            <div className=''>
               <span className=' font-bold border-b-[3px] border-[#ff7402]'>Dabra </span>
                Gwalior MP, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline text-[#fc8019]' />
            </div>
            <nav className=' hidden md:flex list-none gap-10  font-semibold text-[18px] ml-auto'>
                {
                    links.map(
                        (link,index) =>{
                        return <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center'> 
        
                               {link.icon}
                               {link.name}
                               <sup className='text-[#ff1c02]'>{link.sup}</sup>
                            </li>

                        }
                    )
                }
               
               
            </nav>
        </div>

    </header>
    </>
  )
}
