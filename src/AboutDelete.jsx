import React from "react";
import axios from 'axios';

export default function Delete() {

    async function handleClick() {

            const url = 'https://jsonplaceholder.typicode.com/todos/1'

            try {
                const res = await axios.put(url);
                console.log(res.data);
                console.log("SUCCESS!");
            } catch (error) {
                console.log(error)
            }
    }

    return (
        <div>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}