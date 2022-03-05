import React from "react";
function FetchAPI() {
    const apiGet = () => {
        fetch('http://127.0.0.1:8000/')
        .then(async(Response)=>{
            const data =await Response.json()
            console.log(data)
        })
        

    };
    return (
        <div>
            my api <br/>
            <button onClick={apiGet}>fetch api</button>
        </div>
    );
}
export default FetchAPI;