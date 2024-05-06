export default function RecuperarPasse(){
    return(
        <div className="container">
    
      <div className="image-container">
        <img src="https://s3-alpha-sig.figma.com/img/9538/71fa/65cd409014be2a3f00e7ab6a17c42606?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3GNa2IUzhJCkfHC0ZOj--2OhFKMZNLoDcD2tSzbJHyyBJcuYvp-faarHiuy-CH8h0g6krk0QEeuf253ELcLG7gS8oJkBEHsji6RRp6ryaUW8XeJ65BCOuXg8GrlGQrJLQ6HfwuoJiO~z~pJWRY1rqudhuM4qMntzyrQPYANHukGIkwDccmnxZbGcJQNzYNDMErTF5~jtLfsX5M91L22CuOnMbsHpFJvCbXOpOKDsOAOJtCiC9blZBN87~Htk39a5BuSBCGEkYG4VjvqFKZy2cJ8NUybzBEUEzKxT5sVU0-XiSwMzP9~qU6pewYhkhtOsxcNyHizXfjPEvZej1-3gQ__" alt="Sua Imagem" className="image" />
      </div>
      
      <div className="form-container">
        <form className="form">
        <h1>Recuperar Palavra-<br></br>Passe</h1>
        <p>Insira o seu email para podermos configurar uma nova palavra-passe</p>
       
        <div className="grupo">
            <label htmlFor="email" className="label">Email:</label>
            <input type="email" id="email" name="email" className="input" placeholder="Insira o seu email" />
          </div>
          <button type="submit" className="enviar">Submeter</button>
          <a  className='autenticacao' href="novapasse">Nova Passe</a>
          
       
        </form>
      </div>
    </div>

    );
}