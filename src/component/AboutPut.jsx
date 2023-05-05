import React from "react";
import axios from 'axios';

export default function Put() {

    async function handleClick() {

            const url = 'https://jsonplaceholder.typicode.com/todos/1'

            const data = {
                title: "TODO again",
                completed: false
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
            <button onClick={handleClick}>Put</button>
        </div>
    )
}