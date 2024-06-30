import { Link } from "react-router-dom";
function InfoProduct() {
    return (
        <>
            <div className="card-actions justify-end">
                <Link to="/singleproduct/">
                    <button className="btn btn-primary">Buy Now</button>
                </Link>
            </div>
        </>
    );
}

export default InfoProduct;
