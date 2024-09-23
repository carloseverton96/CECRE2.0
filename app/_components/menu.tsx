import Link from "next/link";
import { Button } from "./ui/button";

const MENU = () => {
    return ( 
    <div className="flex space-x-4">
        
                <Button>
                    <Link href="/">
                        INÍCIO
                    </Link>
                </Button>
                
                <Button>
                    <Link href="/publicas">
                        ATIVIDADES PÚBLICAS
                    </Link>
                </Button>

                <Button>
                    <Link href="/educacionais">
                        ATIVIDADES EDUCACIONAIS
                    </Link>
                </Button>

                <Button>
                    <Link href="/mediunicas">
                        ATIVIDADES MEDIÚNICAS
                    </Link>
                </Button>

                <Button>
                    <Link href="/sociais">
                        ATIVIDADES SOCIAIS
                    </Link>
                </Button>
                
                <Button>
                    <Link href="/biografias">
                        BIOGRAFIAS
                    </Link>
                </Button>
    </div> );
}
 
export default MENU;