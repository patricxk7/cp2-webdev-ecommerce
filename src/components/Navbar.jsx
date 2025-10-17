import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-indigo-900 text-white shadow-lg p-5 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-yellow-400">LOJA ONLINE</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:bg-indigo-700 p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Início
        </Link>
        <Link to="/perfil" className="text-gray-300 hover:text-yellow-300 hover:underline transition-all">
          Meu Perfil
        </Link>
        <Link to="/carrinho" className="text-gray-300 hover:text-yellow-300 hover:underline transition-all">
          Meu Carrinho
        </Link>
      </nav>
    </header>
  );
}