import '../assets/css/Servicos.css'
import cozinha from '../../public/img/cozinha.png'
import iluminacao from '../../public/img/iluminacao.png'
import ambientacao from '../../public/img/ambientacao.png'
import controle from '../../public/img/controle.png'
import sala from '../../public/img/sala.png'
import rede from '../../public/img/rede.png'
import wifi from '../../public/img/wifi.png'
import seguranca from '../../public/img/seguranca.png'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";

export function Servico() {
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

            </section>

            <section className='dois'>
                <div className="suaCasa">
                    <h1>Tudo para a sua casa!</h1>
                </div>
            </section>

            <section className='tres'>
                <div className="grupo1">
                    <div className='cartaoUm'>
                        <Link to="/iluminacao" id='img1'><img src={iluminacao} alt="" /></Link>
                        <Link to="/iluminacao"><h2>Iluminação Inteligente</h2></Link>
                    </div>
                    <div className='cartaoDois'>
                        <Link to="/ambientacao" id='img1'><img src={ambientacao} alt="" /></Link>
                        <Link to="/ambientacao"><h2>Ambientação Áudio e <br /> Vídeo</h2></Link>
                    </div>
                    <div className='cartaoTres'>
                        <Link to="/controle" id='img1'><img src={controle} alt="" /></Link>
                        <Link to="/controle"><h2>Controle de Iluminação <br /> e Persianas</h2></Link>
                    </div>
                </div>

                <div className="grupo2">
                    <div className='cartaoQuatro'>
                    <Link to="/sala" id='img1'><img src={sala} alt="" /></Link>
                    <Link to="/sala"><h2>Sala de Cinema <br /> Personalizada</h2></Link>
                    </div>
                    <div className='cartaoCinco'>
                        <Link to="/rede" id='img1'><img src={rede} alt="" /></Link>
                        <Link to="/rede"><h2>Rede Cabeada</h2></Link>    
                    </div>
                    <div className='cartaoSeis'>
                        <Link to="/wifi" id='img1'><img src={wifi} alt="" /></Link>
                        <Link to="/wifi"><h2>Wi-Fi Avançado</h2></Link>
                    </div>

                </div>

                <div className='cartaoSete'>
                    <Link to="/seguranca" id='img1'><img src={seguranca} alt="" /></Link>
                    <Link to="/seguranca"><h2>Segurança Eletrônica</h2></Link>
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