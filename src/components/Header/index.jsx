import { Link, useLocation } from "react-router-dom";
import './header.css';
import React, { useEffect } from 'react';

export function Header() {
    const location = useLocation();
    const currentPath = location.pathname; // Obtém o caminho da URL atual

    useEffect(() => {
        // Remove a classe 'check' de todos os links
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('check'));

        // Adiciona a classe 'check' ao link correspondente à URL atual
        if (currentPath === '/home') {
            document.getElementById('buttonHome')?.classList.add('check');
        } else if (currentPath === '/sobre') {
            document.getElementById('buttonSobre')?.classList.add('check');
        } else if (currentPath === '/servico') {
            document.getElementById('buttonServiços')?.classList.add('check');
        } else if (currentPath === '/contato') {
            document.getElementById('buttonContato')?.classList.add('check');
        }
    }, [currentPath]); 
    return (
        <>

            <header>

                <div className='centro'>

                    <figure className='logo'>
                        <Link to="/home" ><img src="/img/logo.svg" alt="" /></Link>
                    </figure>

                    <nav className='menu-desktop'>

                        <ul>
                            <li>
                                <Link to="/home" className="nav-item" id="buttonHome">Home</Link>
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