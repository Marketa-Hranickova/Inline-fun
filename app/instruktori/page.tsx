import React from 'react'
import { Playpen_Sans } from 'next/font/google';
const moiraiOne = Playpen_Sans({
  weight: '800', // Moirai One only has a single weight
  subsets: ['latin'], // Specify the subset(s) you need
});
const Instruktori = () => {
  return (
    <div className='px-[120px]'>
    <div className={` ${moiraiOne.className} rounded-3xl text-center flex flex-col justify-center text-4xl mt-[120px]`}> 
          <h1>NÁŠ TÝM</h1>
        </div>
    <p className='text-center text-xl mt-[30px] mb-[120px]'>To jsme my, parta mladých lidí, kterou společně pojí přátelství a láska k bruslení.</p>

    <div className='flex flex-row justify-between mt-[60px] h-[50vh]'>
        <div className='flex flex-col justify-center text-center'>
       
          <h1 className={` ${moiraiOne.className} text-center text-4xl mb-[15px]`}>EMČA</h1>
       
            <p className='w-[35vw]'>Mé jméno je Ema Škorničková, jsem studentkou  pedagogické školy a úspěšnou absolventkou kurzu in-line bruslení pro  pedagogické pracovníky. Bruslení mě naplňuje a věnuji se mu již od svých  6 let. Ráda bych své nadšení z tohoto sportu předávala nadále a pomohla  dětem vybudovat pozitivní vztah k pohybu obecně. Ve volném čase se  věnuji i různým výtvarným aktivitám, 10 let jsem se věnovala scénickému  tanci a ráda cestuji. S tím se zároveň pojí má dobrodružná duše, mám  ráda výzvy a do každé jdu na 100 %.</p>
        </div>
        <div  className=" bg-[url('/emca.jpeg')]  w-[35vw] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  hover:shadow-2xl shadow-gray-800 hover:scale-105"></div>
    </div>

    <div className='flex flex-row justify-between mt-[60px] h-[50vh]'>
    <div  className=" bg-[url('/monca.jpg')]  w-[35vw] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  hover:scale-105"></div>

        <div className='flex flex-col justify-center text-center'>
       
          <h1 className={` ${moiraiOne.className} text-center text-4xl mb-[15px]`}>MONČA</h1>
       
            <p className='w-[35vw]'>Mé jméno je Monika, je mi 21 let a studuji pedagogiku  na univerzitě Palackého v Olomouci. Současně také působím jako hlavní  vedoucí skautského oddílu a brigádně dělám instruktorku jak na lyžích či  snowboardu, tak právě na kolečkových bruslích. Na inline příměstské  tábory jsem jezdila jako účastník už od mých deseti let a instruktorku  dělám již pátým rokem. Sport a pedagogika jsou pro mě tedy velkým  koníčkem, a proto mě tato práce tolik baví a současně naplňuje.</p>
        </div>
    </div>

    <div className='flex flex-row justify-between mt-[60px] h-[50vh]'>
        <div className='flex flex-col justify-center text-center'>
       
          <h1 className={` ${moiraiOne.className} text-center text-4xl mb-[15px]`}>EMČA</h1>
       
            <p className='w-[35vw]'>Mé jméno je Ema Škorničková, jsem studentkou  pedagogické školy a úspěšnou absolventkou kurzu in-line bruslení pro  pedagogické pracovníky. Bruslení mě naplňuje a věnuji se mu již od svých  6 let. Ráda bych své nadšení z tohoto sportu předávala nadále a pomohla  dětem vybudovat pozitivní vztah k pohybu obecně. Ve volném čase se  věnuji i různým výtvarným aktivitám, 10 let jsem se věnovala scénickému  tanci a ráda cestuji. S tím se zároveň pojí má dobrodružná duše, mám  ráda výzvy a do každé jdu na 100 %.</p>
        </div>
        <div  className=" bg-[url('/vitek.jpeg')]  w-[35vw] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  hover:scale-105"></div>
    </div>

    <div className='flex flex-row justify-between mt-[60px] h-[50vh]'>
    <div  className=" bg-[url('/lucka.jpeg')]  w-[35vw] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  hover:scale-105"></div>

        <div className='flex flex-col justify-center text-center'>
       
          <h1 className={` ${moiraiOne.className} text-center text-4xl mb-[15px]`}>MONČA</h1>
       
            <p className='w-[35vw]'>Mé jméno je Monika, je mi 21 let a studuji pedagogiku  na univerzitě Palackého v Olomouci. Současně také působím jako hlavní  vedoucí skautského oddílu a brigádně dělám instruktorku jak na lyžích či  snowboardu, tak právě na kolečkových bruslích. Na inline příměstské  tábory jsem jezdila jako účastník už od mých deseti let a instruktorku  dělám již pátým rokem. Sport a pedagogika jsou pro mě tedy velkým  koníčkem, a proto mě tato práce tolik baví a současně naplňuje.</p>
        </div>
    </div>

    <div className='flex flex-row justify-between mt-[60px] h-[50vh]'>
        <div className='flex flex-col justify-center text-center'>
       
          <h1 className={` ${moiraiOne.className} text-center text-4xl mb-[15px]`}>EMČA</h1>
       
            <p className='w-[35vw]'>Mé jméno je Ema Škorničková, jsem studentkou  pedagogické školy a úspěšnou absolventkou kurzu in-line bruslení pro  pedagogické pracovníky. Bruslení mě naplňuje a věnuji se mu již od svých  6 let. Ráda bych své nadšení z tohoto sportu předávala nadále a pomohla  dětem vybudovat pozitivní vztah k pohybu obecně. Ve volném čase se  věnuji i různým výtvarným aktivitám, 10 let jsem se věnovala scénickému  tanci a ráda cestuji. S tím se zároveň pojí má dobrodružná duše, mám  ráda výzvy a do každé jdu na 100 %.</p>
        </div>
        <div  className=" bg-[url('/zuza.jpg')]  w-[35vw] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  hover:scale-105"></div>
    </div>

    <div className='flex flex-row justify-between mt-[60px] h-[50vh]'>
    <div  className=" bg-[url('/rada.jpeg')]  w-[35vw] bg-center bg-cover rounded-3xl transition-all duration-300 ease-in-out  hover:scale-105"></div>

        <div className='flex flex-col justify-center text-center'>
       
          <h1 className={` ${moiraiOne.className} text-center text-4xl mb-[15px]`}>MONČA</h1>
       
            <p className='w-[35vw]'>Mé jméno je Monika, je mi 21 let a studuji pedagogiku  na univerzitě Palackého v Olomouci. Současně také působím jako hlavní  vedoucí skautského oddílu a brigádně dělám instruktorku jak na lyžích či  snowboardu, tak právě na kolečkových bruslích. Na inline příměstské  tábory jsem jezdila jako účastník už od mých deseti let a instruktorku  dělám již pátým rokem. Sport a pedagogika jsou pro mě tedy velkým  koníčkem, a proto mě tato práce tolik baví a současně naplňuje.</p>
        </div>

    </div>
    <div className='h-[120px]'>

    </div>

    
    </div>
  )
}

export default Instruktori