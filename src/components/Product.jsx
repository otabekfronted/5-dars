import { Link } from "react-router-dom";

function Product({ id, title, price, thumbnail }) {
    return (
        <Link to={`/singleProduct/${id}`}>
            <h3>{title}</h3>
            <p>{price}</p>
            {/* <img src={thumbnail} alt="" /> */}
        </Link>
    );
}

export default Product;
