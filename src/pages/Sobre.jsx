import '../assets/css/Sobre.css'
import imgSobre from '../../public/img/sobre.png'
import imgHistoria from '../../public/img/historia.png'

export function Sobre() {

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
        success: "<h1 class= 'success'>Mensagem enviada!</h1>",
        error: "<h1 class= 'error'>Não foi possível enviar a mensagem.</h1>",
    });
    formSubmit.init();

    return (

        <>
            <section className='primeira-parte'>
                <div className="sobre">
                    <img src={imgSobre} alt="" />
                </div>

            </section>

            <section className='segunda-parte'>
                <div className="historias">
                    <h1>NOSSA HISTÓRIA</h1>
                    <p>Ao longo dos anos, aprendemos que um ótimo serviço <br /> começa e termina com profissionais
                        experientes e <br /> amigáveis, o que explica nosso rigoroso processo de <br /> contratação.
                        Acreditamos que nossa equipe seja a melhor <br /> do setor e temos total confiança em cada pessoa
                        que <br /> fornece nossos serviços.</p>

                    <p> A Deploy finaliza cada projeto dentro do prazo e com o <br /> maior nível de qualidade. Com foco em
                        serviços <br /> personalizados, preços competitivos e satisfação do <br /> cliente, estamos sempre nos esforçando para
                        atender e <br /> superar nossas expectativas.</p>
                </div>
                <div className="img-historia">
                    <img src={imgHistoria} alt="" />
                </div>
            </section>

            <section className='quarta-parte'>
                <div className="avaliar">
                    <h1>AVALIE NOSSO SERVIÇO</h1>
                </div>

                <div className="form">
                    <form action="https://formsubmit.co/ajax/paixaogabriel246@gmail.com" method='POST' data-form>

                        <div className="conjunto">
                            <div className="nome">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name='nome' id='nome' required />
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email' id='emial' required />
                            </div>

                            <div className="sobrenome">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" name='sobrenome' id='sobrenome' required />
                                <label htmlFor="telefone">Telefone</label>
                                <input type="text" name='telefone' id='telefone' required />
                            </div>
                        </div>

                        <div className="p">
                            <p>Você nos recomendaria aos seus amigos?</p>
                        </div>
                        <div className="recomendacao">
                            <input type="radio" name="recomendacao" class="radio-input" id="um" /> <span className="opcao">Sim</span>
                            <input type="radio" name="recomendacao" class="radio-input" id="dois" /> <span className="opcao2">Não</span>
                        </div>
                        <label htmlFor="depoimento">Deixe seu depoimento</label>

                        <div className="depoimento">
                            <input type="text" name='depoimento' id='depoimento' required />
                        </div>

                        <button type='submit' id='botao' data-button >Enviar</button>
                    </form>
                </div>

            </section >
        </>

    )
}