"use client";

import { Button } from "./ui/button";
import Image from "next/image";


const FOOTER = () => {
    return ( 
        <footer className="flex justify-center items-center space-x-4 p-4 bg-gray-100">
        {/* Botão para Facebook */}
        <Button asChild variant="ghost" className="text-blue-600">
          <a href="https://www.facebook.com/profile.php?id=100008324709881" target="_blank" rel="noopener noreferrer">
          <Image alt="auta de souza" src="/facebook.svg" width={20} height={20} className=""/>
          </a>
        </Button>
  
        {/* Botão para Instagram */}
        <Button asChild variant="ghost" className="text-pink-600">
          <a href="https://www.instagram.com/cecrecristoredentor/" target="_blank" rel="noopener noreferrer">
          <Image alt="auta de souza" src="/instagram.svg" width={20} height={20} className=""/>
          </a>
        </Button>
  
        {/* Botão para WhatsApp */}
        <Button asChild variant="ghost" className="text-green-600">
          <a href="https://wa.me/+5588999721897" target="_blank" rel="noopener noreferrer">
          <Image alt="auta de souza" src="/phone.svg" width={20} height={20} className=""/>
          </a>
        </Button>
      </footer>
     );
}
 
export default FOOTER;

