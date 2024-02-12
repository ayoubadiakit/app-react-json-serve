import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './UseFetch';

export default function DetailBlog() {
    const { id } = useParams();
    const {data:blog, isLoading, error} = useFetch('http://localhost:3030/blogs/'+id);
    return (
        <div className="card text-center container mt-5">
            {isLoading && <div>En cours de chargement.......</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div>
                    <div className="card-header h1">
                        {blog.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-uppercase h4">{blog.title}</h5>
                        <p className="card-text">{blog.body}</p>
                    </div>
                </div>
            )}
        </div>
    )
}