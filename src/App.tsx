import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import NavBar from './components/NavBar/NavBar';
import ErrorPage from "./pages/error-page";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home/Home';
import Create from './pages/Create';
import Favourite from './components/Favourite/Favourite';
import Favourites from './pages/Favourites';
import Restore from './pages/RestorePsw';
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    // children: [ se voglio che il link venga aperto nella stessa pagina, ma, per esempio, in una sezione diversa
    //   {
    //     path: "login",
    //     element: <Login />,
    //   },
    // ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
  {
    path: "/restore",
    element: <Restore />,
  },
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}