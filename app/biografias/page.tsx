"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../_components/ui/button";

const BIOGRAFIAS = () => {
    const pathname = usePathname();

    return ( 
    <div className="main">
        <Button 
            variant={pathname === "/#allan" ? "outline" : "secondary"}
            asChild>
            <Link href="#allan">
                Allan
            </Link>
        </Button>

        <Button 
            variant={pathname === "/#camille" ? "outline" : "secondary"}
            asChild>
            <Link href="#camille">
                Camille
            </Link>
        </Button>

        <Button 
            variant={pathname === "/#gabriel" ? "outline" : "secondary"}
            asChild>
            <Link href="#gabriel">
                Gabriel
            </Link>
        </Button>

        <Button 
            variant={pathname === "/#flora" ? "outline" : "secondary"}
            asChild>
            <Link href="#flora">
                flora
            </Link>
        </Button>

        

        
                
        <h1 className="bg-slate-500" id="allan">Allan Kardec</h1>
        <p >
            Allan Kardec
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita reiciendis atque qui hic porro dicta esse dolorum neque nostrum possimus praesentium et, asperiores nam quos, voluptates incidunt delectus repellendus.
            ...
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas ipsam voluptatem accusantium voluptatum unde? Provident vel ut accusantium laudantium? Animi eos, nostrum molestiae incidunt magni blanditiis consectetur temporibus nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa laboriosam quisquam aperiam quam recusandae omnis culpa officiis veniam! Beatae nisi illum dignissimos quos necessitatibus aspernatur, iure distinctio placeat voluptatem maxime!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptate, quis magnam earum commodi in, nam est cupiditate quod quaerat officia ipsam. Similique, et ea sit suscipit tenetur accusantium quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quasi pariatur eligendi rerum, illo facilis repudiandae non quos, praesentium laboriosam enim atque dolor mollitia magni et dolore eaque officia sunt.</p>

        <h1 id="camille">Camille</h1>
        <p >
            Camille
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita reiciendis atque qui hic porro dicta esse dolorum neque nostrum possimus praesentium et, asperiores nam quos, voluptates incidunt delectus repellendus.
            ...
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas ipsam voluptatem accusantium voluptatum unde? Provident vel ut accusantium laudantium? Animi eos, nostrum molestiae incidunt magni blanditiis consectetur temporibus nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa laboriosam quisquam aperiam quam recusandae omnis culpa officiis veniam! Beatae nisi illum dignissimos quos necessitatibus aspernatur, iure distinctio placeat voluptatem maxime!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptate, quis magnam earum commodi in, nam est cupiditate quod quaerat officia ipsam. Similique, et ea sit suscipit tenetur accusantium quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quasi pariatur eligendi rerum, illo facilis repudiandae non quos, praesentium laboriosam enim atque dolor mollitia magni et dolore eaque officia sunt.</p>

        <h1 className="bg-slate-500" id="gabriel">Gabriel</h1>
        <p >
            Gabriel
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita reiciendis atque qui hic porro dicta esse dolorum neque nostrum possimus praesentium et, asperiores nam quos, voluptates incidunt delectus repellendus.
            ...
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas ipsam voluptatem accusantium voluptatum unde? Provident vel ut accusantium laudantium? Animi eos, nostrum molestiae incidunt magni blanditiis consectetur temporibus nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa laboriosam quisquam aperiam quam recusandae omnis culpa officiis veniam! Beatae nisi illum dignissimos quos necessitatibus aspernatur, iure distinctio placeat voluptatem maxime!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptate, quis magnam earum commodi in, nam est cupiditate quod quaerat officia ipsam. Similique, et ea sit suscipit tenetur accusantium quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quasi pariatur eligendi rerum, illo facilis repudiandae non quos, praesentium laboriosam enim atque dolor mollitia magni et dolore eaque officia sunt.</p>
    


<h1 id="flora">Flora</h1>
        <p >
            Camille
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita reiciendis atque qui hic porro dicta esse dolorum neque nostrum possimus praesentium et, asperiores nam quos, voluptates incidunt delectus repellendus.
            ...
        </p>
        

</div>

    );
}

export default BIOGRAFIAS;
