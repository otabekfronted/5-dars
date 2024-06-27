import Product from "./Product";

function ProductsList({ products }) {
    return (
        <>
            {products.products.map((product) => {
                const { title, id, price, thumbnail } = product;
                return (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        // description={description}
                        thumbnail={thumbnail}
                    />
                );
            })}
        </>
    );
}

export default ProductsList;
