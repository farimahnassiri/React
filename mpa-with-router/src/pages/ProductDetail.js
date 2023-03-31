import { useParams } from 'react-router-dom';

function ProductDetailsPage(){
    const params = useParams();

    return(
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
        </>
    );
}

export default ProductDetailsPage;