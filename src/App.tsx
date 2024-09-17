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
import AdvDetails from './pages/AdvDetails/AdvDetails';
import Footer from './components/Organisms/Footer/Footer';
import BreadCrumbs from './components/Molecules/Breadcrumbs/Breadcrumbs';
import SupportLink from './components/Atoms/SupportLink/SupportLink';
import PrivateArea from './pages/PrivateArea';
import EditActiveAdv from './pages/EditActiveAdv';
import ActiveAdvDetails from './pages/ActiveAdvDetails';
import OtherUser from './pages/OtherUser';
import AllReview from './pages/AllReviewActualUser';
import PurchasedAdvDetails from './pages/PurchasedAdvDetails';
import SoldAdvDetails from './pages/SoldAdvDetails';
import { createFirstUser, fillLs, User } from './storesData/account';
import { createContext, useEffect, useState } from 'react';
import { getActualUser } from './storesData/users';
import AllReviewOtherUser from './pages/AllReviewOtherUser';

export interface CurrentUserContextType {
  userState: User | null;
  setUserState: (userState: User | null) => void;
}

export const CurrentUserContext = createContext<CurrentUserContextType>({
  userState: null,
  setUserState: () => { },
});


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
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/registrazione", element: <SignUp /> },
      { path: "/vendi", element: <Create /> },
      { path: "/preferiti", element: <Favourites /> },
      { path: "/recupera-password", element: <Restore /> },
      { path: "/assistenza", element: <Support /> },
      { path: "/dettagli-annuncio", element: <AdvDetails /> },
      { path: "/area-riservata", element: <PrivateArea /> },
      { path: "/modifica-annuncio-attivo", element: <EditActiveAdv /> },
      { path: "/dettagli-annuncio-attivo", element: <ActiveAdvDetails /> },
      { path: "/dettagli-annuncio-comprato", element: <PurchasedAdvDetails /> },
      { path: "/dettagli-annuncio-venduto", element: <SoldAdvDetails /> },
      { path: "/profilo-utente", element: <OtherUser /> },
      { path: "/tutte-le-recensioni", element: <AllReview /> },
      { path: "/tutte-le-recensioni-utente", element: <AllReviewOtherUser /> }
    ]
  },
]);

export default function App() {

  const [userState, setUserState] = useState<User | null>(null);

  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem('users');
    if (!userString) {
      fillLs();
      createFirstUser();
      setIsFilled(true);
    }
  }, []);

  useEffect(() => {
    if (isFilled) {
      window.location.reload();
      //console.log("Il localStorage è stato riempito e App è stata renderizzata di nuovo");
    }
  }, [isFilled]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const user = (await getActualUser())
        if (user.email !== '') {
          setUserState(user)
        }
      } catch (error) {
        console.error("Errore durante il recupero dell'account", (error as Error).message);
      }
    };
    fetchAds();
  }, [])

  return (
    <>
      <CurrentUserContext.Provider value={{ userState, setUserState }}>
        <RouterProvider router={router} />
      </CurrentUserContext.Provider >
    </>
  )

}