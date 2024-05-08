import './Cart.css';

function Cart({ item, handleRemoveItem }) {
  return (
    <div className='cart-item'>
      <div>
        <img width={50} height={50} src={item.img} alt={item.name} />
      </div>
      <h3>{item.name}</h3>
      <h3>Price: {item.price}$</h3>
      <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
    </div>
  );
}

export default Cart;