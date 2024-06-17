import '../assets/css/Contato.css'
import { FaWhatsapp } from "react-icons/fa";



export function Contato() {

    class FormSubmit {
        constructor(settings){
            this.settings = settings;
            this.form = document.querySelector(settings.form);
            this.formButton = document.querySelector(settings.button);
            if (this.form){
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

            async sendForm(event){
            try{
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
                throw new  Error(error);
            }
            }

            init(){
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

                    <h1>Fale Conosco!!</h1>
                    <p>Tem alguma dúvida ou quer fazer um orçamento? Entre em Contato conosco.</p>
                    <div className="faleIcon">
                        <FaWhatsapp />
                        <p>(11)96641-3001</p>
                    </div>
                </div>

                <div className='form'>
                    <form action="https://formsubmit.co/ajax/paixaogabriel246@gmail.com" method='POST' data-form>
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

        </>


    )
}

