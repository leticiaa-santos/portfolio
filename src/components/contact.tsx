import Link from "next/link";
import { Card } from "./ui/card";
import { 
    ArrowUpRight,
    Instagram,
    Linkedin,
    Github,
    Mail,
} from 'lucide-react';

export function Contact() {
    return(
        <div id="contact">
            <p className="text-center mt-20 font-bold text-6xl mb-10">
                Contact
            </p>

            <p className="text-center mb-10">
                Entre em contato ou me siga nas redes sociais
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 m-20 mx-70">
                <Link href={"https://instagram.com.br"} target="_blank">
                    <Card className="px-5 py-4 flex items-center justify-between flex-row transition-all duration-300 hover:bg-neutral-800">
                        <div className="flex items-center gap-4">
                            <Instagram />
                            <p>Instagram</p> 
                        </div>
                        <ArrowUpRight />
                    </Card>
                </Link>
                <Link href={"https://linkedin.com.br"} target="_blank">
                    <Card className="px-5 py-4 flex items-center justify-between flex-row transition-all duration-300 hover:bg-neutral-800">
                        <div className="flex items-center gap-4">
                            <Linkedin />
                            <p>Linkedin</p> 
                        </div>
                        <ArrowUpRight />
                    </Card>
                </Link>
                <Link href={"https://google.com.br"} target="_blank">
                    <Card className="px-5 py-4 flex items-center justify-between flex-row transition-all duration-300 hover:bg-neutral-800">
                        <div className="flex items-center gap-4">
                            <Github />
                            <p>GitHub</p> 
                        </div>
                        <ArrowUpRight />
                    </Card>
                </Link>
                <Link href={"https://google.com.br"} target="_blank">
                    <Card className="px-5 py-4 flex items-center justify-between flex-row transition-all duration-300 hover:bg-neutral-800">
                        <div className="flex items-center gap-4">
                            <Mail />
                            <p>E-mail</p> 
                        </div>
                        <ArrowUpRight />
                    </Card>
                </Link>
                
            </section>


        </div>
    )
}