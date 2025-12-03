import React from "react";
import { Button } from "../../components/ui/button";
import Image from "next/image";
function Header() { 
    return (
        <div className ='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shawdow-md'> 
            <Image src={'/logo1.svg'} alt="Logo" width={180} height={60} />
            <Button>Get Started</Button>
        </div>
    )
}

export default Header;