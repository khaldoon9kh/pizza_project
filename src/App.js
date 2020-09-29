import React, { Component, Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
function App() {
  // const [pizza, setPizza] = useState(initialState)
  const [selectedPizza, setSelectedPizza] = useState({
    topping: "",
    size: "",
    vegetarian: false
  })
  

  //add use effect to invoke the pizza form
  // useEffect(

  // )
  

  console.log(selectedPizza)
  return (
    <Fragment>
      <Header />
      <PizzaForm onPizzaSelect= {selectedPizza}/>
      <PizzaList onPizzaSelect= {setSelectedPizza} />
    </Fragment>
  );
}

export default App;
