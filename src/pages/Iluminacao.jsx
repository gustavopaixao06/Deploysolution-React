import '../assets/css/Iluminacao.css'
import imagem1 from '../../public/img/imagem1.png'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";
import seta from "/img/Vector.png";
import seta2 from "/img/Vector (1).png";

export function Iluminacao() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="falsalinha"></div>
                    <div className="linha"></div>
                </div>

                <div className="iluminacao1">
                    <h3>Nossos Serviços</h3>
                    <h1>ILUMINAÇÃO INTELIGENTE</h1>
                </div>
            </section>

            <section className='sessao2'>

                <div className="seta">
                    <Link to="/seguranca"><img src={seta} alt="" /></Link>
                </div>
                <div className="imagem3">
                    <img src={imagem1} alt="" />
                </div>

                <div className="artigo1">
                    <p>A iluminação inteligente da Deploy vai <br /> além de simplesmente acender e apagar <br /> luzes. Com nossas soluções
                        avançadas, <br /> você pode transformar completamente a <br /> atmosfera da sua casa, criando <br /> ambientes personalizados
                        para cada <br /> momento do dia ou atividade. Através de <br /> um simples toque em seu smartphone ou <br /> tablet, você
                        controla todas as luzes da sua <br /> casa, ajustando intensidade, cor e <br /> temperatura conforme sua preferência.</p>
                </div>

                <div className="seta2">
                    <Link to="/ambientacao"><img src={seta2} alt="" /></Link>
                </div>

            </section>

            <section className='button'>
                <div className='botao-4'>
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