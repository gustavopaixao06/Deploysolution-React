import '../assets/css/Sobre.css';
import imgSobre from '../../public/img/sobre.png';
import imgSobreMobile from '../../public/img/sobre-mobile.svg';
import imgHistoria from '../../public/img/historia.png';
import imgHistoriaMobile from '../../public/img/historia-mobile.svg';
import whatsapp from "/img/whatsapp-icon.png";

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
            this.showMessage(this.settings.successMessage || "Mensagem enviada com sucesso!");
        }

        displayError() {
            this.showMessage(this.settings.errorMessage || "Não foi possível enviar a mensagem.");
        }

        onSubmission(event) {
            event.preventDefault();
            this.formButton.disabled = true;
            this.formButton.innerText = "Enviando...";
        }

        async sendForm(event) {
            this.onSubmission(event);
            try {
                const formData = new FormData(this.form);

                const response = await fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json"
                    },
                    body: formData,
                });

                const data = await response.json();

                if (data.success) {
                    this.displaySuccess();
                } else {
                    this.displayError();
                }
            } catch (error) {
                this.displayError();
            } finally {
                this.formButton.disabled = false;
                this.formButton.innerText = "Enviar";
            }
        }

        showMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.innerHTML = `<p>${message}</p>`;
            messageElement.className = 'message-popup';
            document.body.appendChild(messageElement);
            setTimeout(() => {
                document.body.removeChild(messageElement);
            }, 3000);
        }

        init() {
            if (this.form) {
                this.form.addEventListener("submit", this.sendForm);
            }
            return this;
        }
    }

    const formSubmit = new FormSubmit({
        form: "[data-form]",
        button: "[data-button]",
        successMessage: "Mensagem enviada com sucesso!",
        errorMessage: "Não foi possível enviar a mensagem.",
    });
    formSubmit.init();

    return (
        <>
            <section className='primeira-parte'>
                <div className="sobre">
                    <img src={imgSobre} alt="" />
                </div>

                <div className="sobre-mobile">
                    <img src={imgSobreMobile} alt="" />
                </div>
            </section>

            <section className='segunda-parte'>
                <div className="historias">
                    <h1>NOSSA HISTÓRIA</h1>
                    <p>Ao longo dos anos, aprendemos que um ótimo serviço <br /> começa e termina com profissionais experientes e <br /> amigáveis, o que explica nosso rigoroso processo de <br /> contratação. Acreditamos que nossa equipe seja a melhor <br /> do setor e temos total confiança em cada pessoa que <br /> fornece nossos serviços.</p>
                    <p> A Deploy finaliza cada projeto dentro do prazo e com o <br /> maior nível de qualidade. Com foco em serviços <br /> personalizados, preços competitivos e satisfação do <br /> cliente, estamos sempre nos esforçando para atender e <br /> superar nossas expectativas.</p>
                </div>
                <div className="img-historia">
                    <img src={imgHistoria} alt="" />
                </div>
            </section>

            <section>
                <div className="img-historia-mobile">
                    <img src={imgHistoriaMobile} alt="" />
                </div>
            </section>

            <section className='quarta-parte'>
                <div className="avaliar">
                    <h1>AVALIE NOSSO SERVIÇO</h1>
                </div>
                <div className="form">
                    <form action="https://formsubmit.co/ajax/deploy@deploysolution.com.br" method='POST' data-form>
                        <div className="conjunto">
                            <div className="nome">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name='nome' id='nome' required />
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' required />
                            </div>
                            <div className="sobrenome">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" name='sobrenome' id='sobrenome' required />
                                <label htmlFor="telefone">Telefone</label>
                                <input type="tel" name='telefone' id='telefone' required />
                            </div>
                        </div>
                        <div className="p">
                            <p>Você nos recomendaria aos seus amigos?</p>
                        </div>
                        <div className="recomendacao">
                            <input type="radio" name="recomendacao" className="radio-input" id="um" /> <span className="opcao">Sim</span>
                            <input type="radio" name="recomendacao" className="radio-input" id="dois" /> <span className="opcao2">Não</span>
                        </div>
                        <label htmlFor="depoimento">Deixe seu depoimento</label>
                        <div className="depoimento">
                            <input type="text" name='depoimento' id='depoimento' required />
                        </div>
                        <button type='submit' id='botao' data-button>Enviar</button>
                    </form>
                </div>
            </section>

            <div className='fixed-bottom right-100 p-3'>
                <a id='botaoFixo' href="https://web.whatsapp.com/send?phone=11966413001" target='_blank' rel='noopener noreferrer'>
                    <img src={whatsapp} className="custom-whatsapp-img" alt="WhatsApp" />
                </a>
            </div>
        </>
    );
}
