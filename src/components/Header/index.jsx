import { Link } from "react-router-dom";
import './header.css'


export function Header() {
    return (
        <>

            <header>

                <div className='centro'>

                    <figure className='logo'>
                        <Link to="/" ><img src="/img/logo.svg" alt="" /></Link>
                    </figure>

                    <nav className='menu-desktop'>

                        <ul>
                            <li>
                                <Link to="/" className="nav-item">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre" className="nav-item">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/servico" className="nav-item">Serviços</Link>
                            </li>
                            <li>
                                <Link to="/contato" className="nav-item">Contato</Link>
                            </li>

                        </ul>

                    </nav>

                </div>

                <div className='centro-mobile'>

                    <figure className='logo'>
                        <Link to="/" ><img src="/img/logo.svg" alt="" /></Link>
                    </figure>

                    <figure className="menu-sanduiche">
                        <Link><img src="/img/menu-sanduiche.svg" alt="" /></Link>
                    </figure>

                </div>

            </header>

        </>
    )

}