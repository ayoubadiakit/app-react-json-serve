// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./UseFetch";

export default function NavBar() {
  

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  const {data: blogs, isLoading, error} = useFetch('http://localhost:3030/blogs')
  return (
    <div className="container">
      {error && <div>{error}</div>}
      {isLoading && <div>En cours de chargement.......</div>}      
      {blogs && <BlogList blogs={blogs} titre="Liste de tous les articles" />}
      {/* <BlogList blogs={blogs.filter( (blog) => blog.name == "Diakite")} titre="Liste des articles de Diakite" /> */}
    </div>
  );
}
