import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews'

const Person = () => {
const [posts,setPosts] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())  // Parse the JSON data
    .then(data =>setPosts(data))   // Set the data for our
   
},[])
    return (
        <div>
            <h3>Comments:{posts.length} </h3>
            {
                posts.map(post=> <Reviews post={post} key={post.id}></Reviews>)
            }
        </div>
    );
};

export default Person;