import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/players/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)

        })
    })
    return (
        <div>
            <ul>
                {
                    this.setState( (post =>
                        <li key={post.id}></li>))
                   
                }

            </ul>
            
        </div>
    )
}