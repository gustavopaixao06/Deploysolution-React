import '../assets/css/Rede.css'
import redeCabeada from '../../public/img/redeCabeada.png'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";
import seta from "/img/Vector.png";
import seta2 from "/img/Vector (1).png";

export function Rede() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="falsalinha"></div>
                    <div className="linha"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>REDE CABEADA</h1>
                </div>
            </section>

            <section className='sessao2'>
                <div className="seta9">
                    <Link to="/sala"><img src={seta} alt="" /></Link>
                </div>

                <div className="imagem">
                    <img src={redeCabeada} alt="" />
                </div>

                <div className="texto">
                    <p>A Deploy oferece soluções de rede <br /> cabeada de alta performance que garantem <br />
                        estabilidade e velocidade para todas <br /> as suas necessidades de conectividade. <br />
                        Com uma rede cabeada bem estruturada, <br /> você pode desfrutar de uma conexão <br /> à
                        internet consistente e confiável <br /> em toda a sua casa ou escritório, <br /> eliminando
                        problemas comuns de sinal fraco <br /> ou interferências. Nossos especialistas projetam <br />
                        e instalam sistemas de cabeamento que suportam<br /> altas taxas de transferência de
                        dados, ideal <br /> para streaming de vídeo em alta definição.</p>
                </div>

                <div className="seta10">
                    <Link to="/wifi"><img src={seta2} alt="" /></Link>
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