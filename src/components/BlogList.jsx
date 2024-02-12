import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs, titre }) {

  const HandleDelete = (id) => {
    fetch('http://localhost:3030/blogs/'+id, {
      method: 'DELETE'
    }).then( () => {
      console.log('Suppression effectué')
    })
  }
  return (
    <>
      <h1 className="text-center mt-5">{titre}</h1>
      {blogs.map((blog) => (
        <div className="card mt-3" key={blog.id}>
          <div className="card-header">{blog.name}</div>
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.body}</p>
            <Link to={`/blogs/${blog.id}`} className="btn btn-primary">Afficher detail</Link>
            <Link to='' className="btn btn-secondary ms-3">Modifier article</Link>
            <button onClick={ () => HandleDelete(blog.id) } className="btn btn-danger ms-3">Supprimer article detail</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogList;
