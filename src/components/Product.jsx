import { Link } from "react-router-dom";
import InfoProduct from "./InfoProduct";
function Product({ id, title, description, thumbnail }) {
    return (
        <div>
            <Link to={`/singleproduct/${id}`}>
                <div className=" card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            className="bg-slate-200"
                            src={thumbnail}
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <InfoProduct />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Product;
