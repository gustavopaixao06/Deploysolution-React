import '../assets/css/Servicos.css'
import cozinha from '../../public/img/cozinha.png'
import cozinhaMobile from '../../public/img/cozinha-mobile.svg'
import iluminacao from '../../public/img/iluminacao.png'
import iluminacaoMobile from '../../public/img/iluminacao-mobile.svg'
import ambientacao from '../../public/img/ambientacao.png'
import ambientacaoMobile from '../../public/img/ambientacao-mobile.svg'
import controle from '../../public/img/controle.png'
import controleMobile from '../../public/img/controle-mobile.svg'
import sala from '../../public/img/sala.png'
import salaMobile from '../../public/img/sala-mobile.svg'
import rede from '../../public/img/rede.png'
import redeMobile from '../../public/img/rede-mobile.svg'
import wifi from '../../public/img/wifi.png'
import wifiMobile from '../../public/img/wifi-mobile.svg'
import seguranca from '../../public/img/seguranca.png'
import segurancaMobile from '../../public/img/seguranca-mobile.svg'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";

export function Servico() {

    const scrollToTop= () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>

            <section className='um'>

                <div className="imgConzinha">
                    <img src={cozinha} alt="" />
                </div>

                <div className="nossoServicos">
                    <h1>NOSSOS SERVIÇOS</h1>
                    <h5>Saiba mais sobre o que você encontrará em nossa empresa</h5>
                </div>

                <div className="imgConzinha-mobile">
                    <img src={cozinhaMobile} alt="" />
                </div>

            </section>

            <section className='dois'>
                <div className="suaCasa">
                    <h1>Tudo para a sua casa!</h1>
                </div>
            </section>

            <section className='tres'>
                <div className="grupo1">
                    <div className='cartaoUm'>
                        <Link to="/iluminacao" id='img1' onClick={scrollToTop}><img src={iluminacao} alt="" /></Link>
                        <Link to="/iluminacao" onClick={scrollToTop}><h2>Iluminação Inteligente</h2></Link>
                    </div>
                    <div className='cartaoDois'>
                        <Link to="/ambientacao" id='img1' onClick={scrollToTop}><img src={ambientacao} alt="" /></Link>
                        <Link to="/ambientacao" onClick={scrollToTop}><h2>Ambientação Áudio e <br /> Vídeo</h2></Link>
                    </div>
                    <div className='cartaoTres'>
                        <Link to="/controle" id='img1' onClick={scrollToTop}><img src={controle} alt="" /></Link>
                        <Link to="/controle" onClick={scrollToTop}><h2>Controle de Iluminação <br /> e Persianas</h2></Link>
                    </div>
                </div>

                <div className="grupo2">
                    <div className='cartaoQuatro'>
                        <Link to="/sala" id='img1' onClick={scrollToTop}><img src={sala} alt="" /></Link>
                        <Link to="/sala" onClick={scrollToTop}><h2>Sala de Cinema <br /> Personalizada</h2></Link>
                    </div>
                    <div className='cartaoCinco'>
                        <Link to="/rede" id='img1' onClick={scrollToTop}><img src={rede} alt="" /></Link>
                        <Link to="/rede" onClick={scrollToTop}><h2>Rede Cabeada</h2></Link>
                    </div>
                    <div className='cartaoSeis'>
                        <Link to="/wifi" id='img1' onClick={scrollToTop}><img src={wifi} alt="" /></Link>
                        <Link to="/wifi" onClick={scrollToTop}><h2>Wi-Fi Avançado</h2></Link>
                    </div>

                </div>

                <div className='cartaoSete'>
                    <Link to="/seguranca" id='img1' onClick={scrollToTop}><img src={seguranca} alt="" /></Link>
                    <Link to="/seguranca" onClick={scrollToTop}><h2>Segurança Eletrônica</h2></Link>
                </div>

            </section>

            <section className="tres-mobile">

                <div className='cartaoUm-mobile'>
                    <Link to="/iluminacao" onClick={scrollToTop}><img src={iluminacaoMobile} alt="" /></Link>
                    <Link to="/ambientacao" onClick={scrollToTop}><img src={ambientacaoMobile} alt="" /></Link>
                </div>

                <div className='cartaoUm-mobile'>
                    <Link to="/controle" onClick={scrollToTop}><img src={controleMobile} alt="" /></Link>
                    <Link to="/sala" onClick={scrollToTop}><img src={salaMobile} alt="" /></Link>
                </div>

                <div className='cartaoUm-mobile'>
                    <Link to="/rede" onClick={scrollToTop}><img src={redeMobile} alt="" /></Link>
                    <Link to="/wifi" onClick={scrollToTop}><img src={wifiMobile} alt="" /></Link>
                </div>

                <div className='cartaoUm-mobile'>
                    <Link to="/seguranca" onClick={scrollToTop}><img src={segurancaMobile} alt="" /></Link>
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