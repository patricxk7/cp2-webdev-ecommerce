import Card from "./Card";

export default function Section({ titulo, produtos }) {
  return (
    <section>
      <h1>{titulo}</h1>
      {produtos.map(prod => (
        <Card key={prod.id} {...prod} />
      ))}
    </section>
  );
}