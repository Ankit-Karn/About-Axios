import React from "react";
import axios from 'axios';

export default function Patch() {

    async function handleClick() {

            const url = 'https://jsonplaceholder.typicode.com/todos/1'

            const data = {
                title: "UPDATED TODO",
                completed: true
            }

            try {
                const res = await axios.put(url, data);
                console.log(res.data);
                console.log("SUCCESS!");
            } catch (error) {
                console.log(error)
            }
    }

    return (
        <div>
            <button onClick={handleClick}>Patch</button>
        </div>
    )
}