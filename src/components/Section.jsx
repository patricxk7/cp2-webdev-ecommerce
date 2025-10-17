import Card from "./Card";

export default function Section({ children, produtos }) {
  return (
    <section>
      <h1>{children}</h1> {}
      {produtos && produtos.length > 0 ? (
        produtos.map(prod => (
          <Card key={prod.id} {...prod} />
        ))
      ) : (
        <p>Nenhum produto disponível.</p>
      )}
    </section>
  );
}
