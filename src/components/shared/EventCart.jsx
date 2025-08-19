import '../../styles/EventCart.css';

function EventCart(props) {
  return (
    <div className="category-card">
      <h2>{props.category}</h2>
      <div className="images-grid">
        {props.images.map((img, index) => (
          <img key={index} src={img} alt={`${props.category}-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default EventCart;
