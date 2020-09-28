import React,{useEffect, useState} from "react"

const PizzaForm = (props) => {
  //console.log(props)
  const [pizzaState, setPizzaState] = useState({
    topping: "",
    size: "",
    vegetarian: false
  })
  const addPizza = async () => {
    fetch('http://localhost:3000/pizzas', {
              method: "POST",
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(pizzaState)
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
  }
  const handleInputChange = (e) => {
    setPizzaState({...pizzaState, topping: e.target.value})
  }
  const handleSelectChange = (e) => {
    setPizzaState({...pizzaState, size: e.target.value})
  }

  const handleTagChange = (e)=>{
    setPizzaState({...pizzaState, vegetarian: e.target.value})
  }

  const pizzaToForm = () => {
    setPizzaState({
      topping: props.onPizzaSelect.topping,
      size: props.onPizzaSelect.size,
      vegetarian: props.onPizzaSelect.vegetarian,
      id: props.onPizzaSelect.id
    })
  }

  useEffect(()=>{
    pizzaToForm()
    console.log(pizzaState)
  },[props])

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={e => handleInputChange(e)} className="form-control" placeholder="Pizza Topping" value={pizzaState.toppings}/>
        </div>
        <div className="col">
          <select value={pizzaState.size} className="form-control" onChange={e => handleSelectChange(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <select value={pizzaState.vegetaran} className="form-control" onChange={e => handleTagChange(e)}>
            <option value={true} >Vegetarian</option>
            <option value={false}>Not Vegetarian</option>
          </select>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={e => addPizza(e)}>Submit</button>
        </div>
      </div>
  )
}
export default PizzaForm