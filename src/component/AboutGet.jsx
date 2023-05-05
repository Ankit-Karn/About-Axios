import React from "react";
import axios from 'axios';

export default function Get() {

    async function handleClick() {
        const url = 'https://jsonplaceholder.typicode.com/todos'

        try {
            const data = await axios.get(url);
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <p>Hello this is Axios</p>
            <button onClick={handleClick}>Get</button>
        </div>
    )
}
