import { Link } from "react-router-dom";
import './header.css'


export function Header() {
    return (
        <>

            <header>

                <div className='centro'>

                    <figure className='logo'>
                        <img src="/img/logo.svg" alt="" />
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

                            {/* <li><a href="/">Home</a> </li>
                            <li><a href="/sobre">Sobre</a></li>
                            <li><a href="/servico">Serviços</a></li>
                            <li><a href="/contato"> Contato</a></li> */}

                        </ul>

                    </nav>

                </div>

            </header>

        </>
    )

}