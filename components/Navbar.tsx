'use client'
import Link from "next/link";
import Image from "next/image";
import {  } from 'next/font/google'
import { useState } from 'react';

import React from 'react'

const Navbar = () => {

  const [position, setPosition] = useState(false);
  return (
    <>
    {/*CLOSED*/}
    <div className={`h-[100vh] bg-amber-600 absolute ${position ? 'ml-[80vw]' : 'ml-[100vw]'} w-[20vw]   overflow-hidden z-40`}>
      <button onClick={() => setPosition(!position)} className="flex justify-end"><img className="w-[30px] mr-[30px] mt-[30px] cursor-pointer"  src="./close.png" alt="" /></button>
    
    <div className="flex flex-col justify-around gap-10 text-center h-[50vh] mt-[120px] uppercase font-bold">
        <Link href="/tabory">Tábory</Link>
        <Link href="/tabory">Výlety</Link>
        <Link href="/kontakt">Soukromé lekce</Link>
        <Link href="/instruktori">Náš tým</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/instruktori">Přihláška</Link>
        </div>
        <div className="pl-[15px] mt-[60px]">
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
        {/*CLOSED
        <div className="flex flex-col gap-7">
        <Link href="/tabory">Tábory</Link>
        <Link href="/kontakt">Soukromé lekce</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/instruktori">O nás</Link>
        <Link href="/instruktori">Přihláška</Link>
        </div>
        */}
    </div>
    </>
    
  )
}

export default Navbar