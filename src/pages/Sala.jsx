import '../assets/css/Sala.css'
import salaCinema from '../../public/img/salaCinema.png'
import { Link } from 'react-router-dom'
import whatsapp from "/img/whatsapp-icon.png";
import seta from "/img/Vector.png";
import seta2 from "/img/Vector (1).png";

export function Sala() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="falsalinha"></div>
                    <div className="linha"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>SALA DE CINEMA PERSONALIZADA</h1>
                </div>
            </section>

            <section className='sessao2'>

                <div className="seta7">
                    <Link to="/controle"><img src={seta} alt="" /></Link>
                </div>

                <div className="imagem">
                    <img src={salaCinema} alt="" />
                </div>

                <div className="text">
                    <p>Transforme sua casa em um <br /> verdadeiro cinema com a solução <br /> de sala de cinema personalizada  <br /> da Deploy.
                        Imagine assistir aos seus <br /> filmes e séries favoritos em um  <br />  ambiente projetado especificamente <br /> para
                        proporcionar a melhor  <br />  experiência audiovisual possível. Com  <br />  sistemas de som surround de alta <br />  qualidade
                        e telas de projeção de última  <br />  geração, você se sentirá imerso na ação  <br />  como nunca antes.</p>
                </div>

                <div className="seta8">
                    <Link to="/rede"><img src={seta2} alt="" /></Link>
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