export default function Login(){
    return(
        <div className="container">
    
      <div className="image-container">
        <img src="https://s3-alpha-sig.figma.com/img/bd64/f621/f3ba4221b4d72863833286f3566b8edb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z04AACG6T8HSF8IJ~hiOCfc6kL2rp0DXoDSy4V09Z0KyjLxbPnT-ajPjF9UXKi3~9NBhjAMp278XSooqxuIJwo6QJRBOhUjZQmwCHIVuVGfucxcdCVBJoY7wY6gb-lUuccw9~wHphGoSTUJdu1lt4lkWEmuOrcL76ClmT7t2VG~tMbkCPHCLvf0r~pTT-P1h4sfOF60FF~pvWeNdp1IuxQI6DZlT-vy8EM2-ohGndaNzAtMY2SN3HqoSwSWm8V~Wf2ypNOqn0T4oT6uJyDKj2aVOzujFjx7ePo39j0Sbwid61t9D4zC73Me1eECEIoqXWL4BJIN952EfDs8LxDpE7Q__" alt="Sua Imagem" className="image" />
      </div>
      
      <div className="form-container">
        <form className="form">
        <h1>Login</h1>
        <p>Insira o seu email e password para ter acesso a sua conta</p>
          <div className="grupo">
            <label htmlFor="email" className="label">Email:</label>
            <input type="email" id="email" name="email" className="input" placeholder="Insira o seu email" />
          </div>
          <div className="grupo">
            <label htmlFor="password" className="label">Password:</label>
            <input type="password" id="password" name="password" className="input" placeholder="Insira Palavra-passe" />
          </div>
          <button type="submit" className="enviar">Enviar</button>
          <p className='autenticacao'><a href="recuperarpasse">Esqueceste a palavra-passe</a></p>
       
        </form>
      </div>
    </div>

    );
}