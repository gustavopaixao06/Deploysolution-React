import '../assets/css/Contato.css'
import { FaWhatsapp } from "react-icons/fa";
import contatoMobile from '../../public/img/contato-mobile.svg'
import whatsapp from "/img/whatsapp-icon.png";
import faleConosco from "../../public/img/faleConosco.svg"



export function Contato() {

    class FormSubmit {
        constructor(settings) {
            this.settings = settings;
            this.form = document.querySelector(settings.form);
            this.formButton = document.querySelector(settings.button);
            if (this.form) {
                this.url = this.form.getAttribute("action");
            }
            this.sendForm = this.sendForm.bind(this);

        }

        displaySuccess() {
            this.form.innerHTML = this.settings.success;
        }


        displayError() {
            this.form.innerHTML = this.settings.error;
        }

        getFormObject() {
            const formObject = {};
            const fields = this.form.querySelectorAll("[nome]");
            fields.forEach((field) => {
                formObject[field.getAttribute("nome")] = field.value;
            });
            return formObject;
        }

        onSubmission(event) {
            event.preventDefault();
            event.target.disabled = true;
            event.target.innerText = "Enviando...";
        }

        async sendForm(event) {
            try {
                this.onSubmission(event);
                await fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(this.getFormObject()),
                });
                this.displaySuccess();
            } catch (error) {
                this.displayError();
                throw new Error(error);
            }
        }

        init() {
            if (this.form)
                this.formButton.addEventListener("click", this.sendForm);
            return this;
        }
    }

    const formSubmit = new FormSubmit({
        form: "[data-form]",
        button: "[data-button]",
        success: "<h1 class='success'>Mensagem enviada!</h1>",
        error: "<h1 class='error'>Não foi possível enviar a mensagem.</h1>",
    });
    formSubmit.init();

    return (
        <>
            <section className='box-container'>

                <div>
                    <div className="reta"></div>
                </div>

                <div className="faleConosco">

                    <img src={faleConosco} alt="" />
                    <div className="faleIcon">
                        <h1>Fale Conosco!!</h1>
                        <h5>Tem alguma dúvida ou quer fazer um orçamento? <br /> Entre em Contato conosco.</h5>
                        <div className="frente">
                            <FaWhatsapp className='whatsapp-icon2' />
                            <p>(11)96641-3001</p>
                        </div>
                    </div>
                </div>

                <div className='form'>
                    <form action="https://formsubmit.co/ajax/deploy@deploysolution.com.br" method='POST' data-form>
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

                            <button type='submit' id='butom' data-button>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className='box-container-mobile'>

                <img src={contatoMobile} alt="" />

            </section>

            <section className='form-mobile'>

                <form action="https://formsubmit.co/ajax/deploy@deploysolution.com.br" method='POST' data-form>
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

                        <button type='submit' id='butom' data-button>Enviar</button>
                    </div>
                </form>

            </section>

            <div className='fixed-bottom right-100 p-3' >
                <a id='botaoFixo' href="https://web.whatsapp.com/send?phone=11966413001" target='_blank' rel='noopener noreferrer'>
                    <img src={whatsapp} className="custom-whatsapp-img" alt="WhatsApp" />
                </a>
            </div>


        </>


    )
}

