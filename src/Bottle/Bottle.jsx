import './Bottle.css';

function Bottle({ bottle, handleAddToCart }) {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <div>
        <img height={300} width={300} src={img} alt="name" />
      </div>
      <h2>{name}</h2>
      <h3>Price: {price}$</h3>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
}

export default Bottle;