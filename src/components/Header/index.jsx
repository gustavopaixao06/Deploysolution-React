import { Link, useLocation } from "react-router-dom";
import './header.css';
import React, { useEffect } from 'react';

export function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        // Remove a classe 'check' de todos os links
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('check'));

        // Adiciona a classe 'check' ao link correspondente à URL atual
        switch (currentPath) {
            case '/home':
                document.getElementById('buttonHome')?.classList.add('check');
                break;
            case '/sobre':
                document.getElementById('buttonSobre')?.classList.add('check');
                break;
            case '/servico':
                document.getElementById('buttonServiços')?.classList.add('check');
                break;
            case '/contato':
                document.getElementById('buttonContato')?.classList.add('check');
                break;
            default:
                break;
        }

    }, [currentPath]);

    const showMenuMobile = () => {
        const menuMobile = document.querySelector('.mobile-click');
        
        let menuStatus = 0

        if (menuStatus === 0) {
            menuMobile.classList.toggle("menu-show");
            menuStatus++;
        } else {
            menuMobile.classList.remove("menu-show");
            menuStatus--;
        }
    };

    return (
        <>
            <header>
                <div className='centro'>
                    <figure className='logo'>
                        <Link to="/"><img src="/img/logo.png" alt="Logo" /></Link>
                    </figure>

                    <nav className='menu-desktop'>
                        <ul>
                            <li>
                                <Link to="/" className="nav-item" id="buttonHome">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre" className="nav-item" id="buttonSobre">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/servico" className="nav-item" id="buttonServiços">Serviços</Link>
                            </li>
                            <li>
                                <Link to="/contato" className="nav-item" id="buttonContato">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='centro-mobile'>
                    <figure className='logo'>
                        <Link to="/"><img src="/img/logo.svg" alt="Logo" /></Link>
                    </figure>

                    <figure className="menu-sanduiche">
                        <Link onClick={showMenuMobile} aria-label="Open Menu">
                            <img src="/img/menu-sanduiche.svg" alt="Menu" />
                        </Link>
                    </figure>
                </div>

                <div className="mobile-click">
                    <div className="navegacao-mobile">
                        <div className="mobile-exit">
                            <Link onClick={showMenuMobile} aria-label="Open Menu">
                                <img src="/img/exit.svg" alt="Menu" />
                            </Link>
                        </div>

                        <nav className='menu-mobile'>
                            <ul>
                                <li>
                                    <Link onClick={showMenuMobile} to="/" className="nav-item" id="buttonHome">Home</Link>
                                </li>
                                <li>
                                    <Link onClick={showMenuMobile} to="/sobre" className="nav-item" id="buttonSobre">Sobre</Link>
                                </li>
                                <li>
                                    <Link onClick={showMenuMobile} to="/servico" className="nav-item" id="buttonServiços">Serviços</Link>
                                </li>
                                <li>
                                    <Link onClick={showMenuMobile} to="/contato" className="nav-item" id="buttonContato">Contato</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
