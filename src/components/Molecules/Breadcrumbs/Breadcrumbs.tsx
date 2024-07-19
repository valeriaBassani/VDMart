import './Breadcrumbs.css';
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <h5><Link to="/">Home</Link></h5>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={to} className="breadcrumb-item">
                            <h5><Link to={to}>{value}</Link></h5>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );

}