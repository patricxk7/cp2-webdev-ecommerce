export default function Card({ id, title, price, description, category, image  }) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{id}</p>
        <p>{price}</p>
        <p>{category}</p>
        <img src ={image} alt ="imagem produto"/>
      </div>
    </div>
  );
}