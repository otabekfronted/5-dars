import { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";
function Home() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/product")
            .then((data) => data.json())
            .then((products) => setProducts(products))
            .catch((error) => console.log(error));
    }, []);
    console.log(products);

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                {products && <ProductsList products={products} />}
            </div>
        </>
    );
}

export default Home;
