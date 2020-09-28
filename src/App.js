import React, { Component, Fragment, useState } from "react";
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
