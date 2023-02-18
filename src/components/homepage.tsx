import { Link } from "react-router-dom"

export default function Home() {
    return (<div className="homePage">
        <div className="BigBox hoverBlue"  >statistique</div>
        <Link to={'/admin'} className="BigBox hoverYello"  >administration</Link>
    </div>)
}