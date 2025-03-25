
import React from 'react'
import Link from 'next/link';
import { Playpen_Sans } from 'next/font/google';

const moiraiOne = Playpen_Sans({
    weight: '800', // Moirai One only has a single weight
    subsets: ['latin'], // Specify the subset(s) you need
  });

const Tabory = () => {
  return (
    <div className='h-[90vh] px-[120px] justify-around '>
      <div className='flex flex-col justify-center text-center'>
        <div className='text-center'>
        <h1 className={` ${moiraiOne.className}  pb-[30px] uppercase text-4xl`}>soukromé lekce</h1>
        </div>
    <p className='text-lg'>Pokud Vám vyhovuje spíše individuální přístup, pak jsou tyto lekce právě pro Vás.</p>
<p className='text-lg mb-[30px]'>Individuální lekce jsou určeny pro začátečníky i pokročilé od 5 let.</p>

<div className='flex flex-row justify-between align-middle'>
  <div className=''>
  <h1 className={` ${moiraiOne.className}  pb-[15px] uppercase text-xl`}>Ceník</h1>
  <table className='text-left  border-2'>
      <tbody>
        <tr className=''><td className='border-1 p-[10px]'>60 minut pro jednotlivce</td><td className='border-1 p-[10px]'>500 Kč</td></tr>
        <tr><td className='border-1 p-[10px]' >60 minut pro skupinu 2 a více lidí</td><td className='border-1 p-[10px]'> 300 Kč/osoba</td></tr>
        <tr><td className='border-1 p-[10px]'>balíček pěti lekcí po 60 minutách pro jednotlivce</td><td className='border-1 p-[10px]'>2 100 Kč</td></tr>
        <tr><td className='border-1 p-[10px]'>balíček pěti lekcí po 60 minutách pro skupinu 2 a více lidí</td><td className='border-1 p-[10px]'>1 200 Kč/osoba</td></tr>
        <tr><td className='border-1 p-[10px]'>balíček deseti lekcí po 60 minutách pro jednotlivce</td><td className='border-1 p-[10px]'>4 100 Kč</td></tr>
        <tr><td className='border-1 p-[10px]'>balíček deseti lekcí po 60 minutách pro skupinu 2 a více lidí</td><td className='border-1 p-[10px]'>2 100 Kč/osoba</td></tr>
        <tr><td className='border-1 p-[10px]'>jiné požadavky</td><td className='border-1 p-[10px]'>po domluvě</td></tr>
      </tbody>
    </table>
    </div>
    <div>
      <div className="bg-[url('/soukro.jpg')] w-[40vw]  h-full bg-center bg-cover rounded-3xl"></div>
      
    </div>
    </div>
    <h1 className='text-lg mt-[30px]' >V případě zájmu nás můžete kontaktovat přes e-mail nebo telefonicky.</h1>
      <Link href="/kontakt">
        <button  className='rounded-xl mt-[15px] px-3 py-2 bg-amber-600 w-[8vw] font-bold hover:shadow-2xl hover:scale-105'>KONTAKT</button>
        </Link>

</div>
    
   
    </div>
  )
}

export default Tabory