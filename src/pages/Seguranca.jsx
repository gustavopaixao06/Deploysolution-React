import '../assets/css/Seguranca.css'
import segurancaEletronica from '../../public/img/segurancaEletronica.png'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";
import seta from "/img/Vector.png";
import seta2 from "/img/Vector (1).png";

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
                <div className="seta13">
                    <Link to="/wifi"><img src={seta} alt="" /></Link>
                </div>
                <div className="imagem">
                    <img src={segurancaEletronica} alt="" />
                </div>

                <div className="artigo">
                    <p>A Deploy oferece soluções completas de <br /> segurança eletrônica para proteger
                        sua <br /> residência, empresa ou propriedade. Nossos <br /> sistemas integrados incluem
                        câmeras de <br /> vigilância de alta definição, sensores de movimento, <br /> alarmes de
                        intrusão e controle de acesso, <br /> proporcionando uma proteção abrangente  <br /> contra
                        ameaças externas e internas. Com a  <br />  nossa tecnologia avançada, você pode monitorar <br /> remotamente
                        sua propriedade em tempo real, <br /> receber alertas instantâneos em caso de atividades <br /> suspeitas
                        e até mesmo acionar as autoridades <br /> rapidamente em caso de emergência.   </p>
                </div>

                <div className="seta14">
                    <Link to="/iluminacao"><img src={seta2} alt="" /></Link>
                </div>

            </section>

            <section className='button'>
                <div className='botao-3'>
                    <Link to="/contato"><button>Faça seu orçamento aqui!</button></Link>
                </div>
            </section>

            <div className='fixed-bottom right-100 p-3' >
                <a id='botaoFixo' href="https://web.whatsapp.com/send?phone=11966413001" target='_blank' rel='noopener noreferrer'>
                    <img src={whatsapp} className="custom-whatsapp-img" alt="WhatsApp" />
                </a>
            </div>

        </>
    )
}