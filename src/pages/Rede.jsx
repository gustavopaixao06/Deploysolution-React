import '../assets/css/Rede.css'
import redeCabeada from '../../public/img/redeCabeada.png'

export function Rede() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="reta"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>REDE CABEADA</h1>
                </div>
            </section>

            <section className='sessao2'>
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

            </section>

            <section className='button'>
                <div className='botao-3'>
                    <a href="/contato"><button>Faça seu orçamento aqui!</button></a>
                </div>
            </section>
        </>
    )
}