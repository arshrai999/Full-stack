import React from "react";
function FetchAPI() {
    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        

    };
    return (
        <div>
            my api <br/>
            <button onClick={apiGet}>fetch api</button>
        </div>
    );
}
export default FetchAPI;