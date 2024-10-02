"use client"

import { useEffect, useState } from "react";

export default function Lab2() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    let [posts, setPosts] = useState([]);
    
    useEffect(()=> {
      fetch(URL)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error));
    }, []); 
    
     return (
        <div >
            <h2>Posts</h2>
        <ul>
            {
            posts.map((item, index) => <li key={item.id}>{item.title} {item.body}</li>)
            }
        </ul>
            <h2>otro texto</h2>
        </div>
     )
  }