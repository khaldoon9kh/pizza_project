import React, { Component, useState, useEffect } from "react";
import Pizza from "../components/Pizza";
function PizzaList(props) {
  const [pizzaData,setPizzaData] = useState([])

  const fetchData = async ()=>{
    const res = await fetch("http://localhost:3000/pizzas")
    const data = await res.json()
    console.log(data);
    setPizzaData(data.map(pizza => pizza))
    //console.log(pizzaData)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaData.map(pizzaElement => <Pizza {...pizzaElement} onPizzaSelect = {props.onPizzaSelect}/>)
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
