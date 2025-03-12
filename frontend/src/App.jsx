import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

const router = createBrowserRouter([
  {path:"/",element:<HomePage/>},
  {path:"/register",element:<Signup/>},
  {path:"/login",element:<Login/>},
])

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App