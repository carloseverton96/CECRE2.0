"use client";

import { Button } from "./ui/button";
import Image from "next/image";


const FOOTER = () => {
    return ( 
        <footer className="flex justify-center items-center space-x-4 p-4 bg-gray-100">
        {/* Botão para Facebook */}
        <Button asChild variant="ghost" className="text-blue-600">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image alt="auta de souza" src="/headset.png" width={50} height={50} className=""/>
          </a>
        </Button>
  
        {/* Botão para Instagram */}
        <Button asChild variant="ghost" className="text-pink-600">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image alt="auta de souza" src="/instagram.png" width={50} height={50} className=""/>
          </a>
        </Button>
  
        {/* Botão para WhatsApp */}
        <Button asChild variant="ghost" className="text-green-600">
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
          <Image alt="auta de souza" src="/headset.png" width={50} height={50} className=""/>
          </a>
        </Button>
      </footer>
     );
}
 
export default FOOTER;

