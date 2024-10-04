import React, { useState } from 'react';
import '../assets/css/Sobre.css';
import imgSobre from '../../public/img/sobre.png';
import imgSobreMobile from '../../public/img/sobre-mobile.svg';
import imgHistoria from '../../public/img/historia.png';
import imgHistoriaMobile from '../../public/img/historia-mobile.svg';
import whatsapp from "/img/whatsapp-icon.png";

export function Sobre() {
    // Estados para armazenar os valores do formulário
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        surname: '',
        telephone: '',
        recomendacao: '',
        assunto: 'Avaliação de Serviço',
        depoimento: '',
    });

    // Estado para exibir mensagens de sucesso/erro
    const [message, setMessage] = useState('');

    // Função para atualizar os estados dos campos do formulário
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Função para enviar o formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Enviando...');

        try {
            const response = await fetch('https://nodemailer-deploy.onrender.com/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Mensagem enviada com sucesso!');
                // Resetando o formulário após o envio
                setFormData({
                    name: '',
                    email: '',
                    surname: '',
                    telephone: '',
                    recomendacao: '',
                    assunto: '',
                    depoimento: '',
                });
            } else {
                setMessage('Não foi possível enviar a mensagem.');
            }
        } catch (error) {
            setMessage('Erro ao enviar a mensagem.');
            console.error(error);
        }
    };

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
                    <p>A Deploy finaliza cada projeto dentro do prazo e com o <br /> maior nível de qualidade. Com foco em serviços <br /> personalizados, preços competitivos e satisfação do <br /> cliente, estamos sempre nos esforçando para atender e <br /> superar nossas expectativas.</p>
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
                    <form onSubmit={handleSubmit} data-form>
                        <div className="conjunto">
                            <div className="nome">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name='name' id='nome' value={formData.nome} onChange={handleChange} required />
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="sobrenome">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" name='surname' id='sobrenome' value={formData.sobrenome} onChange={handleChange} required />
                                <label htmlFor="telefone">Telefone</label>
                                <input type="tel" name='telephone' id='telefone' value={formData.telefone} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="p">
                            <p>Você nos recomendaria aos seus amigos?</p>
                        </div>
                        <div className="recomendacao">
                            <div className="radio-div">
                                <label>Sim</label>
                                <input type="radio" name="recomendacao" className="radio-input" id="sim" value="Sim" onChange={handleChange} required />
                            </div>
                            <div className="radio-div">
                                <label>Não</label>
                                <input type="radio" name="recomendacao" className="radio-input" id="nao" value="Não" onChange={handleChange} required />
                            </div>
                        </div>
                        <label htmlFor="depoimento">Deixe seu depoimento</label>
                        <div className="depoimento">
                            <input type="text" name='depoimento' id='depoimento' value={formData.depoimento} onChange={handleChange} required />
                        </div>
                        <button type='submit' id='botao' data-button>Enviar</button>
                        {/* Mensagem de sucesso/erro */}
                        {message && <p className='form-message'>{message}</p>}
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