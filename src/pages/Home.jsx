import '../assets/css/Home.css'
import imgHome from '../../public/img/home-img 1.png'
import imgConheca from '../../public/img/image 7.png'
import imgConheca2 from '../../public/img/imgConheca2.svg'
import samsung from '../../public/img/samsung.png'
import wave from '../../public/img/wave.png'
import sonos from '../../public/img/sonos.png'
import creston from '../../public/img/creston.png'
import yamaha from '../../public/img/Yamaha.png'
import stealte from '../../public/img/stealte.png'
import advanced from '../../public/img/advanced.png'
import origin from '../../public/img/origin.png'
import whatsapp from "/img/whatsapp-icon.png";
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <>
            <section className='parte-1'>
                <div className="home">
                    <h1>Inteligência residencial  ao <br /> alcance dos seus <br /> dedos</h1>
                    <h2>Inteligência residencial  ao <br /> alcance dos seu dedos</h2>
                    <p>Conheça a Deploy e desfrute da praticidade e do <br /> conforto de uma casa inteligente com nossas <br /> tecnologias de última geração.</p>

                    <div className='botao'>
                        <Link to="/servico"><button>Nossos Serviços</button></Link>
                    </div>
                </div>

                <div className='primeira-img'>
                    <img src={imgHome} alt="" />
                </div>
            </section>

            <section className='parte-2'>
                <div className="imagem01">
                    <img src={imgConheca} alt="" />
                </div>

                <div className="conhecer">
                    <h1>CONHEÇA DEPLOY</h1>
                    <p>Ágil, eficiente e honesto, a Deploy tornou-se um Serviço de
                        automação residencial respeitável e conhecido. Nossa equipe
                        está preparada para qualquer serviço, gerenciando projetos com a
                        habilidade e experiência que nossos clientes esperam. Para oferecer um
                        trabalho satisfatório aos nossos clientes, fornecemos canais de comunicação abertos durante cada projeto.</p>

                    <div className='botao-2'>
                        <Link to="/sobre"><button>Saiba Mais</button></Link>
                    </div>
                </div>
            </section>

            <section className='parte-2-mobile-home'>
                <div className="imagem01-mobile">
                    <img src={imgConheca2} alt="" />

                    <div className="conhecer">
                    <h1>CONHEÇA DEPLOY</h1>
                    <p>Ágil, eficiente e honesto, a Deploy tornou-se um Serviço de
                        automação residencial respeitável e conhecido. Nossa equipe
                        está preparada para qualquer serviço, gerenciando projetos com a
                        habilidade e experiência que nossos clientes esperam. Para oferecer um
                        trabalho satisfatório aos nossos clientes, fornecemos canais de comunicação abertos durante cada projeto.</p>

                    <div className='botao-2'>
                        <Link to="/sobre"><button>Saiba Mais</button></Link>
                    </div>
                </div>
                </div>
            </section>

            <section className='parte-3'>

                <div className="titulo">
                    <h1>Nossos Fornecedores</h1>
                </div>

                <div className="carrossel">

                    <div className="fornecedores">
                        <div className="samsung">
                            <a href="https://www.samsung.com/br/offer/?utm_source=google&utm_medium=ppc&utm_campaign=br_pd_ppc_google_multi-multi_ecommerce_cad3-a0009-mx-institucional_text_multi-aon_paid-cdm-pfm-ID92363434203-*samsung*&utm_content=text&utm_term=samsung&cid=br_pd_ppc_google_multi-multi_ecommerce_cad3-a0009-mx-institucional_text_multi-aon_paid-cdm-pfm-ID92363434203-*samsung*&keeplink=true&gad_source=1&gclid=CjwKCAjwyJqzBhBaEiwAWDRJVCoXBQeDjeH22CbYO2DIL9nergcvq8ps9E15poJ6SVxGFJyH5TMINxoCJEMQAvD_BwE" target='_blank'><img src={samsung} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://waveone.com.br/" target='_blank'><img src={wave} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://sonos.com.br/" target='_blank'><img src={sonos} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://www.crestron.com/" target='_blank'><img src={creston} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://br.yamaha.com/pt/products/audio_visual/index.html" target='_blank'><img src={yamaha} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://www.stealthacoustics.com/" target='_blank'><img src={stealte} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://aataudio.com.br/" target='_blank'><img src={advanced} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://originacoustics.com/" target='_blank'><img src={origin} alt="" /></a>
                        </div>
                    </div>

                    <div className="fornecedores">
                        <div className="samsung">
                            <img src={samsung} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={wave} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={sonos} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={creston} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={yamaha} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={stealte} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={advanced} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={origin} alt="" />
                        </div>
                    </div>


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