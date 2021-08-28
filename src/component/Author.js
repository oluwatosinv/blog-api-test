import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


const Author = (props) => {
    var userId = props.match.params.userId
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [authors, SetAuthor] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + userId)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    SetAuthor(data);
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


    if (authors) {
        console.log("authors:", authors.typeof);
        return (
            // <MDBContainer>
            //     <div className='grid-body'>
            //         {authors.map(author => (




            //             <MDBCard >

            //                 <MDBCardBody>
            //                     <Link to={`author/${author.id}`}>
            //                         <MDBCardTitle>{author.title}</MDBCardTitle>
            //                     </Link>
            //                     <MDBCardText>{author.body}</MDBCardText>
            //                 </MDBCardBody>
            //             </MDBCard>



            //         ))}
            //     </div>
            // </MDBContainer>
            <div>
                <h1>Posts by Author{authors.userId}</h1>
                {authors.map(author => (
                    <h1>{author.title}</h1>
                ))}

            </div>
        )
    }
}

export default Author
