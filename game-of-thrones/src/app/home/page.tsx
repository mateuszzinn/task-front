import Image from "next/image";

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
        <Image src="/ned.jpg" alt="" width={200} height={200} />
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
          <h3 className="p-3 text-lg">Um breve resumo da história.</h3>
          <p>
            Game of Thrones é uma série de TV que conta a história de uma luta
            entre as casas Stark e Lannister pelo Trono de Ferro. A trama se passa
            em Westeros, um lugar onde as estações duram anos e onde o inverno
            pode durar uma vida inteira.
          </p>
          <p>
            A história começa com a ida de Eddard "Ned" Stark para Porto Real,
            onde se torna conselheiro do Rei Robert Baratheon. Ned descobre que a
            Casa Lannister, da qual a Rainha Cersei faz parte, pode ter sido
            responsável pela morte do Mão do Rei anterior.
          </p>
          <p>
            A trama se desenvolve em torno de vários conflitos, como a disputa
            pelo Trono de Ferro, a ameaça dos Caminhantes Brancos e a rivalidade
            entre as casas Stark e Lannister. Alguns personagens da série são
            inspirados em pessoas reais. Por exemplo, a rivalidade entre as casas
            Stark e Lannister foi inspirada na Guerra das Rosas, que ocorreu na
            Inglaterra no século XV.
          </p>
        </div>
      </main>
    </div>
  );
}
