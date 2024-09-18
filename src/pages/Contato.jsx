import React, { useState } from 'react';
import '../assets/css/Contato.css';
import { FaWhatsapp } from "react-icons/fa";
import contatoMobile from '../../public/img/contato-mobile.svg';
import whatsapp from "/img/whatsapp-icon.png";
import faleConosco from "../../public/img/faleConosco.svg";

export function Contato() {
    // Estados para armazenar os valores do formulário
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        surname: '',
        telephone: '',
        assunto: '',
        mensagem: '',
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
            const response = await fetch('http://10.92.199.9:5001/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Mensagem enviada com sucesso!');
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
                    <form onSubmit={handleSubmit} data-form>
                        <div className="inputs">
                            <label htmlFor="name" id='name'>Nome</label>
                            <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} required />
                            <label htmlFor="email" id='Email'>Email</label>
                            <input type="email" name='email' id='Email' value={formData.email} onChange={handleChange} required />
                            <label htmlFor="surname" id='surname'>Sobrenome</label>
                            <input type="text" name='surname' id='surname' value={formData.surname} onChange={handleChange} required />
                            <label htmlFor="telephone" id='telephone'>Telefone</label>
                            <input type="text" name='telephone' id='telephone' value={formData.telephone} onChange={handleChange} required />
                            <label htmlFor="assunto" id='assunto'>Assunto</label>
                            <input type="text" name='assunto' id='assunto' value={formData.assunto} onChange={handleChange} required />
                            <label htmlFor="mensagem" id='mensagem'>Mensagem</label>
                            <input type="text" name='mensagem' id='mensagem' value={formData.mensagem} onChange={handleChange} required />

                            <button type='submit' id='butom' data-button>Enviar</button>
                            {/* Mensagem de sucesso/erro */}
                            {message && <p className='form-message'>{message}</p>}
                        </div>
                    </form>
                </div>
            </section>

            <section className='box-container-mobile'>
                <img src={contatoMobile} alt="" />
            </section>

            <section className='form-mobile'>
                <form onSubmit={handleSubmit} data-form>
                    <div className="inputs">
                        <label htmlFor="name" id='name'>Nome</label>
                        <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} required />
                        <label htmlFor="email" id='Email'>Email</label>
                        <input type="email" name='email' id='Email' value={formData.email} onChange={handleChange} required />
                        <label htmlFor="surname" id='surname'>Sobrenome</label>
                        <input type="text" name='surname' id='surname' value={formData.surname} onChange={handleChange} required />
                        <label htmlFor="telephone" id='telephone'>Telefone</label>
                        <input type="text" name='telephone' id='telephone' value={formData.telephone} onChange={handleChange} required />
                        <label htmlFor="assunto" id='assunto'>Assunto</label>
                        <input type="text" name='assunto' id='assunto' value={formData.assunto} onChange={handleChange} required />
                        <label htmlFor="mensagem" id='mensagem'>Mensagem</label>
                        <input type="text" name='mensagem' id='mensagem' value={formData.mensagem} onChange={handleChange} required />

                        <button type='submit' id='butom' data-button>Enviar</button>
                        {/* Mensagem de sucesso/erro */}
                        {message && <p className='form-message'>{message}</p>}
                    </div>
                </form>
            </section>

            <div className='fixed-bottom right-100 p-3'>
                <a id='botaoFixo' href="https://web.whatsapp.com/send?phone=11966413001" target='_blank' rel='noopener noreferrer'>
                    <img src={whatsapp} className="custom-whatsapp-img" alt="WhatsApp" />
                </a>
            </div>
        </>
    );
}