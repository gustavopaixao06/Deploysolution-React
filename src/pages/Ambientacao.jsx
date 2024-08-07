import '../assets/css/Ambientacao.css'
import imagem2 from '../../public/img/image 17.svg'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";
import seta from "/img/Vector.png";
import seta2 from "/img/Vector (1).png";


export function Ambientacao() {

    const scrollToTop= () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="falsalinha"></div>
                    <div className="linha"></div>
                </div>

                <div className="iluminacao3">
                    <h3>Nossos Serviços</h3>
                    <h1>AMBIENTAÇÃO ÁUDIO E VÍDEO</h1>
                </div>
            </section>

            <section className='sessao2'>

                <div className="seta3">
                    <Link to="/iluminacao" onClick={scrollToTop}><img src={seta} alt="" /></Link>
                </div>

                <div className="imagem2">
                    <img src={imagem2} alt="" />
                </div>

                <div className="texto2">
                    <p>
                        Ambientação de áudio e vídeo da Deploy é <br /> criar o clima certo usando som e imagem. <br /> Áudio é o que você ouve,
                        como música <br /> e efeitos sonoros, enquanto vídeo é o que <br /> você vê na tela. Juntos, ajudam a transmitir <br /> emoções e
                        prender a atenção do espectador. <br /> É sobre escolher os sons e imagens certos <br /> para tornar uma história ou
                        apresentação <br /> mais envolvente.  Além disso, a combinação <br /> eficaz de áudio e vídeo pode transformar uma <br /> mensagem simples em uma
                        experiência imersiva.
                    </p>
                </div>

                <div className="seta4">
                    <Link to="/controle" onClick={scrollToTop}><img src={seta2} alt="" /></Link>
                </div>
            </section>

            <section className='button'>
                <div className='botao-4'>
                    <Link to="/contato" onClick={scrollToTop}><button>Faça seu orçamento aqui!</button></Link>
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