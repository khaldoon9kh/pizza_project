import React, { useState } from "react"

const Pizza = (props) => {

  const passPizza = (e) =>{
    props.onPizzaSelect({
      id: props.id,
      topping: props.topping,
      size: props.size,
      vegetarian: props.vegetarian
    })
    
  }

  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian? "Yes": "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={(e) => passPizza(e)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
