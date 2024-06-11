import '../assets/css/Sala.css'
import salaCinema from '../../public/img/salaCinema.png'

export function Sala() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="reta"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>SALA DE CINEMA PERSONALIZADA</h1>
                </div>
            </section>

            <section className='sessao2'>
                <div className="imagem">
                    <img src={salaCinema} alt="" />
                </div>

                <div className="text">
                    <p>Transforme sua casa em um verdadeiro cinema <br /> com a solução de sala de cinema personalizada  <br /> da Deploy.
                         Imagine assistir aos seus filmes e séries <br /> favoritos em um ambiente projetado especificamente <br /> para 
                         proporcionar a melhor experiência audiovisual <br />  possível. Com sistemas de som surround de alta <br />  qualidade
                          e telas de projeção de última geração, você <br />  se sentirá imerso na ação como nunca antes.</p>
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