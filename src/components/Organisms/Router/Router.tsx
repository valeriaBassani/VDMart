import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Login from "../../../pages/Login";
import Home from "../../../pages/Home/Home";
import SignUp from "../../../pages/SignUp";
import Create from "../../../pages/Create";
import Favourites from "../../../pages/Favourites";
import Support from "../../../pages/Support";
import AdvDetails from "../../../pages/EditActiveAdv";
import ActiveAdvDetails from "../../../pages/ActiveAdvDetails";
import AllReview from "../../../pages/AllReviewActualUser";
import EditActiveAdv from "../../../pages/EditActiveAdv";
import ErrorPage from "../../../pages/error-page";
import OtherUser from "../../../pages/OtherUser";
import PrivateArea from "../../../pages/PrivateArea";
import PurchasedAdvDetails from "../../../pages/PurchasedAdvDetails";
import SoldAdvDetails from "../../../pages/SoldAdvDetails";
import SupportLink from "../../Atoms/SupportLink/SupportLink";
import BreadCrumbs from "../../Molecules/Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

import { useContext } from "react";
import { CurrentUserContext } from "../../../App";
import Restore from "../../../pages/RestorePsw";

export default function Router() {
    const { userState } = useContext(CurrentUserContext);
    const Main = () => (
        <>
            <NavBar />s
            <BreadCrumbs />
            <Outlet />
            <SupportLink />
            <Footer />
        </>
    );

    // Configurazione del router
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            errorElement: <ErrorPage />,
            children: [
                // Rotte protette
                {
                    element: userState ? <Outlet /> : <Navigate to="/login" />,
                    children: [
                        { path: "/area-riservata", element: <PrivateArea /> },
                        { path: "/vendi", element: <Create /> },
                        { path: "/preferiti", element: <Favourites /> },
                        { path: "/dettagli-annuncio", element: <AdvDetails /> },
                        { path: "/modifica-annuncio-attivo", element: <EditActiveAdv /> },
                        { path: "/dettagli-annuncio-attivo", element: <ActiveAdvDetails /> },
                        { path: "/dettagli-annuncio-comprato", element: <PurchasedAdvDetails /> },
                        { path: "/dettagli-annuncio-venduto", element: <SoldAdvDetails /> },
                        { path: "/profilo-utente", element: <OtherUser /> },
                        { path: "/tutte-le-recensioni", element: <AllReview /> },
                    ],
                },
                // Rotte pubbliche
                {
                    element: !userState ? <Outlet /> : <Navigate to="/area-riservata" />,
                    children: [
                        { path: "/", element: <Home /> },
                        { path: "/login", element: <Login /> },
                        { path: "/registrazione", element: <SignUp /> },
                        { path: "/recupera-password", element: <Restore /> },
                        { path: "/assistenza", element: <Support /> },
                    ],
                },
            ],
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}

// const Main = () => (
//     <>
//         <NavBar />
//         <BreadCrumbs />
//         <Outlet />
//         <SupportLink />
//         <Footer />
//     </>
// );
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main />,
//         errorElement: <ErrorPage />,
//         children: [
//             { path: "/", element: <Home /> },
//             { path: "/login", element: <Login /> },
//             { path: "/registrazione", element: <SignUp />, },
//             { path: "/vendi", element: <Create />, },
//             { path: "/preferiti", element: <Favourites />, },
//             { path: "/recupera-password", element: <Restore />, },
//             { path: "/assistenza", element: <Support />, },
//             { path: "/dettagli-annuncio", element: <AdvDetails />, },
//             { path: "/area-riservata", element: <PrivateArea />, },
//             { path: "/modifica-annuncio-attivo", element: <EditActiveAdv />, },
//             { path: "/dettagli-annuncio-attivo", element: <ActiveAdvDetails />, },
//             { path: "/dettagli-annuncio-comprato", element: <PurchasedAdvDetails />, },
//             { path: "/dettagli-annuncio-venduto", element: <SoldAdvDetails />, },
//             { path: "/profilo-utente", element: <OtherUser />, },
//             { path: "/tutte-le-recensioni", element: <AllReview />, },
//         ],
//     },
// ]);

// const routerNotLogin = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main />,
//         errorElement: <ErrorPage />,
//         children: [
//             { path: "/", element: <Home />, },
//             { path: "/login", element: <Login />, },
//             { path: "/registrazione", element: <SignUp />, },
//             { path: "/recupera-password", element: <Restore />, },
//             { path: "/assistenza", element: <Support />, },
//             { path: "/dettagli-annuncio", element: <AdvDetails />, },
//             { path: "/area-riservata", element: <PrivateArea />, },
//         ],
//     },
// ]);

// export default function Router() {
//     return <RouterProvider router={router} />;
// }
