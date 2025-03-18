import Form from "next/form";
import { Playpen_Sans } from 'next/font/google';

const moiraiOne = Playpen_Sans({
  weight: '800', // Moirai One only has a single weight
  subsets: ['latin'], // Specify the subset(s) you need
});

const SearchForm = () => {
    return (
        <div className="h-[90vh] px-[120px]">
        <div className="text-center">
        <h1 className={` ${moiraiOne.className} pt-[90px] pb-[30px] text-4xl`}>KONTAKT</h1>
        <p>máte nějaké dotazy či nápady? nebojte se nám ozvat</p>
        </div>
        <div className=" flex flex-row justify-around pt-[60px]">
            
        <Form action="/" className="search-form">
        <div className="flex flex-row justify-around ">
        <div className="flex flex-col mr-[60px]">
            <p>JMÉNO A PŘÍJMENÍ *</p>
            <input
                name="jméno"   
                required    
                className="mb-[15px] p-1 search-input border-1 rounded-lg w-[20vw] "
            />
            <p>PŘEDMĚT *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] p-1 search-input border-1 rounded-lg "
                
            />
             <p>EMAIL *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] p-1 search-input border-1 rounded-lg "
                
            />
            <p>TELEFON</p>
            <input
                name="předmět"
                
                type="number"
                className="mb-[15px] p-1 search-input border-1 rounded-lg "
                
            />
            <p>email: blabal</p>
            <p>tel: wemvevo</p>
            </div>
            <div>
            <p>ZPRÁVA *</p>
            <textarea
                name="zpráva"
                required
                className="search-input border-1 rounded-lg w-[20vw] h-[23vh] align-top  px-3 py-[0.75rem]"
                
            />

            <div className="flex gap-2">
                <button type="submit" className='rounded-xl mt-[30px] px-3 py-2 bg-amber-600 w-[8vw] font-bold hover:shadow-2xl hover:scale-105'>
                    poslat
                </button>
            </div>

            </div>

            </div>
        </Form>
        </div>
        <div className="flex flex-row text-center justify-around">
            <div>
            
            </div>
        </div>
        </div>
    )
}

export default SearchForm