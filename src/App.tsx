import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/Organisms/NavBar/NavBar';
import ErrorPage from "./pages/error-page";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home/Home';
import Create from './pages/Create';
import Favourites from './pages/Favourites';
import Restore from './pages/RestorePsw';
import Support from './pages/Support';
import AdvDetails from './pages/AdvDetails';
import Footer from './components/Organisms/Footer/Footer';
import BreadCrumbs from './components/Molecules/Breadcrumbs/Breadcrumbs';
import SupportLink from './components/Atoms/SupportLink/SupportLink';
import PrivateArea from './pages/PrivateArea';
import EditActiveAdv from './pages/EditActiveAdv';
import ActiveAdvDetails from './pages/ActiveAdvDetails';
import OtherUser from './pages/OtherUser';
import AllReview from './pages/AllReview';

const Main = () => (
  <>
    <NavBar />
    <BreadCrumbs />
    <Outlet />
    <SupportLink />
    <Footer />
  </>
)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registrazione",
        element: <SignUp />,
      },
      {
        path: "/vendi",
        element: <Create />,
      },
      {
        path: "/preferiti",
        element: <Favourites />,
      },
      {
        path: "/recupera-password",
        element: <Restore />,
      },
      {
        path: "/assistenza",
        element: <Support />,
      },
      {
        path: "/dettagli-annuncio",
        element: <AdvDetails />,
      },
      {
        path: "/area-riservata",
        element: <PrivateArea />,
      },
      {
        path: "/modifica-annuncio-attivo",
        element: <EditActiveAdv />,
      },
      {
        path: "/dettagli-annuncio-attivo",
        element: <ActiveAdvDetails />,
      },
      {
        path: "/profilo-utente",
        element: <OtherUser />,
      },
      {
        path: "/tutte-le-recensioni",
        element: <AllReview />,
      },
    ]
    // children: [ se voglio che il link venga aperto nella stessa pagina, ma, per esempio, in una sezione diversa
    //   {
    //     path: "login",
    //     element: <Login />,
    //   },
    // ],
  },

]);

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}