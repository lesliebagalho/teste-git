import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
        <div>
            <div>Logo</div>

            <nav>
                <Link to="/home">Home</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </div>
        </>
    )
}