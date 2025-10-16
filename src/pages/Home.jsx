import { useEffect, useState } from "react";
import Section from "../components/Section";

export default function Home() {
  const [produtosJoias, setProdutosJoias] = useState([]);
  const [produtosEletronicos, setProdutosEletronicos] = useState([]);
  const [produtosMasculinos, setProdutosMasculinos] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}products/category/jewelery`)
      .then(res => res.json())
      .then(data => setProdutosJoias(data));

    fetch(`${API}products/category/electronics`)
      .then(res => res.json())
      .then(data => setProdutosEletronicos(data));

    fetch(`${API}products/category/men's clothing`)
      .then(res => res.json())
      .then(data => setProdutosMasculinos(data));
  }, []);

  return (
    <main>
      <Section titulo="Joias" produtos={produtosJoias} />
      <Section titulo="Eletrônicos" produtos={produtosEletronicos} />
      <Section titulo="Roupas Masculinas" produtos={produtosMasculinos} />
    </main>
  );
}