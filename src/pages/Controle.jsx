import '../assets/css/Controle.css'
import controleIluminacao from '../../public/img/controleIluminacao.png'

export function Controle() {
    return (
        <>
            <section className='sessao1'>
                <div>
                    <div className="reta"></div>
                </div>

                <div className="iluminacao">
                    <h3>Nossos Serviços</h3>
                    <h1>CONTROLE DE ILUMINAÇÃO E PERSIANAS</h1>
                </div>
            </section>

            <section className='sessao2'>
                <div className="imagem">
                    <img src={controleIluminacao} alt="" />
                </div>

                <div className="pesquisa">
                    <p>O controle de iluminação e persianas da Deploy <br /> oferece uma solução integrada para transformar <br /> sua casa
                         em um ambiente inteligente e funcional. <br /> Com nossas tecnologias avançadas, você <br /> pode ajustar a iluminação
                          e a posição <br /> das persianas de maneira sincronizada, <br /> criando o ambiente perfeito para qualquer ocasião. <br />
                           Seja para aproveitar a luz natural durante <br /> o dia ou criar um clima acolhedor à noite, <br /> tudo pode ser 
                           feito com facilidade <br /> através de um simples toque no seu smartphone <br /> ou tablet.</p>
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