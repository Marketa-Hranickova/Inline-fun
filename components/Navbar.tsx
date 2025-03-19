'use client'
import Link from "next/link";

import {  } from 'next/font/google'
import { useState } from 'react';


import React from 'react'

const Navbar = () => {

  const [position, setPosition] = useState(false);
  return (
    <>
    {/*CLOSED*/}
    <div className={` bg-amber-600 shadow-2xl shadow-gray-800 h-screen fixed ml-[80vw] top-0 ${position ? 'translate-x-0' : 'translate-x-[21vw]'} w-[20vw]   overflow-hidden z-40 transition-transform duration-300 ease-in-out`}>
      <button onClick={() => setPosition(!position)} className="flex justify-end"><img className="w-[25px] mt-[27px] ml-[14vw] cursor-pointer"  src="./close.png" alt="" /></button>

    <div className="flex flex-col justify-between gap-10 text-center h-[50vh] mt-[120px] uppercase font-bold">
    <Link href="/" onClick={() => setPosition(!position)}>Domů</Link>
        <Link href="/tabory" onClick={() => setPosition(!position)}>Tábory</Link>
        <Link href="/tabory" onClick={() => setPosition(!position)}>Výlety</Link>
        <Link href="/kontakt" onClick={() => setPosition(!position)}>Soukromé lekce</Link>
        <Link href="/instruktori" onClick={() => setPosition(!position)}>Náš tým</Link>
        <Link href="/kontakt" onClick={() => setPosition(!position)}>Kontakt</Link>
        <Link href="/prihlaska" onClick={() => setPosition(!position)}>Přihláška</Link>
        </div>
        <div className="pl-[30px] mt-[13vh]">
        <p>ig: bejevoiwej</p>
        <p>ig: bejevoiwej</p>
        <p>ig: bejevoiwej</p>
        <p>ig: bejevoiwej</p>
        </div>
        </div>

    <div className="flex flex-row justify-between px-[60px] pt-[25px] h-[10vh]  sticky top-0  ">
        <div>
            <Link href="./"><img className="w-[60px]" src="./logo.png" alt="logo" /></Link>
            
            
    
        </div>
        <div>
          <button onClick={() => setPosition(!position)}> <img className="w-[30px] cursor-pointer"  src="./menus.png" alt="" /></button>

          
        </div>
    </div>
    </>
    
  )
}

export default Navbar