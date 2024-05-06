export default function NovaPasse(){
    return(
        <div className="container">
    
      <div className="image-container">
        <img src="https://s3-alpha-sig.figma.com/img/c174/2bd7/af07f753e807eef1b4b8dd1ae1e0eb38?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ihKoVLsUHE1NZy-zb5P7g1Q5oIcaWe18UWwTyYujPRr~MhTbcUtsVFKYpf0eRCw-pKmfeOPpgZzF9Kl7Fpv10xa7fxtktfqSmkSCkDqsxs3JRTDAcCDeaArKrQOk4I4pDdV54peQ~c1gVEsHrK0JIy45jrzTR8jV5~dVc5J5TfOEfYeJbBKzaW7CBlvJ8frJtLFvdD1b1POA~5DzQMPEKFDMDZvRi1H9D1p7Yr32pOjjXAqY~-4W6~5DbWp9OLotNDTolk-iDYzyECqg~iCxt6bjRC4DH8gIVxXT6YwJWvHvA6ABNFEX35dpV~ucAPJBjBWqd53iSy9~lO0~FiLSSA__" alt="Sua Imagem" className="image" />
      </div>
      
      <div className="form-container">
        <form className="form">
        <h1>Nova Palavra-<br></br>Passe</h1>
        <p>Insira a nova palavra-passe</p>
         
          <div className="grupo">
            <label htmlFor="palavraPasse" className="label">Palavrapasse</label>
            <input type="password" id="palavraPasse" name="novapasse" className="input" placeholder="Insira a sua palavra passe" />
          </div>
          <div className="grupo">
            <label htmlFor="palavraPasse" className="label"> ConfirmarPalavrapasse</label>
            <input type="password" id="novaPalavraPasse" name="novapasse" className="input" placeholder="Insira a sua palavra passe" />
          </div>
         
          
          <button type="submit" className="enviar">Submeter</button>
       
        </form>
      </div>
    </div>

    );
}