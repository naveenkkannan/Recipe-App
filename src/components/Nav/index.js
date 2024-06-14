

// "use client";

// import Link from "next/link"
// import { useState } from "react";
// import { Menu , X } from "lucide-react";



// export default function Nav() {

//     const [isOpen , setIsOpen ] = useState(false);

//     const toggleNavbar = () =>{
//         setIsOpen(!isOpen);
//     };
//     return (
//         <div>
//         <div className="flex w-3/3 justify-around ">
//         <div className="hidden w-full  md:flex justify-around ">
//             <Link className="text-white" href="">Home</Link>
//             <Link className="text-white" href="">Explore Recipes</Link>
//         </div>
//         <div>
//             <button className="text-white md:hidden"onClick={toggleNavbar}>{isOpen ? <X /> : <Menu/> }</button>
//         </div>
//         </div>
//         {isOpen && (
//             <div className="flex basis-full flex-col items-center justify-around ">
//             <Link className="text-white" href="">Home</Link>
//             <Link className="text-white" href="">Explore Recipes</Link>
//         </div>
//         )}
//         </div>
//     );
// };


"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            <div className="flex w-full justify-between items-center p-4">
                <div className="hidden w-full md:flex justify-center space-x-8">
                    <Link className="text-white font-serif font-medium subpixel-antialiased text-lg" href={"/"}>
                        Home
                    </Link>
                    <Link className="text-white font-serif font-medium subpixel-antialiased text-lg" href={"/recipe-list"}>
                         Recipes
                    </Link>
                </div>
                <div className="md:hidden">
                    <button className="text-white font-serif font-medium subpixel-antialiased text-lg" onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="flex flex-col items-center justify-center space-y-4  p-4 md:hidden">
                    <Link className="text-white font-serif font-medium subpixel-antialiased text-lg" href={"/"}>
                        Home
                    </Link>
                    <Link className="text-white font-serif font-medium subpixel-antialiased text-lg" href={"/recipe-list"}>
                        Recipes
                    </Link>
                </div>
            )}
        </div>
    );
}


