import '../assets/css/Wifi.css'
import wifi from '../../public/img/wi-fi.png'
import { Link } from 'react-router-dom'

export function Wifi() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="reta"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>WI-FI AVANÇADO</h1>
                </div>
            </section>

            <section className='sessao2'>
                <div className="imagem">
                    <img src={wifi} alt="" />
                </div>

                <div className="tema">
                    <p>A Deploy oferece soluções de WiFi avançado  <br /> que garantem cobertura ampla  e 
                        velocidade <br /> excepcional em toda a  sua casa ou escritório. <br /> Com nossa 
                        tecnologia de ponta, você pode <br /> desfrutar de uma conexão sem fio robusta
                         e <br /> estável, eliminando pontos cegos e áreas de <br /> sinal fraco. Nossos sistemas
                          de WiFi avançado <br /> são projetados para suportar múltiplos disposi- <br /> tivos 
                          simultaneamente, proporcionando uma <br /> experiência de navegação rápida e 
                          sem interrupções, <br /> seja para streaming de vídeos em alta definição, <br /> jogos 
                          nline, videoconferências ou navegação diária.</p>
                </div>

            </section>

            <section className='button'>
                <div className='botao-3'>
                    <Link to="/contato"><button>Faça seu orçamento aqui!</button></Link>
                </div>
            </section>
        </>
    )
}