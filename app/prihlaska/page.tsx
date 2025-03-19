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
        <h1 className={` ${moiraiOne.className} pt-[px] pb-[15px] text-4xl`}>Přihláška</h1>
        </div>
        <div className=" flex flex-row justify-around pt-[15px]">
            
        <Form action="/" className="search-form">
        <p>MÁM ZÁJEM O *</p>
            <input
                name="jméno"   
                required    
                className="mb-[15px] w-full px-1 search-input border-1 rounded-lg  "
            />
            <p>TERMÍN *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 w-full search-input border-1 rounded-lg "
                
            />
        <div className="flex flex-row justify-between ">
        <div className="flex flex-col mr-[60px]">
           
            <p className="uppercase">Osobní údaje dítěte</p>
             <p>JMÉNO *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>PŘÍJMENÍ *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>DATUM NAROZENÍ *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>TRVALÉ BYDLIŠTĚ *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />

            
            <p>ZDRAVOTNÍ OMEZENÍ?</p>
            <input
                name="předmět"
                
                type="number"
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>POKUD ANO, JAKÉ?</p>
            <input
                name="předmět"
                
                type="number"
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            </div>
            <div className="flex flex-col mr-[60px]">
            <p className="uppercase">Osobní údaje rodiče</p>
            <p>JMÉNO *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>PŘÍJMENÍ *</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>TRVALÉ BYDLIŠTĚ, POKUD SE LIŠÍ OD DÍTĚTE</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>TELEFONNÍ ČÍSLO</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>EMAIL</p>
            <input
                name="předmět" 
                required   
                className="mb-[15px] px-1 search-input border-1 rounded-lg "
                
            />
            <p>POZNÁMKA</p>
            <textarea
                name="zpráva"
                required
                className="search-input border-1 rounded-lg  align-top "
                
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