import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import InfoProduct from "../components/InfoProduct";

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/product/" + id)
            .then((data) => data.json())
            .then((product) => setProduct(product))
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            {product && <InfoProduct />}
            <Link to="/">
                <button>Go to home</button>
            </Link>
        </>
    );
}

export default SingleProduct;
