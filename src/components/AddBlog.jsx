import React, { useState } from 'react'

export default function AddBlog() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const HandleBlogAdding = (e) => {
    e.preventDefault(); //Bloquer le chargement cad l'envoi du formulaire quand on clique sur un bouton de type submit
    const blog = {title, name, body};
    setIsLoading(true)
    fetch('http://localhost:3030/blogs',
    {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("Article ajouter avec succès")
      setIsLoading(false)
    });
  }

  return (
    <form action='' method='POST' onSubmit={ HandleBlogAdding }>
      <div className='container mt-5'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Nom de l'auteur</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setName(e.target.value)} value={name} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Titre de l'article</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTitle(e.target.value)} value={title} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Contenu de l'article</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e) => setBody(e.target.value)} value={body} required></textarea>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            { !isLoading && <button type="submit" className="btn btn-primary">Ajouter l'article</button>}
            { isLoading && <button type="submit" className="btn btn-primary" disabled>En cours de traitement .......</button>}
          </div>
        </div>
      </div>
    </form>
  )
}