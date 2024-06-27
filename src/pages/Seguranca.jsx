import '../assets/css/Iluminacao.css'
import segurancaEletronica from '../../public/img/segurancaEletronica.png'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";

export function Seguranca() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="falsalinha"></div>
                    <div className="linha"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>SEGURANÇA ELETRÔNICA</h1>
                </div>
            </section>

            <section className='sessao2'>
                <div className="imagem">
                    <img src={segurancaEletronica} alt="" />
                </div>

                <div className="artigo">
                    <p>A Deploy oferece soluções completas de <br /> segurança eletrônica para proteger
                        sua <br /> residência, empresa ou propriedade. Nossos <br /> sistemas integrados incluem
                        câmeras de <br /> vigilância de alta definição, sensores de movimento, <br /> alarmes de
                        intrusão e controle de acesso, <br /> proporcionando uma proteção abrangente contra <br />
                        ameaças externas e internas. Com a nossa <br /> tecnologia avançada, você pode monitorar <br /> remotamente
                        sua propriedade em tempo real, <br /> receber alertas instantâneos em caso de atividades <br /> suspeitas
                        e até mesmo acionar as autoridades <br /> rapidamente em caso de emergência.   </p>
                </div>

            </section>

            <section className='button'>
                <div className='botao-3'>
                    <Link to="/contato"><button>Faça seu orçamento aqui!</button></Link>
                </div>
            </section>

            <div className='fixed-bottom right-100 p-3' style={{ zIndex: "6", left: "initial", top: 500 }}>
                <a href="https://web.whatsapp.com/send?phone=11966413001" target='_blank'>
                    <img src={whatsapp} width="60" alt="aaaa" />
                </a>
            </div>

        </>
    )
}