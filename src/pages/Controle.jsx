import '../assets/css/Controle.css'
import controleIluminacao from '../../public/img/controleIluminacao.png'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";
import seta from "/img/Vector.png";
import seta2 from "/img/Vector (1).png";

export function Controle() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="falsalinha"></div>
                    <div className="linha"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>CONTROLE DE ILUMINAÇÃO E PERSIANAS</h1>
                </div>
            </section>

            <section className='sessao2'>

                <div className="seta5">
                    <Link to="/ambientacao"><img src={seta} alt="" /></Link>
                </div>

                <div className="imagem">
                    <img src={controleIluminacao} alt="" />
                </div>

                <div className="pesquisa">
                    <p>O controle de iluminação e persianas da Deploy <br /> oferece uma solução integrada para transformar <br /> sua casa
                        em um ambiente inteligente e funcional. <br /> Com nossas tecnologias avançadas, você <br /> pode ajustar a iluminação
                        e a posição <br /> das persianas de maneira sincronizada, <br /> criando o ambiente perfeito para qualquer ocasião. <br />
                        Seja para aproveitar a luz natural durante <br /> o dia ou criar um clima acolhedor à noite, <br /> tudo pode ser
                        feito com facilidade <br /> através de um simples toque no seu smartphone <br /> ou tablet.</p>
                </div>

                <div className="seta6">
                    <Link to="/sala"><img src={seta2} alt="" /></Link>
                </div>

            </section>

            <section className='button'>
                <div className='botao-3'>
                    <Link to="/contato"><button>Faça seu orçamento aqui!</button></Link>
                </div>
            </section>

            <div className='fixed-bottom right-100 p-3' style={{ zIndex: 6, left: 'initial',top: '20vw'}}>
                <a id='botaoFixo' href="https://web.whatsapp.com/send?phone=11966413001" target='_blank' rel='noopener noreferrer'>
                    <img src={whatsapp} className="custom-whatsapp-img" alt="WhatsApp" />
                </a>
            </div>
        </>
    )
}