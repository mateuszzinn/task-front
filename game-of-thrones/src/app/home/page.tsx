import Image from "next/image";
import nedStark from "../../../public/ned.jpg"
import ImagemOtimizada from "@/components/imagens/ImagemOtimizada";
import conteudo from "../../../public/data/texto.json";

export default function Home() {
  return (
    <div className="w-screen-full min-w-screen bg-gray-900 text-white p-6">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">Game of Thrones</h1>
        <p className="text-gray-400">Uma das séries mais épicas da TV</p>
      </header>

      <main className="w-screen-full">
        <h2 className="p-3 text-xl">Tudo sobre Game of Thrones</h2>
        <hr />
        <h3 className="p-3 text-lg">Introdução</h3>
        <Image 
          src={nedStark} 
          alt="ned stark" 
          objectFit="cover"
          className="transition duration-500 ease-in-out transform hover:scale-110"
          width={200} 
          height={200} />
        <p>
          Game of Thrones é uma série de televisão que conta a história de uma
          guerra entre famílias nobres dos Sete Reinos, na terra fictícia de
          Westeros. A série é baseada na saga literária As Crônicas de Gelo e
          Fogo, de George R.R. Martin.
        </p>
        <p>A sinopse da série é a seguinte:</p>
        <div className="p-3">
          <ul>
            <li>
              * A história se passa em Westeros, uma terra que lembra a Europa
              Medieval.
            </li>
            <li>* As estações podem durar anos ou décadas.</li>
            <li>
              * As famílias nobres dos Sete Reinos lutam pelo Trono de Ferro.
            </li>
            <li>
              * A posse do Trono de Ferro pode garantir a sobrevivência durante o
              inverno.
            </li>
            <li>
              * A última herdeira da dinastia Targaryen planeja reivindicar o
              trono.
            </li>
            <li>* A Muralha protege o reino da escuridão do além.</li>
            <li>* Alianças e conflitos se sucedem na guerra de poder.</li>
          </ul>
        </div>
        <hr />
        <div className="p-3">
          <h3 className="p-3 text-lg">{conteudo.resumo}</h3>
          <p>
            {conteudo.parte1}
          </p>
          <p>
          {conteudo.parte2}
          </p>
          <p>
          {conteudo.parte3}
          </p>
        </div>
      </main>
      <hr />
      <ImagemOtimizada/>
    </div>
    

  );
}
