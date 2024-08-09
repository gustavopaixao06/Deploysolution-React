import '../assets/css/Wifi.css'
import wifi from '../../public/img/wi-fi.png'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";
import seta from "/img/Vector.png";
import seta2 from "/img/Vector (1).png";

export function Wifi() {

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
                    <h1>WI-FI AVANÇADO</h1>
                </div>
            </section>

            <section className='sessao2'>

                <div className="seta11">
                    <Link to="/rede" onClick={scrollToTop}><img src={seta} alt="" /></Link>
                </div>
                <div className="imagem2">
                    <img src={wifi} alt="" />
                </div>

                <div className="texto2">
                    <p>A Deploy oferece soluções de WiFi avançado  <br /> que garantem cobertura ampla  e
                        velocidade <br /> excepcional em toda a  sua casa ou escritório. <br /> Com nossa
                        tecnologia de ponta, você pode <br /> desfrutar de uma conexão sem fio robusta
                        e <br /> estável, eliminando pontos cegos e áreas de <br /> sinal fraco. Nossos sistemas
                        de WiFi avançado <br /> são projetados para suportar múltiplos disposi- <br /> tivos
                        simultaneamente, proporcionando uma <br /> experiência de navegação rápida e
                        sem interrupções, <br /> seja para streaming de vídeos em alta definição, <br /> jogos
                        nline, videoconferências ou navegação diária.</p>
                </div>

                <div className="seta12">
                    <Link to="/seguranca" onClick={scrollToTop}><img src={seta2} alt="" /></Link>
                </div>

            </section>

            <section className='button'>
                <div className='botao-4'>
                    <Link to="/contato" onClick={scrollToTop}><button>Faça seu orçamento aqui!</button></Link>
                </div>
            </section>
            
            <div className='fixed-bottom right-100 p-3'>
                <a id='botaoFixo' href="https://web.whatsapp.com/send?phone=11966413001" target='_blank' rel='noopener noreferrer'>
                    <img src={whatsapp} className="custom-whatsapp-img" alt="WhatsApp" />
                </a>
            </div>
        </>
    )
}