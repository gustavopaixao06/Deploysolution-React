import './footer.css'
import { Link} from "react-router-dom";
import Whatsapp from "../../../public/img/icon-what.svg"
import Instagram from "../../../public/img/icon-insta.svg"

export function Footer() {

    return (
        <>
            <footer className='rodape'>
                <div className="footer">
                    <section className='part-1'>
                        <figure className='logo-2'>
                            <img src="/img/logo.png" alt="" />
                        </figure>
                        <div className='info'>
                            <p>
                                Desde 2020 trabalhando com <br />
                                tecnologias inovadoras para <br />
                                tornar sua casa um ambiente <br />
                                inteligente.
                            </p>
                        </div>
                        <div className='info-2'>
                            <p>
                                deploy@deploysolution.com.br
                            </p>
                        </div>
                        <div className="icons-mobile">
                                <a href="https://web.whatsapp.com/send?phone=11966413001" target='_blank'><img src={Whatsapp} alt="" /></a>
                                <a href="https://www.instagram.com/deploy_solution?igsh=MW04Y3A3emZjbXowNg==" target='_blank'><img src={Instagram} alt="" /></a>
                            </div>
                    </section>
                    <section className="part-2">
                        <div className='titulo'>
                            <p>Pages</p>
                        </div>
                        <div className='nav'>
                            <ul>
                                <li>
                                    <Link to="/" className='nav-item' id="buttonHome">Home</Link>
                                </li>
                                <li>
                                    <Link to="/sobre"  className='nav-item' id="buttonSobre">Sobre</Link>
                                </li>
                                <li>
                                    <Link to="/servico"  className='nav-item' id="buttonServiços">Serviços</Link>
                                </li>
                                <li>
                                    <Link to="/contato"  className='nav-item' id="buttonContato">Contato</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className='part-3'>
                        <div className='redes-sociais'>
                            <h1>Nossas redes</h1>
                            <div className="icons">
                                <a href="https://web.whatsapp.com/send?phone=11966413001" target='_blank'><img src={Whatsapp} alt="" /></a>
                                <a href="https://www.instagram.com/deploy_solution?igsh=MW04Y3A3emZjbXowNg==" target='_blank'><img src={Instagram} alt="" /></a>
                            </div>
                        </div>
                    </section>
                </div>

                <section className='part-4'>
                    <div className='rodape'>
                        <h5>2024 por Deploy. Orgulhosamente criado por G&G</h5>
                    </div>
                </section>

            </footer>




        </>
    )
}