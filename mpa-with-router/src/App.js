import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";


// the path is the part after the domain
const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
