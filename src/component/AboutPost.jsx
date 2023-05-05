import React from "react";
import axios from 'axios';

export default function Post() {

    async function handleClick() {

            const url = 'https://jsonplaceholder.typicode.com/todos'

            const data = {
                title: "TODO",
                completed: false
            }

            try {
                const res = await axios.post(url, data);
                console.log(res.data);
                console.log("SUCCESS!");
            } catch (error) {
                console.log(error)
            }
    }

    return (
        <div>
            <button onClick={handleClick}>Post</button>
        </div>
    )
}