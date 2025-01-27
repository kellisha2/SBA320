import { useState } from 'react'
import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Footer from './components/Footer'


function App() {
  const bread = [
    {
      first:"White",
      second: "Wheat",
      third: "Italian",
      fourth: "Italian and Cheese",
      fifth:"Monterey Cheese"
    }
  ]

  const meat = [
    {
      first:"Honey Turkey",
      second: "Turkey",
      third: "Ham",
      fourth: "Salami",
      fifth:"Pastrimi",
      sixth: "Prosciutto"
    }
  ]
  const cheese = [
    {
      first:"American Cheese",
      second: "Provolone",
      third: "Swiss",
      fourth: "Pepperjack",
      fifth:"Cheddar"
    }
  ]
  const toppings = [
    {
      first:"Lettuce",
      second: "Tomatoes",
      third: "Banana Pepper",
      fourth: "Jalapeno Peppers",
      fifth:"Red onions",
      sixth: "Olives",
      seventh: "Pickles",
      eighth: "Cucumbers"
    }
  ]


  const condiments = [
    {
      first:"Oil",
      second: "Vinegar",
      third: "Mayo",
      fourth: "Mustard",
      fifth:"Ranch Dressing",
      sixth:"Salt",
      seventh: "Oregano",
      eighth: "Pepper"
    }
  ]
  return (
    <>
      <Header />
      <Ingredients 
        breadChoices = {bread}
        cheeseChoices = {cheese}
        meatChoices = {meat}
        toppingChoices = {toppings}
        condimentChoices = {condiments}
      />
      <Footer />
    </>
  )
}

export default App
