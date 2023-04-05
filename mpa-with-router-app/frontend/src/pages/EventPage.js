import { Link } from 'react-router-dom';

const PRODUCTS = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'}
];

function EventsPage(){
    return(
    <>
        <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map((prod) => (<li key={prod.id}><Link to={prod.id}>{prod.title}</Link></li>))}
                {/* <li><Link to="/products/product-1">Product 1</Link></li>
                <li><Link to="/products/product-2">Product 2</Link></li>
                <li><Link to="/products/product-3">Product 3</Link></li> */}
            </ul>
    </>
    );
}

export default EventsPage;