
import React from 'react'
import Form from "next/form";
import Image from 'next/image';
import { Playpen_Sans } from 'next/font/google';

const moiraiOne = Playpen_Sans({
    weight: '800', // Moirai One only has a single weight
    subsets: ['latin'], // Specify the subset(s) you need
  });

const Tabory = () => {
  return (
    <div className='h-[90vh] flex flex-col text-center justify-center'>
        <div className='flex flex-row text-center justify-center pt-[90px]'>
        <h1 className={` ${moiraiOne.className}  pb-[30px] uppercase text-4xl`}>Letos bohužel tábory nepořádáme </h1>
        <div className=" ml-[15px] bg-[url('/sad.png')] w-[32px] h-[32px] bg-cover mt-[5px]" ></div>
        </div>
    <p>Pokud byste měli zájem příští rok, zadejte svůj email a my vás budeme informovat o následujících akcích</p>
    
   <Form action="/" className="search-form">
   <input
                name="email"   
                required    
                className="mb-[15px] p-1 search-input border-1 rounded-lg w-[15vw] "
                placeholder='váš e-mail'
            />
            <button type="submit" className='rounded-xl mt-[30px] px-3 py-2 ml-[15px] bg-amber-600 w-[8vw] font-bold hover:shadow-2xl hover:scale-105'>
                    poslat
                </button>
   </Form>
    </div>
  )
}

export default Tabory