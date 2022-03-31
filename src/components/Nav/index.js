import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <h1>Generative Art Sandbox</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/canvasone">
                            Canvas 1
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;