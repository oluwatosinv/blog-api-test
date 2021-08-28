import React, { useState, useEffect } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Blog = (props) => {
    var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setBlog(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (blog) {
        return (
            <div>
                <h1>{blog.title}</h1>
                <div>
                    Email: {blog.body}
                </div>

            </div>
        );
    }
}

export default Blog
