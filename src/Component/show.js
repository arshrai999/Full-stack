import { React, useState, useEffect } from "react";
import Swal from 'sweetalert2'
const ShowData = () => {
const [data, setData] = useState([]);




 // fetch data from api 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/");
        const json = await response.json();
        console.log(json,"dii")
        setData(json);
    }
    fetchData();
    }, []);
    
    const Delete =(event)=>{
        const id =event.target.id
       fetch(`http://127.0.0.1:8000/delete/${id}/`,{
           method:'DELETE'
       })
       .then((res)=>{

          Swal.fire('Delete Sucessfully')
       })
       .catch((err)=>{
         Swal.fire('not delete')
       })
    }  
    
    
   
 

  return (
    <div>
        <h1>Show Data</h1>
        <div className="container">
        {/* show values in table */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.no</th> 
              <th>TITLE</th>
              <th>BODY</th>
              <th>Edit Data</th>
              <th>Delete_Data</th>


            </tr>
          </thead>
          <tbody>
            {/* loop through data and show in table */}
            {data.map((item,id) => (
                <tr key={item.id}>
                  <td>{id+1}</td>
                    <td  >{item.tittle}</td>
                    <td>{item.body}</td>
                    <td id={item.id}><button id={item.id} className="btn btn-primary" >Edit</button></td>
                    <td id={item.id}><button id={item.id} className="btn btn-danger" onClick={Delete} >Delete</button></td>

                    
                </tr>
            ))}

            
            </tbody>
        </table>
        </div>


    </div>
  )
}

export default ShowData