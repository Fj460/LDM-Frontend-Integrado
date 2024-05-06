import React from 'react';

const Registo = () => {
  return (
    <div className="container">
    
      <div className="image-container">
        <img src="https://s3-alpha-sig.figma.com/img/deea/6c9f/bbbe6f8c3721233eafe509a675ac5f61?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PyQFO1mJeVsli3a4jL~oW9n4CPkoyyZKvkF0yAh4vkJ1vZktPHJ9~sN5Bs8zABZ1eJZZ81TBDFALDJzyXgyw1GxhYnUVQHVnmoNrwLU2gAzeksgFuEcybOykzsxdSZfM3eMZcmy1fMl5Mrd39wmR~G~bXciZK72YKqn0mcMqiYqOO4R9kbgV3VOv4ouaJTbKGaEiJSg4k4pKy0udqLAPtIRUSpFM-s4P1N0M~F5T08Cfw3YA1J6k9Mo7uJ0MAW3Z4SNsGCWw5y46iRrtBRYt3Up8Es-VbIMJuinYkxWvQbacM0yDC~k6KyC4NV1e5k07UEAPUECMyj0ZPnfq92~rEA__" alt="Sua Imagem" className="image" />
      </div>
      
      <div className="form-container">
        <form className="form">
        <h1>Registo</h1>
          <p className='text-[16px] md:text-[30px] lg:[60px]'>Insira as credenciais para criar a conta</p>
          <div className="grupo">
            <label htmlFor="primeironome" className="label">Nome:</label>
            <input type="text" id="primeironome" name="primeironome" className="input" placeholder="Insira o seu nome" />
          </div>
          <div className="grupo">
            <label htmlFor="apelido" className="label">Apelido:</label>
            <input type="text" id="apelido" name="apelido" className="input" placeholder="Insira o seu apelido" />
          </div>
          <div className="grupo">
            <label htmlFor="email" className="label">Email:</label>
            <input type="email" id="email" name="email" className="input" placeholder="Insira o seu email" />
          </div>
          <div className="grupo">
            <label htmlFor="password" className="label">Password:</label>
            <input type="password" id="password" name="password" className="input" placeholder="Insira Palavra-passe" />
          </div>
          <button type="submit" className="enviar">Enviar</button>
          <p className='autenticacao'>Ja tem conta <a href="login">faz a autenticacao</a></p>
        </form>
      </div>
    </div>
  );
};

export default Registo;
