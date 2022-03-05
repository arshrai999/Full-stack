import React, { useState } from "react";


const ShowData =()=>{
    
     const abc =()=>{
        fetch('https://public/v2/users/100/posts')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
     }
    return(
        <button onClick={abc}>Arsh</button>
    )
}

export default ShowData