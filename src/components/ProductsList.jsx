import Product from "./Product";

function ProductsList({ products }) {
    return (
        <div className="m-auto flex justify-center flex-wrap gap-5 ">
            {products.products.map((product) => {
                const { title, id, description, thumbnail } = product;
                return (
                    <Product
                        title={title}
                        key={id}
                        description={description}
                        thumbnail={thumbnail}
                    />
                );
            })}
        </div>
    );
}

export default ProductsList;
