"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const MENU = () => {
    const pathname = usePathname();
    return ( 
    <div className="flex space-x-4 container">
        {/* posso usar a biblioteca "lucide" para inserir ícones */}
                <Button 
                variant={pathname === "/" ? "outline" : "secondary"}
                asChild>
                    <Link href="/">
                        INÍCIO
                    </Link>
                </Button>
                
                <Button 
                variant={pathname === "/publicas" ? "outline" : "secondary"}
                asChild>
                    <Link href="/publicas">
                        ATIVIDADES PÚBLICAS
                    </Link>
                </Button>

                <Button 
                variant={pathname === "/educacionais" ? "outline" : "secondary"}
                asChild>
                    <Link href="/educacionais">
                        ATIVIDADES EDUCACIONAIS
                    </Link>
                </Button>

                <Button 
                variant={pathname === "/mediunicas" ? "outline" : "secondary"}
                asChild>
                    <Link href="/mediunicas">
                        ATIVIDADES MEDIÚNICAS
                    </Link>
                </Button>

                <Button 
                variant={pathname === "/sociais" ? "outline" : "secondary"}
                asChild>
                    <Link href="/sociais">
                        ATIVIDADES SOCIAIS
                    </Link>
                </Button>
                
                <Button 
                variant={pathname === "/biografias" ? "outline" : "secondary"}
                asChild>
                    <Link href="/biografias">
                        BIOGRAFIAS
                    </Link>
                </Button>
    </div> );
}
 
export default MENU;