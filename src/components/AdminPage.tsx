import { Link } from "react-router-dom";

export default function AdminPage() {
    return (<div className="homePage">
        <Link to={'/employsManagement'} className="BigBox hoverBlue"  >gestion des employés</Link>
        <Link to={'/productManagement'} className="BigBox hoverYello"  >gestion des produis</Link>
        <div className="BigBox hoverRed"  >gestion des stoque</div>
    </div>)
}