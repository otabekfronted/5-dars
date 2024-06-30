import { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";

function Home() {
    const [products, setProduct] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/product")
            .then((data) => data.json())
            .then((products) => setProduct(products))
            .catch((error) => console.log(error));
    }, []);
    console.log(products);
    return (
        <>
            <h1 className="text-center text-4xl mt-5 mb-5">Product Lists</h1>
            {products && <ProductsList products={products} />}
        </>
    );
}

export default Home;
