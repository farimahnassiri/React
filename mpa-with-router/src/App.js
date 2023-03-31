import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';


// the path is the part after the domain
const router = createBrowserRouter([
  { path: '/', element: <HomePage/> },
  { path: '/products', element: <ProductsPage/> }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
