import { 
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider, 
  Route } 
from "react-router-dom";

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import RootLayout from './pages/Root';

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/products" element={<ProductsPage/>} />
//   </Route>
// );

// the path is the part after the domain
const router = createBrowserRouter([
  {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        { index:true, element: <HomePage/> },
        { path: 'products', element: <ProductsPage/>},
        { path: 'products/:productId', element: <ProductDetailPage/>},
    ]
},
]);

//const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
