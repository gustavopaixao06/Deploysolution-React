import '../assets/css/Servicos.css'
import cozinha from '../../public/img/cozinha.png'
import iluminacao from '../../public/img/iluminacao.png'
import ambientacao from '../../public/img/ambientacao.png'
import controle from '../../public/img/controle.png'
import sala from '../../public/img/sala.png'
import rede from '../../public/img/rede.png'
import wifi from '../../public/img/wifi.png'
import seguranca from '../../public/img/seguranca.png'

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
                        <a id='img1' href="/iluminacao"><img src={iluminacao} alt="" /></a>
                        <h2>Iluminação Inteligente</h2>
                    </div>
                    <div className='cartaoDois'>
                        <a id='img1' href="/ambientacao"><img src={ambientacao} alt="" /></a>
                        <h2>Ambientação Áudio e <br /> Vídeo</h2>
                    </div>
                    <div className='cartaoTres'>
                        <a id='img1' href="/controle"><img src={controle} alt="" /></a>
                        <h2>Controle de Iluminação <br /> e Persianas</h2>
                    </div>
                </div>

                <div className="grupo2">
                    <div className='cartaoQuatro'>
                        <a id='img1' href="/sala"><img src={sala} alt="" /></a>
                        <h2>Sala de Cinema <br /> Personalizada</h2>
                    </div>
                    <div className='cartaoCinco'>
                        <a id='img1' href="/rede"><img src={rede} alt="" /></a>
                        <h2>Rede Cabeada</h2>
                    </div>
                    <div className='cartaoSeis'>
                        <a id='img1' href="/wifi"><img src={wifi} alt="" /></a>
                        <h2>Wi-Fi Avançado</h2>
                    </div>

                </div>

                <div className='cartaoSete'>
                    <a id='img1' href="/seguranca"><img src={seguranca} alt="" /></a>
                    <h2>Segurança Eletrônica</h2>
                </div>

            </section>

        </>
    )
}