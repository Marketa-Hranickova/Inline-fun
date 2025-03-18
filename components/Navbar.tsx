import Link from "next/link";
import Image from "next/image";
import {  } from 'next/font/google'

import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="flex flex-row justify-around pt-[25px] h-[10vh]  sticky top-0 z-50 ">
        <div>
            <Link href="./"><img className="w-[60px]" src="./logo.png" alt="logo" /></Link>
            
            
    
        </div>
        <div className="flex flex-row gap-7">
        <Link href="/tabory">Tábory</Link>
        <Link href="/kontakt">Soukromé lekce</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/instruktori">O nás</Link>
        <Link href="/instruktori">Přihláška</Link>
        </div>
    </div>
    </>
    
  )
}

export default Navbar