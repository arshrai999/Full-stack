import React, { useState,useEffect } from "react";


const Edit = () => {
      
    const [editdata,seteditdata] =useState({tittle:'', body:''})


    

    const edithandler =(event)=>{
        const {id,value} =event.target
        seteditdata(prevState=>({
            ...prevState,
            [id]:value
        }))
    }

    const update =()=>{
        
        fetch('http://127.0.0.1:8000/update/10',{
            method:'PUT',
            editdata,
            headers: { 'Content-Type': 'application/json' },

        })
    }
    return (

<>



<div className="form-group">
  <label className="col-md-4 control-label" for="product_name_fr">tittle</label>
  <div className="col-md-4">
    <input id="tittle" name="tittle"  value = "{item.id}" className="form-control input-md" required=""
      type="text"  onChange={edithandler}  />
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" for="available_quantity">body</label>
  <div className="col-md-4">
    <input id="body" name="body"  className="form-control input-md" required="" type="text"
      onChange={edithandler}   />
  </div>
</div>




<div className="form-group">
  <label className="col-md-4 control-label" for="singlebutton">Single Button</label>
  <div className="col-md-4">
    <button id="10" name="singlebutton"  className="btn btn-primary" onClick={update} >Button</button>
  </div>
</div>
</>
    )

}

export default Edit