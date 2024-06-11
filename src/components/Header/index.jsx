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
                            <li><a href="/">Home</a> </li>
                            <li><a href="/sobre">Sobre</a></li>
                            <li><a href="/servico">Serviços</a></li>
                            <li><a href="/contato"> Contato</a></li>
                        </ul>

                    </nav>

                </div>

            </header>

        </>
    )

}