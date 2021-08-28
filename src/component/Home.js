import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setBlogs(data);
                    console.log(blogs);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="loader"></div>;
    } else {
        return (
            <MDBContainer>
                <h1>Blog Posts</h1>
                <div className='grid-body'>
                    {blogs.map(blog => (




                        <MDBCard >

                            <MDBCardBody>
                                <Link to={`blog/${blog.id}`}>
                                    <MDBCardTitle>{blog.title}</MDBCardTitle>
                                </Link>
                                <MDBCardText>{blog.body}</MDBCardText>
                                {/* <Link to={`Author/${blog.userId}`}> */}
                                <MDBCardText>Post by: Author{blog.userId}</MDBCardText>
                                {/* </Link> */}
                            </MDBCardBody>
                        </MDBCard>



                    ))}
                </div>
            </MDBContainer>
        );
    }

}

export default Home
