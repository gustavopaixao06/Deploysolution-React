import '../assets/css/Ambientacao.css'
import imagem2 from '../../public/img/image 17.svg'
import { Link } from 'react-router-dom'


export function Ambientacao() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="falsalinha"></div>
                    <div className="linha"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>AMBIENTAÇÃO ÁUDIO E VÍDEO</h1>
                </div>
            </section>

            <section className='sessao2'>
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
            </section>

            <section className='button'>
                <div className='botao-3'>
                     <Link to="/contato"><button>Faça seu orçamento aqui!</button></Link>
                </div>
            </section>
        </>
    )
}