import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  const breads = [
    "White",
    "Wheat",
    "Italian",
    "Italian and Cheese",
    "Monterey Cheese"
  ]

  const meats = [
    "Honey Turkey",
    "Turkey",
    "Ham",
    "Salami",
    "Pastrimi",
    "Prosciutto"
  ]
  const cheeses = [
    "American Cheese",
    "Provolone",
    "Swiss",
    "Pepperjack",
    "Cheddar"
  ]
  const toppings = [
    "Lettuce", "Tomatoes", "Banana Pepper", "Jalapeno Peppers", "Red onions", "Olives", "Pickles", "Cucumbers"
  ]


  const condiments = ["Oil", "Vinegar", "Mayo", "Mustard", "Ranch Dressing", "Salt", "Oregano", "Pepper"]
  return (
    <>
      <Header />
      <Menu
        breadChoices={breads}
        cheeseChoices={cheeses}
        meatChoices={meats}
        toppingChoices={toppings}
        condimentChoices={condiments}
      />
      <Footer />
    </>
  )
}

export default App
