import NavBar from "../navBar/NavBar";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-4 px-6 md:px-10 lg:px-16 border-b-2 border-yellow-600 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-yellow-500 font-serif font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-wide">
          ⚔️ Game of Thrones
        </h1>
        <NavBar />
      </div>
    </header>
  );
}

