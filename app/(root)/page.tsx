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
        <a href="#akce">
        <button  className='rounded-xl mt-[30px] px-3 py-2 bg-amber-600 w-[8vw] font-bold'>NABÍDKA</button>
        </a>
      </div > 
      <div>
        <img className='shadow-lg shadow-gray-800  object-cover absolute w-[280px] h-[280px] mt-[30px] ml-[50px] rounded-3xl z-20' src="./holkazepredu.jpeg" alt="" />
        <img className='shadow-lg shadow-gray-800  object-cover absolute w-[250px] h-[250px] mt-[250px] ml-[250px] rounded-3xl z-10' src="./deckavylet.jpeg" alt="" />
        <img className='shadow-lg shadow-gray-800 object-cover absolute w-[300px] h-[300px] mt-[330px] ml-[-20px] rounded-3xl' src="./skupina.jpeg" alt="" />
        
        </div>
      </div>

      {/* ujisteni */}
      <div className="">
      <div className=" group h-screen grid grid-cols-3 grid-rows-2 gap-[60px] py-[30px] snap-start transition-all duration-200 px-[120px] ease-in">

        <div className="group/card1 hover:bg-[url('/spodnibrusle.jpeg')]  bg-black/[0] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out hover:scale-105">
        <div className="rounded-3xl  bg-black/[0.5] h-full hover:bg-black/[0.7] text-center flex flex-col justify-center shdos hover:shadow-3xl shadow-gray-800 "> 
          <h1 className={`${moiraiOne.className} text-xl`}>Možnost domluvy</h1>
          <p className='hidden group-hover/card1:block pt-[15px] mx-3'>Má vaše dítě dietu, strach z vystupování nebo alergie? Není problém! Určitě se dokážeme domluvit a program nebo jídelníček pro dítě poupravit.</p>
        </div>
        </div>
        
        <div className={` ${moiraiOne.className} rounded-3xl text-center flex flex-col justify-center text-4xl`}> 
          <h1>CO MŮŽETE OČEKÁVAT</h1>
        </div>
       
        <div className="group/card2 hover:bg-[url('/spodnibrusle.jpeg')]  bg-black/[0] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out hover:scale-105">
        <div className="rounded-3xl  bg-black/[0.5]  hover:bg-black/[0.7] h-full  text-center flex flex-col justify-center shdos hover:shadow-3xl  shadow-gray-800 "> 
          <h1 className={`${moiraiOne.className} text-xl`}>Rodinný kolektiv</h1>
          <p className='hidden group-hover/card2:block pt-[15px] mx-3'>Naše tábory jsou spíše v rodinném formátu a tak nehorí, že by se na vaše dítě zapomnělo a nebo, že bychom na něj neměli čas. pečlivě dohlížíme na to, aby se dítě na táboře necítilo samo.</p>
        </div>
        </div>

        <div className="group/card2 hover:bg-[url('/spodnibrusle.jpeg')]  bg-black/[0] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out hover:scale-105">
        <div className="rounded-3xl  bg-black/[0.5] h-full hover:bg-black/[0.7] text-center flex flex-col justify-center shdos hover:shadow-3xl shadow-gray-800 "> 
          <h1 className={`${moiraiOne.className} text-xl`}>Bezpečí vašeho dítěte</h1>
          <p className='hidden group-hover/card2:block pt-[15px] mx-3'>Všichni istruktoři jsou proškoleni a také z vlastní dlouholeté praxe ví, jak s bruslemi bezpečně zacházet. Bezpečí vašeho dítěte je pro nás na prvním místě.</p>
        </div>
        </div>

        <div className="group/card2 hover:bg-[url('/spodnibrusle.jpeg')]  bg-black/[0] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out hover:scale-105">
        <div className="rounded-3xl  bg-black/[0.5] h-full hover:bg-black/[0.7] text-center flex flex-col justify-center shdos hover:shadow-3xl shadow-gray-800 "> 
          <h1 className={`${moiraiOne.className} text-xl`}>Přátelský přístup</h1>
          <p className='hidden group-hover/card2:block pt-[15px] mx-3'>Děti učíme zábavnou formou. Nejsme přece na vojně, ale chceme si společné chvíle užít. K učení obzvlášť sportu sice občas musí být pevná ruka, aby nevznikla zranění z blbosti, ale zbytečně na vaše děti křičet nebudeme.</p>
        </div>
        </div>

        <div className="group/card2 hover:bg-[url('/spodnibrusle.jpeg')]  bg-black/[0] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out hover:scale-105">
        <div className="rounded-3xl  bg-black/[0.5] h-full hover:bg-black/[0.7] text-center flex flex-col justify-center shdos hover:shadow-3xl shadow-gray-800 "> 
          <h1 className={`${moiraiOne.className} text-xl`}>Učení od lidí se zájmem o in-line</h1>
          <p className='hidden group-hover/card2:block pt-[15px] mx-3'>Společně s uměním na bruslích se dětem také snažíme předat lásku ke sportu a pohybu. Každý z nás je do sportu a konkrétně do in-line bruslí zapálen a to nás posunuje vpřed.</p>
        </div>
        </div>


        </div>
        </div>

        {/* Nase akce */}
        <div id='akce' className='h-screen flex flex-row justify-around'>
          
        <div className={` ${moiraiOne.className} rounded-3xl text-center flex flex-col justify-center text-4xl`}> 
          <h1>CO NABÍZÍME</h1>
        </div>
        <div className='grid grid-cols-1 grid-rows-3 my-[60px] gap-10 '>

          <div className=" bg-[url('/batika.jpeg')]  bg-black/[0] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  w-[60vw] hover:scale-105">
        <div className="rounded-3xl  bg-black/[0.5] h-full hover:bg-black/[0.7] text-center flex flex-col justify-center shdos hover:shadow-3xl shadow-gray-800 "> 
          <h1 className={`${moiraiOne.className} text-xl`}>PŘÍMĚSTSKÉ TÁBORY</h1>
        </div>
        </div>

        <div className=" bg-[url('/batika.jpeg')]  bg-black/[0] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  w-[60vw] hover:scale-105">
        <div className="rounded-3xl  bg-black/[0.5] h-full hover:bg-black/[0.7] text-center flex flex-col justify-center shdos hover:shadow-3xl shadow-gray-800 "> 
          <h1 className={`${moiraiOne.className} text-xl`}>VÝLETY</h1>
        </div>
        </div>

        <div className=" bg-[url('/batika.jpeg')]  bg-black/[0] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  w-[60vw] hover:scale-105">
        <div className="rounded-3xl  bg-black/[0.5] h-full hover:bg-black/[0.7] text-center flex flex-col justify-center shdos hover:shadow-3xl shadow-gray-800 "> 
          <h1 className={`${moiraiOne.className} text-xl`}>SOUKROMÉ LEKCE</h1>
        </div>
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