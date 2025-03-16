import Navbar from '@/components/Navbar'
import React from 'react'
import { Playpen_Sans } from 'next/font/google';

// Load the Moirai One font
const moiraiOne = Playpen_Sans({
  weight: '800', // Moirai One only has a single weight
  subsets: ['latin'], // Specify the subset(s) you need
});



const page = () => {
  return (
    <>
    {/* HERO */}
    <div className='flex flex-row h-[90vh] overflow-y-scroll snap-y snap-mandatory snap-start px-[120px]'>
      
      <div className='justify-center flex flex-col '>
        <h1 className={`${moiraiOne.className} text-9xl w-[50vw] `}>IN-LINE FUN</h1>
        <p className='mt-[30px] text-2xl'>Tábory pro všechny nadšené bruslaře</p>
      </div > 
      <div>
        <img className='shadow-lg shadow-gray-800  object-cover absolute w-[280px] h-[280px] mt-[30px] ml-[50px] rounded-3xl z-20' src="./holkazepredu.jpeg" alt="" />
        <img className='shadow-lg shadow-gray-800  object-cover absolute w-[250px] h-[250px] mt-[250px] ml-[250px] rounded-3xl z-10' src="./deckavylet.jpeg" alt="" />
        <img className='shadow-lg shadow-gray-800 object-cover absolute w-[300px] h-[300px] mt-[330px] ml-[-20px] rounded-3xl' src="./skupina.jpeg" alt="" />
        
        </div>
      </div>

      {/* ujisteni */}
      <div className="">
      <img className='absolute' src="./spodnibrusle" alt="" />
      <div className="h-screen grid grid-cols-3 grid-rows-2 gap-[40px] py-[30px] snap-start  px-[120px] ">
        <div className='rounded-3xl bg-black/[0.5] text-center flex flex-col justify-center'> 
          <h1 className={`${moiraiOne.className} text-xl`}>Možnost domluvy</h1>
          <p className='opacity-0 hover:opacity-100 pt-[15px] mx-3'>Má vaše dítě dietu, strach z vystupování nebo alergie? Není problém! Určitě se dokážeme domluvit a program nebo jídelníček pro dítě poupravit.</p>
        </div>
        
        <div className={` ${moiraiOne.className} rounded-3xl text-center flex flex-col justify-center text-4xl`}> 
          <h1>CO MŮŽETE OČEKÁVAT</h1>
        </div>
       
        <div className='rounded-3xl bg-black opacity-50'> 
          <h1>bla bla</h1>
          <p>cwoehevouerhvoiwehvoid fovihrwioh eiohbrioebhiof heihri herighio heior</p>
        </div>
        <div className='rounded-3xl bg-black opacity-50'> 
          <h1>bla bla</h1>
          <p>cwoehevouerhvoiwehvoid fovihrwioh eiohbrioebhiof heihri herighio heior</p>
        </div>
        <div className='rounded-3xl bg-black opacity-50'> 
          <h1>bla bla</h1>
          <p>cwoehevouerhvoiwehvoid fovihrwioh eiohbrioebhiof heihri herighio heior</p>
        </div>
        <div className='rounded-3xl bg-black opacity-50'> 
          <h1>bla bla</h1>
          <p>cwoehevouerhvoiwehvoid fovihrwioh eiohbrioebhiof heihri herighio heior</p>
        </div>
        </div>
        </div>

        {/* Nase akce */}
        <div className='h-screen flex flex-row justify-around'>
          
        <div className={` ${moiraiOne.className} rounded-3xl text-center flex flex-col justify-center text-4xl`}> 
          <h1>CO NABÍZÍME</h1>
        </div>
        <div className='grid grid-cols-1 grid-rows-3 my-[60px] gap-10 '>
          <div className="bg-[url('/batika.jpeg')] bg-cover bg-center w-[60vw] rounded-2xl">
            <h1>Příměstské tábory</h1>
          </div>
         <div className="bg-[url('/batika.jpeg')] bg-cover bg-center">
            
          </div>
          <div className="bg-[url('/batika.jpeg')] bg-cover bg-center">
            
          </div>
        </div>
        </div>

        {/* TÝM */}

        <div className='h-screen flex flex-row justify-around'>
          
        <div > 
          <h1 className={` ${moiraiOne.className} rounded-3xl text-center flex flex-col justify-center text-4xl`}>KDO VÁS POVEDE</h1>
          <p className='w-[40vw]'>Jsme skupina mladých lidí, která se seznámila na brněnských in-line  táborech, jež jsme společně dlouhodobě vedli z pozice instruktorů.  Letošním rokem jsme se rozhodli v činnosti pokračovat po vlastní ose.  Bruslení nás nesmírně naplňuje a tuto vášeň bychom chtěli předávat i  nadále. Rádi Vám pomůžeme na Vaší cestě k sebevědomému bruslení.</p>
          <button>NÁŠ TÝM</button>
        </div>
        
        <div className=''>
          <img src="" alt="" />
          
        </div>
        </div>


          {/* KONTAKT */}

          <div className='h-screen flex flex-row justify-around'>
          
          <div > 
            <h1 className={` ${moiraiOne.className} rounded-3xl text-center flex flex-col justify-center text-4xl`}>KDO VÁS POVEDE</h1>
            <p className='w-[40vw]'>Jsme skupina mladých lidí, která se seznámila na brněnských in-line  táborech, jež jsme společně dlouhodobě vedli z pozice instruktorů.  Letošním rokem jsme se rozhodli v činnosti pokračovat po vlastní ose.  Bruslení nás nesmírně naplňuje a tuto vášeň bychom chtěli předávat i  nadále. Rádi Vám pomůžeme na Vaší cestě k sebevědomému bruslení.</p>
            <button>NÁŠ TÝM</button>
          </div>
          
          <div className=''>
            <img src="" alt="" />
            
          </div>
          </div>





      

    </>
  )
}

export default page