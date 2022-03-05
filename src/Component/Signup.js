import React, { useState } from "react";



const Addproduct =()=>{
const [addProduct,setProduct]=useState({tittle:'',body:''})
const [data,setdata]=useState([])

const inputhandler=(event)=>{
const {id , value} = event.target
setProduct(prevState=>({
...prevState,
[id]:value
}))
}
console.log(addProduct,"vikas")
const arsh =(event)=>{
  event.preventDefault()
  fetch('http://127.0.0.1:8000/create/', {
    method: 'POST',
    body: JSON.stringify({ addProduct }),
    headers: { 'Content-Type': 'application/json' },
  })
  .then((res)=>{
    console.log(res,"vias")
  })
}


console.log(data,"cgyejw,")

return(
<>

  <legend>Registration Form</legend>
  <form className="form-horizontal" onSubmit={arsh}>

    <div className="form-group">
      <label className="col-md-4 control-label" for="product_name_fr">tittle</label>
      <div className="col-md-4">
        <input id="tittle" name="tittle"  className="form-control input-md" required=""
          type="text" onChange={inputhandler} />

      </div>
    </div>

    <div className="form-group">
      <label className="col-md-4 control-label" for="available_quantity">body</label>
      <div className="col-md-4">
        <input id="body" name="body"  className="form-control input-md" required="" type="text"
          onChange={inputhandler} />
      </div>
    </div>

    
    

    <div className="form-group">
      <label className="col-md-4 control-label" for="singlebutton">Single Button</label>
      <div className="col-md-4">
        <button id="singlebutton" name="singlebutton" className="btn btn-primary">Button</button>
      </div>
    </div>
  </form>
</>

)
}

export default Addproduct;