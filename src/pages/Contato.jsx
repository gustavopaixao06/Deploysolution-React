import '../assets/css/Contato.css'
import fale from '../../public/img/fale.png'
import { FaWhatsapp } from "react-icons/fa";



export function Contato() {
    return (
        <>
            <section className='box-container'>

                <div>
                    <div className="reta"></div>
                </div>

                <div className="faleConosco">

                    <h1>Fale Conosco!!</h1>
                    <p>Tem alguma dúvida ou quer fazer um orçamento? Entre em Contato conosco.</p>
                    <div className="faleIcon">
                        <FaWhatsapp />
                        <p>(11)96641-3001</p>
                    </div>
                </div>

                <div className='forms-contato'>
                    <form action="https://formsubmit.co/ajax/paixaogabriel246@gmail.com" method='POST'></form>
                    <div className="inputs">
                        <label htmlFor="name" id='name'>Nome</label>
                        <input type="text" name='name' id='name' required />
                        <label htmlFor="email" id='Email'>Email</label>
                        <input type="text" name='email' id='Email' required />

                        <label htmlFor="surname" id='surname'>Sobrenome</label>
                        <input type="text" name='surname' id='surname' required />
                        <label htmlFor="telephone" id='telephone'>Telefone</label>
                        <input type="text" name='telephone' id='telephone' required />
                        <label htmlFor="assunto" id='assunto'>Assunto</label>
                        <input type="text" name='assunto' id='assunto' required />
                        <label htmlFor="mensagem" id='mensagem'>Mesagem</label>
                        <input type="text" name='mensagem' id='mensagem' required />

                        <button type='submit' id='butom'>Enviar</button>
                    </div>
                </div>
            </section>

        </>


    )
}

