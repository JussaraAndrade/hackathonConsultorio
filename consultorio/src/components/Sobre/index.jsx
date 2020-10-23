import React from 'react';
import './Sobre.css';

const Sobre = () => {
    return (
        <section className="sobre">
            <div className="img-sobre" >
                <img src="https://www.dentaloffice.com.br/wp-content/uploads/2019/05/Indique.png" alt=""/>
            </div>
            
            <div className="texto-informativo">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eaque, dicta doloribus! Praesentium adipisci nisi voluptates itaque assumenda,
                    maxime provident commodi nam at sapiente iste perspiciatis suscipit? 
                    Mollitia quasi qui ea?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptate iste assumenda sapiente nesciunt dicta laboriosam unde animi delectus hic?
                    Ea voluptate consequuntur ducimus libero fugit, soluta officiis deleniti quo perferendis.
                </p>
            </div>            
            
            <div className="contato">
                <h3>Entre em contato</h3>
                <form action="">
                    <label htmlFor="name">Nome</label>
                    <input placeholder="David Chaves" type="text" id="name" name="name"/>
                    
                    <label htmlFor="email">Email</label>
                    <input placeholder="david@hotmail.com" type="text" id="email" name="email"/>
                    
                    <label htmlFor="email">Cidade</label>

                    <select name="cidade">
                        <option value="Guariba">Guariba</option>
                        <option value="Ribeirão Preto">Ribeirão Preto</option>
                        <option value="São Carlos">São Carlos</option>
                    </select>

                    <input type="submit" value="Enviar" className="btnEnviar" />
                </form>
            </div>
           
        </section>
    );
}

export default Sobre;