import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";

interface Props {
    src: string,
    alt: string,
    titulo: string,
    descripcion: string,
    onClick?: () => void
}

export default function Cards({...Props}: Props) {
    return (
        <Card onClick={Props?.onClick} className="w-200 h-200 flex flex-col p-4 shadow-black cursor-pointer">
            <div className="w-100 h-100">
                <CardTitle>
                    {Props.titulo}
                </CardTitle>
                <Image src={Props.src} alt={Props.alt} width={200} height={200} />
                <CardDescription>
                    {Props.descripcion}
                </CardDescription>
            </div>
        </Card>
    )
}