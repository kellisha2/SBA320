import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const breads = [
    {
      id: 1,
      name: "White",
      price: "$2.50"

    },
    {
      id: 2,
      name: "Wheat",
      price: "$3.50"

    },
    {
      id: 3,
      name: "Italian",
      price: "$3.99"

    },
    {
      id: 4,
      name: "Italian and Cheese",
      price: "$4.50"

    },
    {
      id: 5,
      name: "Monterey Cheese",
      price: "$3.99"

    }

  ]

  const meats = [
    {
      id: 11,
      name: "Honey Turkey",
      price: "$4.99"

    },
    {
      id: 12,
      name: "Turkey",
      price: "$4.50"

    },
    {
      id: 13,
      name: "Ham",
      price: "$3.99"

    },
    {
      id: 14,
      name: "Salami",
      price: "$3.50"
    },
    {
      id: 15,
      name: "Pastrimi",
      price: "$3.50"

    },
    {
      id: 16,
      name: "Prosciutto",
      price: "$3.50"

    }



  ]
  const cheeses = [
    {
      id: 21,
      name: "American Cheese",
      price: "2.00"

    },
    {
      id: 22,
      name: "Provolone",
      price: "$2.50"

    },
    {
      id: 23,
      name: "Swiss",
      price: "2.00"

    },
    {
      id: 24,
      name: "Pepperjack",
      price: "$2.50"

    },
    {
      id: 25,
      name: "Cheddar",
      price: "2.00"

    }

  ]
  const toppings = [
    {
      id: 31,
      name: "Lettuce",
      price: "$.50"

    },
    {
      id: 32,
      name: "Tomatoes",
      price: "$.25"

    },
    {
      id: 33,
      name: "Banana Pepper",
      price: "$.75"

    },
    {
      id: 34,
      name: "Jalapeno Peppers",
      price: "$.25"

    },
    {
      id: 35,
      name: "Red Onions",
      price: "$.25"

    },
    {
      id: 36,
      name: "Olives",
      price: "$.50"

    },
    {
      id: 37,
      name: "Pickles",
      price: "$.25"

    },
    {
      id: 38,
      name: "Cucumbers",
      price: "$.25"

    },

  ]

  const condiments = [
    {
      id: 41,
      name: "Oil",
      price: "$.25"

    },
    {
      id: 42,
      name: "Vinegar",
      price: "$.25"

    },
    {
      id: 43,
      name: "Mayo",
      price: "$.25"

    },
    {
      id: 44,
      name: "Mustard",
      price: "$.25"

    },
    {
      id: 45,
      name: "Ranch Dressing",
      price: "$.25"

    },
    {
      id: 46,
      name: "Salt",
      price: "$.25"

    },
    {
      id: 47,
      name: "Oregano",
      price: "$.25"

    },
    {
      id: 48,
      name: "Pepper",
      price: "$.25"

    }]
  return (
    <BrowserRouter>
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={
          <Menu
            breadChoices={breads}
            cheeseChoices={cheeses}
            meatChoices={meats}
            toppingChoices={toppings}
            condimentChoices={condiments}
            cart={cart}
            setCart={setCart}
          />
        } />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <Footer  />
    </BrowserRouter>
  )
}

export default App
